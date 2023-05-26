export function formatCreatedDate(date: String) {
    let dateArr = date.split('-')
    // let year = dateArr[0] 
    // only keep last two digits of year
    let year = dateArr[0].slice(2)
    let month = dateArr[1]
    let day = dateArr[2].split('T')[0]
    return `${month}/${day}/${year}`
}