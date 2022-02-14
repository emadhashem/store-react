import { useState } from "react"
import { handleMod } from './cartslider.helper'
export const useCartSliderHooks = (imgsLnth: number) => {
    const [curImg, setcurImg] = useState(0)
    function handleGoLeft() {
        let cur = handleMod(curImg - 1, imgsLnth)
        setcurImg(cur)
    }
    function handleGoRight() {
        let cur = handleMod(curImg + 1, imgsLnth)
        setcurImg(cur)
    }
    return {
        handleGoLeft, handleGoRight, curImg
    }
    
}   