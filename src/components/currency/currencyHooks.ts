import { useAppDispatch } from "../../redux/hooks";
import { changeCurrency } from "../../redux/slices/currency.slice";

export const useCurrencyHooks = (symbol: string, label: string, cb: (() => void) | undefined) => {

    const dispatch = useAppDispatch()
    function handleClickedCurrency() {
        dispatch(changeCurrency({ label, symbol }))
        if (cb) cb()

    }
    return {
        handleClickedCurrency
    }
}