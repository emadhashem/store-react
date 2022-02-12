import React from 'react'
import { _getListByCategory } from '../../commons/gql_calls/category.get'
import { Container } from '../../commons/styles/Container'
import ProductList from '../../components/productlist/ProductList'
import { useAppSelector } from '../../redux/hooks'
import './homescreen.style.css'
function Home() {
    const { id, name } = useAppSelector(state => state.categoty)
    const { data, loading: loadingList } = _getListByCategory({ title: name })
    
    return (
        <Container flexDirction='column' className='home_container' >
            <p className='categoty_name' >{name}</p>
            {
                (!loadingList) && (
                   <ProductList items={data?.category.products ? data?.category.products : []}  />
                )
            }
        </Container>
    )
}

export default Home