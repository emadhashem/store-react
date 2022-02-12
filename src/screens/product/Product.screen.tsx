import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { _getProductAll } from '../../commons/gql_calls/product.get'
import { Container } from '../../commons/styles/Container'
import { StyledBtn } from '../../commons/styles/StyledBtn'
import CurrencyComponent from '../../components/currency/CurrencyComponent'
import GalleryImgComponent from './galleryimg/GalleryImgComponent'
import { countTheCurrency, parseString } from './productDesc.helper'
import { useProductScreenHooks } from './productscreen.hooks'

import './productscreen.style.css'
function Productscreen() {
    const { productId } = useParams<{ productId: string }>()
    const { data: productData, loading } = _getProductAll(productId)
    const { curImgGallery,
        handleClickedImg,
        setbrand, setname, name, brand, price, prices, setprices,
        setprice, curSymbol, desc, setdesc, setproductCategory ,handleClickedCartBtn,
        checkInCart
    } = useProductScreenHooks(productId)

    useEffect(() => {
        if (!loading) {
            if (productData.product?.gallery) handleClickedImg(productData.product?.gallery[0])
            if (productData.product?.brand) setbrand(productData.product?.brand)
            if (productData.product?.name) setname(productData.product?.name)
            if (productData.product?.prices) setprices(productData.product?.prices)
            if (productData.product?.description) setdesc(productData.product?.description)
            if(productData.product?.category) setproductCategory(productData.product?.category)
        }
    }, [loading])
    const curPrice = countTheCurrency(curSymbol, prices)!

    if (loading) return null

    return (
        <Container className='productdesc__container' jc='center' ai='center'  >
            <Container className='product__content' flexDirction='row' jc='space-between' >
                <Container className='product__gallrey' >
                    <Container flexDirction='column' jc='space-between'
                        className='product__gallery__left' >
                        {
                            productData.product?.gallery?.map((item, idx) => (
                                <GalleryImgComponent key={item} uri={item} onClick={() => {
                                    handleClickedImg(item)
                                }}
                                    size={100}

                                />
                            ))
                        }
                    </Container>
                    <Container className='product__gallery__right' >
                        <img src={curImgGallery} />
                    </Container>
                </Container>
                <Container className='product__desc' flexDirction='column' >
                    <Container flexDirction='column' className='desc__brand__name' >
                        <p className='desc__brand' >{brand}</p>
                        <p className='desc__name' >{name}</p>
                    </Container>
                    <Container className='desc__attributes' >

                    </Container>
                    {
                        (curPrice) && (
                            <Container flexDirction='column' className='desc__price' >
                                <p className='decs__price__tile' > PRICE : </p>
                                <p className='decs__price__tile' >
                                    {curPrice.currency.symbol} {curPrice.amount} </p>

                            </Container>
                        )
                    }
                    <Container 
                    jc='center' ai = 'center'
                    className='product__desc__addToCart_btn' >
                        <StyledBtn 
                        onClick={handleClickedCartBtn}
                        width='100%'
                            height='60px'
                            color='white'
                            bgClr={(checkInCart()) ? 'red' : 'rgba(94, 206, 123, 1)'}
                        >
                            {
                                (!checkInCart()) ? 'ADD TO CART' : 'REMOVE FROM CART'
                            }
                        </StyledBtn>
                    </Container>
                    <Container className='product__desc__text' >
                        <p dangerouslySetInnerHTML={{ __html: parseString(desc) }} ></p>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Productscreen