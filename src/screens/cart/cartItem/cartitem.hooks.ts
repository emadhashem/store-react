import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import {decreaseAmount, increaseAmount} from '../../../redux/slices/cart.slice'
export const useCartItemHooks = (cartItemAmount : number, id : string) => {
    
    const dispatch = useAppDispatch()
    function addOneItem() {
        dispatch(increaseAmount({id}))
    }
    function decreaseOneItem() {
        dispatch(decreaseAmount({id}))
    }

    return {
        addOneItem, decreaseOneItem
    }
}