export function getAtleasetFirst2Ele(arr : any[]) {
    if(arr.length <= 2) return arr
    return arr.slice(0, 2)
}