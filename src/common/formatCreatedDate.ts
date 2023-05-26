export function formatCreatedDate(date: String) {
    let dateArr = date.split('-')
    let year = dateArr[0]
    let month = dateArr[1]
    let day = dateArr[2].split('T')[0]
    return `${month}/${day}/${year}`
}