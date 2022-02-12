import { useProductScreenHooks } from "../../../screens/product/productscreen.hooks";

export const useProductListItemHooks = (id : string) => {

    const {checkInCart} = useProductScreenHooks(id)

    return {
        checkInCart
    }
}