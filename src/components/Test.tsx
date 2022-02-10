import React from 'react'
import { _getListByCategory } from '../commons/gql_calls/category.get';
import { _getProductAll, _getProducyOvetLay } from '../commons/gql_calls/product.get'

function Test() {
    const {data, error, loading} = _getListByCategory({title : "all"})
    console.log(data, error, loading);
    return (
        <div>Test</div>
    )
}

export default Test