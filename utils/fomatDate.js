export function formatDateInput(data){
    const formatted = new Date(data).toISOString().slice(0,10)
    return formatted
}