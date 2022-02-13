import React from 'react'

import { Container } from '../../commons/styles/Container'
import { useAppSelector } from '../../redux/hooks'
import './cartscreen.style.css'
function CartScreen() {
    const cartArr = useAppSelector(state => state.cart)
    return (
        <Container className='cartscreenContainer__' flexDirction='column' >
            <Container className='cartTitle__' flexDirction='column' jc='center' >
                <h1>
                    CART
                </h1>
            </Container>
            <Container className='cartContentItems__' >

            </Container>
        </Container>
    )
}

export default CartScreen