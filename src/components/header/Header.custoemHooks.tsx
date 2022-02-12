import React, { useState } from "react";

const HeaderHooks = (name : string | undefined) => {
    const [curCategory, setcurCategory] = 
    useState<{id : number, name : string | undefined}>({id : 0, name : name})
    
    const [openDropDownCart, setopenDropDownCart] = useState(false)
    function handlCategoryCLick(idx : number, name : string) {
        setcurCategory({name : name, id : idx})
    }
    function handleOpenDropDownCart() {
        setopenDropDownCart(!openDropDownCart)
    }
    return {
        curCategory, setcurCategory, handlCategoryCLick,
        openDropDownCart, handleOpenDropDownCart, setopenDropDownCart
    }
}

export default HeaderHooks