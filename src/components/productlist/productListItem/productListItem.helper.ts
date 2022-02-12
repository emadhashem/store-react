import { Price } from "../../../commons/interfaces/Price";

export const countTheCurrency = (curCurrencySymbol: string, prices: Price[] | undefined)
    : Price | undefined => {
    const item = prices?.find(element => element.currency.symbol === curCurrencySymbol)
    return item
}