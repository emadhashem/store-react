import React from "react";

export interface IconProps {
    uri : string
    haveUpLeftIcon : boolean
    content? : string | React.FC
    size : number
    onClick : () => void | any
    haveDropDown : boolean
    dorpDwonSize? : number
    optionalClassName? : string
}