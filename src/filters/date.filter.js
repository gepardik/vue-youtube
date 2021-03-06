export default function dateFilter(value, format = "date") {
    const options = {}

    if (format.includes('date')) {
        options.day = 'numeric'
        options.month = 'long'
        options.year = 'numeric'
    }

    if (format.includes('time')) {
        options.hour = 'numeric'
        options.minute = '2-digit'
        options.second = '2-digit'
    }
    return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
}