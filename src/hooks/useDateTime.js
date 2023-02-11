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

export function useDateTime() {
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
