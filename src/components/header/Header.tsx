import React, { useEffect } from 'react'
import { _getCategories } from '../../commons/gql_calls/category.get'
import { Container } from '../../commons/styles/Container'
import Category from '../category/Category'
import './header.style.css'
import useHeaderHooks from './Header.custoemHooks'
import logo from '../../images/logo.png'
import Icon from '../iconCompnent/Icon'
import cart from '../../images/cart.png'
import dollar from '../../images/dollar.png'
import up from '../../images/up.png'
import down from '../../images/down.png'
import { _getCurrencies } from '../../commons/gql_calls/currencies.get'
import DropDown from '../dropdown/DropDown'
import CurrencyComponent from '../currency/CurrencyComponent'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeCategory } from '../../redux/slices/category.slice'
import { useHistory } from 'react-router-dom'

function Header() {

    const { data, loading: loadingCategories } = _getCategories()
    const { data: currenciesData, loading: loadingCurrencies } = _getCurrencies()
    const dispatch = useAppDispatch()
    const { id, name } = useAppSelector(state => state.categoty)
    const { symbol } = useAppSelector(state => state.currency)
    const go = useHistory()
    function handlePath() {
        if (window.location.pathname.toLowerCase().includes('product')) {
            window.location.assign('/')
            return
        }
    }
    useEffect(() => {
        dispatch(changeCategory({
            id: 0, name: data?.categories[0]?.name ?
                data?.categories[0]?.name : ''
        }))

    }, [loadingCategories])

    const {
        handleOpenDropDownCart,
        openDropDownCart, handleClickOnCategory,
        setopenDropDownCart, cartLength, handleCartOverLay, openOverLay
    } =
        useHeaderHooks(name)
    

    return (
        <Container className='container'

            flexDirction='row' ai='center'
            jc='space-between' >
            {
                (!loadingCategories) && (
                    <Container className='categorys_container'
                        jc='space-between'
                        ai='center'
                        flexDirction='row'
                    >
                        {
                            data?.categories.map(({ name }, idx) => (
                                <Category key={name} title={name}
                                    active={(id === idx)}
                                    onClick={() => {
                                        handleClickOnCategory(idx, name)
                                        handlePath()
                                    }
                                    }
                                />

                            ))
                        }
                    </Container>
                )
            }

            <Container className='logo__container'
                jc='center'
                ai='center'
            >
                <img src={logo} />
            </Container>
            <Container className='currencyswitcher__cart__icon_holder'
                jc='space-between' ai='center' >
                <Container jc='flex-end' ai='center'
                    flexDirction='row'
                    className='currencyswitcher__cart__icon_content'
                >
                    <Container flexDirction='row' ai='center' jc='center'  >
                        <p>{symbol}</p>

                        <Icon optionalClassName='iconImg__active'
                            uri={(openDropDownCart) ? up : down}
                            onClick={() => handleOpenDropDownCart()}
                            haveDropDown={openDropDownCart}
                            haveUpLeftIcon={false}
                            size={25} >
                            {
                                (!loadingCurrencies && (
                                    <DropDown>
                                        {
                                            currenciesData.
                                                currencies.
                                                map(({ label, symbol }) => (
                                                    <CurrencyComponent
                                                        key={label + symbol}
                                                        label={label}
                                                        symbol={symbol}
                                                        onClick={() => setopenDropDownCart(false)}
                                                    />
                                                ))
                                        }
                                    </DropDown>
                                ))
                            }
                        </Icon>
                    </Container>

                </Container>
                <Icon
                    optionalClassName='iconImg__active'
                    uri={cart}
                    haveUpLeftIcon={(cartLength > 0)}
                    size={30}
                    content={`${cartLength}`}
                    onClick={handleCartOverLay}
                    haveDropDown={true}

                >
                    {
                        (openOverLay) && (
                            <DropDown optinalClassName='cartOverlay__' >
                                <Container flexDirction='column'
                                    className='dropdown__body' >

                                </Container>
                            </DropDown>
                        )
                    }
                </Icon>
            </Container>
        </Container>
    )
}

export default React.memo(Header)