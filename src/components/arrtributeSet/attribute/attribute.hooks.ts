import { useState } from "react";

export const useAttributeHooks = () => {
    const [curChoosenValue, setcurChoosenValue] = useState(0)
    function handlechoosenvalue(idx : number) {
        setcurChoosenValue(idx)
    }
    return {
        curChoosenValue, handlechoosenvalue
    }
}