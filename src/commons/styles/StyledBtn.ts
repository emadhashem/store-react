import styled from "styled-components";
interface StyledBtnPorps {
    width : string,
    height : string,
    bgClr : string,
    active? : string,
    color : string
}
export const StyledBtn = styled.button<StyledBtnPorps>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bgClr};
    outline: none;
    border: 0;
    color: ${props => props.color};
    cursor: pointer;
    :active{
        transform: translateY(2px);
    }
`