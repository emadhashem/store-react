import { useAppDispatch } from "../../../redux/hooks";
import { removeItem } from "../../../redux/slices/cart.slice";
import { useProductScreenHooks } from "../../../screens/product/productscreen.hooks";

export const useProductListItemHooks = (id : string) => {

    const {checkInCart} = useProductScreenHooks(id)
    const dispatch = useAppDispatch()
    function handleRemoveFromCartIcon(id : string, name : string) {
        alert(`${name} product, removed from your Cart.`)
        dispatch(removeItem(id))
    }
    return {
        checkInCart,
        handleRemoveFromCartIcon
    }
}

