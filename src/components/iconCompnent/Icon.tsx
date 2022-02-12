import React from 'react'
import './icon.style.css'
import { IconProps } from '../../commons/interfaces/componentsTypes/icontypes'
import { Container } from '../../commons/styles/Container'
const Icon: React.FC<IconProps> = ({ content, size, haveUpLeftIcon, uri,
    children, haveDropDown, optionalClassName, onClick }) => {
        
    return (
        <Container jc='center' ai='center'
            className='icon__container'
            style={{ width: size, height: size }}
        >
            <img className={optionalClassName} src={uri} onClick={onClick} />
            {(haveUpLeftIcon) && <Container jc='center' ai='center' className='icon__content' >
                <p>{content}</p>
            </Container>}
            {
                (haveDropDown) && children
            }
        </Container>
    )
}

export default Icon