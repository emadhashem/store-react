import React from 'react'

import { Container } from '../../commons/styles/Container'
import { useAppSelector } from '../../redux/hooks'
import CartItemComp from './cartItem/CartItemComp'
import { arrFilterBy_category } from './cartscreen.helper'
import './cartscreen.style.css'
function CartScreen() {
    const cartArr = useAppSelector(state => state.cart)
    const {name} = useAppSelector(state => state.categoty)
    return (
        <Container className='cartscreenContainer__' flexDirction='column' >
            <Container className='cartTitle__' flexDirction='column' jc='center' >
                <h1>
                    CART
                </h1>
            </Container>
            <Container className='cartContentItems__' flexDirction='column' >
                {
                    arrFilterBy_category(cartArr, name).map(item => (
                        <CartItemComp key={item.id} {...item} />
                    ))
                }
            </Container>
        </Container>
    )
}

export default CartScreen