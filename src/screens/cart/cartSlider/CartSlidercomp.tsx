import React from 'react'
import { Container } from '../../../commons/styles/Container'
import { useCartSliderHooks } from './cartslider.hooks'
import './cartslider.style.css'
const CartSlidercomp: React.FC<{ imgs: string[] }> = ({ imgs }) => {
    const {handleGoLeft, handleGoRight, curImg} = useCartSliderHooks(imgs.length)
    return (
        <Container jc='center' ai='center' className='cartSlider__container'  >
            <span className='goLeft' onClick={handleGoLeft} >{`<`}</span>
            <img src={imgs[curImg]} />
            <span className='goRight' onClick={handleGoRight} >{`>`}</span>
        </Container>
    )
}

export default CartSlidercomp