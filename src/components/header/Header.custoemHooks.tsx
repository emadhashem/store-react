import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleOverLay } from "../../redux/slices/cartOverLay.slice";
import { changeCategory } from "../../redux/slices/category.slice";

const HeaderHooks = (name: string | undefined) => {
    const [curCategory, setcurCategory] =
        useState<{ id: number, name: string | undefined }>({ id: 0, name: name })

    const [openDropDownCart, setopenDropDownCart] = useState(false)
    const cartLength = useAppSelector(state => state.cart.length)
    const handlCategoryCLick = useCallback((idx: number, name: string) => {
        setcurCategory({ name: name, id: idx })
    }, [])
    function handleOpenDropDownCart() {
        setopenDropDownCart(!openDropDownCart)
    }
    const { openOverLay } = useAppSelector(state => state.overLay)
    const dispatch = useAppDispatch()
    function handleCartOverLay() {
        dispatch(toggleOverLay())
    }

    const handleClickOnCategory = useCallback(
        (id: number, name: string) => {
            dispatch(changeCategory({ id, name }))

        },
        [],
    )
    return {
        curCategory, setcurCategory, handlCategoryCLick,
        openDropDownCart, handleOpenDropDownCart, setopenDropDownCart, cartLength,
        handleCartOverLay, openOverLay, handleClickOnCategory
    }
}

export default HeaderHooks