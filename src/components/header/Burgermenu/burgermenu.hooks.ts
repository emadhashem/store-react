import { useState } from "react";

export const useBurgerMenuHooks = () => {
    const [openBurger, setopenBurger] = useState(false)

    function handleOpenBurgerMenu() {
        setopenBurger(!openBurger)
    }
    return {
        handleOpenBurgerMenu, openBurger
    }
}