
import { useState } from "react"
import { Price } from "../../commons/interfaces/Price"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { addItem, removeItem } from "../../redux/slices/cart.slice"
export const useProductScreenHooks = (id : string) => {
    const [curImgGallery, setcurImgGallery] = useState('')
    const [brand, setbrand] = useState('')
    const [name, setname] = useState('')
    const [price, setprice] = useState('')
    const [prices, setprices] = useState<Price[]>([])
    const [desc, setdesc] = useState('')
    const [productCategory, setproductCategory] = useState('')
    const curSymbol = useAppSelector(state => state.currency.symbol)
    function handleClickedImg(uri : string) {
        setcurImgGallery(uri)
    }
    const dispatch = useAppDispatch()
    const cartArr = useAppSelector(state => state.cart)
    function checkInCart() {
        let item = cartArr.find(item => item.id === id)
        if(item === undefined) return false
        return true
    }
    function handleClickedCartBtn() {
        if(checkInCart() === true) {
            
            dispatch(removeItem(id))
        }
        else {
            
            dispatch(addItem({id, category : productCategory, amount : 1}))
        }
    }
    return {
        curImgGallery,
        handleClickedImg,
        price, setprice,
        name , setname,
        brand, setbrand,
        prices, setprices,handleClickedCartBtn,
        curSymbol, desc, setdesc, setproductCategory, checkInCart
    }
}
export {}