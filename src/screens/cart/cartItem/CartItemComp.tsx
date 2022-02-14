import React from 'react'
import { _getProducyOvetLay } from '../../../commons/gql_calls/product.get'
import { Container } from '../../../commons/styles/Container'
import AttributeSetComp from '../../../components/arrtributeSet/AttributeSetComp'
import { countTheCurrency } from '../../../components/productlist/productListItem/productListItem.helper'
import { useAppSelector } from '../../../redux/hooks'
import CartSlidercomp from '../cartSlider/CartSlidercomp'
import { useCartItemHooks } from './cartitem.hooks'
import './cartitem.style.css'
const CartItemComp: React.FC<{ category: string, id: string, amount: number }> = (
    {
        id, amount, category
    }
) => {
    const { data, loading } = _getProducyOvetLay(id)
    const globalCur = useAppSelector(state => state.currency)
    const curCurrney = countTheCurrency(globalCur.symbol, data.product.prices)!
    const { addOneItem, decreaseOneItem } = useCartItemHooks(amount, id)
    if (loading) return null
    return (
        <Container className='cartitem__container' jc='space-between' ai='center'  >
            <Container className='cartitem__left' flexDirction='column' >
                <Container flexDirction='column' className='brand__name__container' >
                    <p>{data.product.brand}</p>
                    <p className='cartitem__name'>{data.product.name}</p>
                </Container>
                <Container flexDirction='column' className='cartitem__price' >
                    <p>{curCurrney.currency.symbol}{curCurrney.amount}</p>
                </Container>
                <AttributeSetComp items={data.product.attributes!}
                    hideName={true} />
            </Container>
            <Container className='cartitem__right' >
                <Container className='changeAmountOfCartItem__container'
                    flexDirction='column' jc='space-between' ai='center'  >
                    <Container jc='center' ai='center' className='change__btn'
                        onClick={addOneItem}
                    >
                        +
                    </Container>
                    <p>{amount}</p>
                    <Container jc='center' ai='center' className='change__btn'
                        onClick={decreaseOneItem}
                    >
                        -
                    </Container>
                </Container>
                <CartSlidercomp imgs={data.product.gallery!} />
            </Container>
        </Container>
    )
}

export default CartItemComp