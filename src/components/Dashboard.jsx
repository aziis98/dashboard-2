import { useEffect, useState } from 'preact/hooks'

function getDate() {
    const d = new Date()

    const month = (d.getMonth() + 1).toString().padStart(2, '0')
    const day = d.getDate().toString().padStart(2, '0')

    return `${d.getFullYear()}-${month}-${day}`
}

function getTime() {
    const d = new Date()
    const hours = d.getHours().toString().padStart(2, '0')
    const minutes = d.getMinutes().toString().padStart(2, '0')
    const seconds = d.getSeconds().toString().padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
}

function useDateTime() {
    const [date, setDate] = useState(getDate())
    const [time, setTime] = useState(getTime())

    useEffect(() => {
        const t = setInterval(() => {
            setDate(getDate())
            setTime(getTime())
        }, 1000)

        return () => {
            clearInterval(t)
        }
    })

    return [date, time]
}

export const Dashboard = ({}) => {
    const [date, time] = useDateTime()
    const [dark, setDark] = useState(localStorage.getItem('dark') === 'true')

    useEffect(() => {
        localStorage.setItem('dark', `${dark}`)
        document.body.classList.toggle('dark', dark)
    }, [dark])

    return (
        <main class="dashboard">
            <div class="settings">
                <button onClick={() => setDark(value => !value)}>
                    <span class="material-symbols-outlined">light_mode</span>
                </button>
            </div>
            <div class="clock">
                <div class="left">{date}</div>
                <div class="right">{time}</div>
            </div>
            <div class="bookmarks">
                <div class="app">
                    <a href="https://google.com/">
                        <img src="/google.svg" alt="google" />
                    </a>
                </div>
                <div class="app">
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                        <img src="/gmail.svg" alt="gmail" />
                    </a>
                </div>
                <div class="app">
                    <a href="https://calendar.google.com/calendar/u/0/r">
                        <img src="/calendar.svg" alt="calendar" />
                    </a>
                </div>
                <div class="app">
                    <a href="https://news.ycombinator.com/">
                        <img src="/hacker-news.svg" alt="hacker news" />
                    </a>
                </div>
                <div class="app">
                    <a href="https://lobste.rs/">
                        <img src="/lobster-news.png" alt="lobster" />
                    </a>
                </div>
                <div class="app">
                    <a href="https://www.youtube.com/">
                        <img src="/youtube.svg" alt="youtube" />
                    </a>
                </div>
            </div>
            <div class="spacer" style={{ height: '4rem' }}></div>
        </main>
    )
}
