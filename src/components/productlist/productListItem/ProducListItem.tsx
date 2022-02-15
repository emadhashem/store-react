import React from 'react'
import { Product } from '../../../commons/interfaces/Product'
import { Container } from '../../../commons/styles/Container'
import CurrencyComponent from '../../currency/CurrencyComponent'
import './productlistitem.style.css'
import { countTheCurrency } from './productListItem.helper'
import { useAppSelector } from '../../../redux/hooks'
import { useProductListItemHooks } from './productListItem.hooks'
import removefromcart from '../../../images/removefromcart.png'
const ProducListItem: React.FC<Product & { onClick: () => void }> = ({ name,
    gallery, id, inStock, prices, onClick }) => {
    const { symbol } = useAppSelector(state => state.currency)
    const { amount, currency } = countTheCurrency(symbol, prices)!
    const { checkInCart, handleRemoveFromCartIcon } = useProductListItemHooks(id!)
    return (
        <div className='productListItem_container'  >
            {
                (!inStock) && <Container jc='center' ai='center' className='outStockItem__' >
                    <p>Out Of Stock</p>
                </Container>
            }
            <Container className='productListItem_img'
                onClick={(inStock) ? onClick : () => { }}
                jc='center' ai='center' >
                <img className='product__img'
                    src={(gallery ? gallery[0] : '')}
                />
            </Container>
            {(checkInCart()) && <Container jc='center' ai='center' className='productList__cartIcon' >
                <img onClick={() => handleRemoveFromCartIcon(id!, name!)} src={removefromcart} />
            </Container>}
            <Container className='productListItem_name'
                    onClick={(inStock) ? onClick : () => { }}
                ai='center' >
                <p className='productlistItem__name'  > {name}</p>
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
