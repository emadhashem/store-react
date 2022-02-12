import React from 'react'
import { Product } from '../../../commons/interfaces/Product'
import { Container } from '../../../commons/styles/Container'
import CurrencyComponent from '../../currency/CurrencyComponent'
import './productlistitem.style.css'
import { countTheCurrency } from './productListItem.helper'
import { useAppSelector } from '../../../redux/hooks'
const ProducListItem: React.FC<Product & { onClick: () => void }> = ({ name,
    gallery, id, inStock, prices, onClick }) => {
    const {symbol} = useAppSelector(state => state.currency)
    const { amount, currency } = countTheCurrency(symbol, prices)!
    return (
        <div className='productListItem_container' onClick={onClick} >

            <Container className='productListItem_img'
                jc='center' ai='center' >
                <img className='product__img'
                    src={(gallery ? gallery[0] : '')}
                />
            </Container>
            <Container className='productListItem_name'
                ai='center' >
                <p> {name}</p>
            </Container>
            <Container className='productListItem_price'
                ai='center' >
                <CurrencyComponent label={amount + ""}
                    symbol={currency.symbol}
                />
            </Container>
        </div>
    )
}

export default ProducListItem
