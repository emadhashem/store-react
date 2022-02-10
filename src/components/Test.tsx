import React from 'react'
import { _getProduct } from '../commons/gql_calls/product.get'

function Test() {
    const {data, error, loading} = _getProduct("ps-5")
    console.log(data, error, loading);
    return (
        <div>Test</div>
    )
}

export default Test