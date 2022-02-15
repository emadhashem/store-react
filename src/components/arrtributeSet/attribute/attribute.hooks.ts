import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changeAttributeIdx } from "../../../redux/slices/cart.slice";

export const useAttributeHooks = (productId: string, attrId: string) => {
    const cartArr = useAppSelector(state => state.cart)
    const checkInCart = () => {
        let item = cartArr.find(item => item.id === productId)
        if (item === undefined) return false
        return true
    }
    const product = useAppSelector(state => {
        const product = state.cart.find(item => item.id === productId)
        return product
    })!
    function checkIfIdxChoosen(idx: number) {
        if (product) {
            const exist = product.attributs.find(item => item.idx === idx && item.id === attrId)
            if (exist) return true
            return false
        }
        return false
    }
    const [curChoosenValue, setcurChoosenValue] = useState(0)

    const dispatch = useAppDispatch()
    function handlechoosenvalue(idx: number) {
        if (!checkInCart()) {
            alert("Please 'ADD IT TO YOUR CART' for choosing ... ")
            return
        }
        dispatch(changeAttributeIdx({ productId, id: attrId, idx }))
        setcurChoosenValue(idx)
    }
    return {
        curChoosenValue, handlechoosenvalue, checkIfIdxChoosen
    }
}