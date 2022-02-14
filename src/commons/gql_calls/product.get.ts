import { gql, useQuery, ApolloError } from "@apollo/client"
import { Product } from "../interfaces/Product"

const GET_PRODUCT_ALL = gql`
    query GetProductSAll($id : String!) {
        product(id : $id) {
            name 
            id 
            gallery
            description
            category
            brand
            attributes{
                name
                id
                items {
                    displayValue
                    value
                    id
                }
            }
            category
            brand
            prices {
                amount
                currency {
                    label
                    symbol
                }
            }
        }
    }
`
interface ProductAllCall {
    data: {
        product: Product | undefined
    },
    error: ApolloError | undefined,
    loading: boolean

}

export const _getProductAll = (id: string): ProductAllCall => {
    const { data, error, loading } = useQuery(GET_PRODUCT_ALL, {
        variables: {
            id
        }
    })
    return { data, error, loading }
}

const GET_PRODUCT_OVERLAY = gql`
    query GetProductOverLay($id : String!) {
        product(id : $id) {
            gallery
            name 
            id 
            brand
            attributes{
                name
                id
                items {
                    displayValue
                    value
                    id
                }
            }
            prices {
                amount
                currency {
                    label
                    symbol
                }
            }
        }
    }
`
interface ProducyOvetLayCall {
    data: {
        product: Product
    }
    error: ApolloError | undefined,
    loading: boolean
}
export const _getProducyOvetLay = (id: string): ProducyOvetLayCall => {
    const { data, error, loading } = useQuery(GET_PRODUCT_OVERLAY, {
        variables: {
            id
        }
    })
    return { data, error, loading }
}