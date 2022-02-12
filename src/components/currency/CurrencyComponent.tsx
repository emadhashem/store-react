import React from 'react'
import { Currency } from '../../commons/interfaces/Currency'
import { Container } from '../../commons/styles/Container'
import './currencycomp.style.css'
import { useCurrencyHooks } from './currencyHooks'
const CurrencyComponent: React.FC<Currency & { onClick?: () => void }> = ({
    label, symbol, onClick }) => {
    const { handleClickedCurrency } = useCurrencyHooks(symbol, label, onClick)
    return (
        <Container
            onClick={handleClickedCurrency}
            className='currency_content' flexDirction='row' jc='center' ai='center' >
            <span style={{ marginRight: 5 }}> {symbol}</span>
            <span>{label}</span>
        </Container>
    )
}

export default CurrencyComponent