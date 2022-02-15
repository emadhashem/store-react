import { gql, useQuery, ApolloError } from "@apollo/client"
import { AttributeSet } from "../interfaces/AttributeSet"
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
        },

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
        },


    })
    return { data, error, loading }
}

const GET_PRODUCT_ATTR = gql`
    query getProductAttr($id : String!) {
        product(id : $id) {
            id
            attributes{
            name
            id
            type
            items {
                displayValue
                value
                id
            }
        }
        }
        
    }      
    
`
interface ProductAttrCall {
    data: {
        product: Product
    }
    error: ApolloError | undefined
    loading: boolean
}
export const _getProductAtrr = (id: string): ProductAttrCall => {
    const { data, error, loading } = useQuery(GET_PRODUCT_ATTR, {
        variables: {
            id
        },
        
    })

    return { data, error, loading }
}