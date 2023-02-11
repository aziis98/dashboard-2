import { useEffect, useState } from 'preact/hooks'
import { Clock } from './Clock.jsx'

export const Dashboard = ({}) => {
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
            <Clock />
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
            <div class="spacer"></div>
        </main>
    )
}
