import React from 'react'
import { Container } from '../../../commons/styles/Container'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { getAtleasetFirst2Ele } from './cartoverlaycomp.helper'
import './cartOverLay.style.css'
import { useHistory } from 'react-router-dom'
import { toggleOverLay } from '../../../redux/slices/cartOverLay.slice'
import CartItemComp from '../cartItem/CartItemComp'
function CartOverlayComp() {
    const cartArr = useAppSelector(state => state.cart)
    const cartOverLayArr = getAtleasetFirst2Ele(cartArr)

    const go = useHistory()
    const dispatch = useAppDispatch()
    return (
        <Container className='overlay__container'
            flexDirction='column'
        >
            <Container className='overlay__header' >
                <p><span style={{ fontWeight: 'bold' }} >My Bag</span> ,
                    {cartArr.length} item{(cartArr.length > 1) ? 's' : ''} </p>
            </Container>
            <Container className='cartoverlayItems__container' flexDirction='column' ai='center' >
                {
                    cartOverLayArr.map(item => {
                        return <CartItemComp {...item} />
                    })
                }
            </Container>
            <Container className='overlay__footer' jc='space-between' >
                <Container className='footer__btn viewbag'
                    onClick={() => {
                        go.push('/cart')
                        dispatch(toggleOverLay())
                    }}
                >
                    <p>VIEW BAG</p>
                </Container>
                <Container className='footer__btn checkout' >
                    <p>checkout</p>
                </Container>
            </Container>
        </Container>
    )
}

export default CartOverlayComp