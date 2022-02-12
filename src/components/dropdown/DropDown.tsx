import React from 'react'
import { Container } from '../../commons/styles/Container'
import './dropdown.style.css'

const DropDown: React.FC = ({ children }) => {
    
    return (
        <Container className='dropdown__content' flexDirction='column' jc='center' ai='center' >
            {children}
        </Container>
    )
}

export default DropDown