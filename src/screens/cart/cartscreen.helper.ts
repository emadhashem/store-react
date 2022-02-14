interface CartItem{
    id : string,
    category : string,
    amount : number
}
export function arrFilterBy_category(arr :CartItem[], category : string) {
    return arr.filter(item => item.category === category || category === 'all')
}
