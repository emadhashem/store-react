import React from 'react'
import { useHistory } from 'react-router-dom'
import { Product } from '../../commons/interfaces/Product'
import { useAppSelector } from '../../redux/hooks'
import './productlist.style.css'
import ProducListItem from './productListItem/ProducListItem'
const ProductList: React.FC<{ items: Product[] }> = ({ items }) => {
    const { label, symbol } = useAppSelector(state => state.currency)
    const go = useHistory()
    return (
        <div className='list_container' >
            {
                items.map(item => (
                    <ProducListItem {...item} onClick={() => {
                        go.push('/cart/:' + item.id)
                    }}
                    />
                ))
            }
        </div>
    )
}

export default ProductList