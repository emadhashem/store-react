import React from 'react'
import { Container } from '../../commons/styles/Container'
import './dropdown.style.css'

const DropDown: React.FC<{optinalClassName? : string}> = ({ children, optinalClassName }) => {
    
    return (
        <Container className={'dropdown__content ' + optinalClassName} 
        flexDirction='column' jc='center' ai='center' >
            {children}
        </Container>
    )
}

export default DropDown