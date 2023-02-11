import { useDateTime } from '../hooks/useDateTime.js'

export const Clock = ({}) => {
    const [date, time] = useDateTime()

    return (
        <div class="clock">
            <div class="time">{time}</div>
            <div class="date">{date}</div>
        </div>
    )
}
