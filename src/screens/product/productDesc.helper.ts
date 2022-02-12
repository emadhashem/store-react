import { Price } from "../../commons/interfaces/Price"

export const countTheCurrency = (curCurrencySymbol: string, prices: Price[] | undefined)
    : Price | undefined => {
    const item = prices?.find(element => element.currency.symbol === curCurrencySymbol)
    return item
}

export const parseString = (str : string) => {
    let arr = str.split('.')
    let ret = ''
    for(let i = 0; i < arr.length; i++) {
        ret += arr[i]
        if(i < arr.length - 1) ret += '.<br/>'
    }
    return ret
}