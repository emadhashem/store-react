import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleOverLay } from "../../redux/slices/cartOverLay.slice";

const HeaderHooks = (name : string | undefined) => {
    const [curCategory, setcurCategory] = 
    useState<{id : number, name : string | undefined}>({id : 0, name : name})
    
    const [openDropDownCart, setopenDropDownCart] = useState(false)
    const cartLength = useAppSelector(state => state.cart.length)
    function handlCategoryCLick(idx : number, name : string) {
        setcurCategory({name : name, id : idx})
    }
    function handleOpenDropDownCart() {
        setopenDropDownCart(!openDropDownCart)
    }
    const dispatch = useAppDispatch()
    function handleCartOverLay() {
        dispatch(toggleOverLay())
    }
    return {
        curCategory, setcurCategory, handlCategoryCLick,
        openDropDownCart, handleOpenDropDownCart, setopenDropDownCart ,cartLength,
        handleCartOverLay
    }
}

export default HeaderHooks