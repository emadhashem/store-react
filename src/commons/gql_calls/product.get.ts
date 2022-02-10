import { gql, useQuery, ApolloError } from "@apollo/client"
import { Product } from "../interfaces/Product"

const GET_PRODUCT_ALL = gql`
    query GetProductSAll($id : String!) {
        product(id : $id) {
            gallery
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
                currency {
                    label
                    symbol
                }
            }
        }
    }
`
export const _getProduct = (id: string): { data: Product | undefined, 
    error: ApolloError | undefined, loading: boolean } => {
    const { data, error, loading } = useQuery(GET_PRODUCT_ALL, {
        variables: {
            id
        }
    })
    return { data, error, loading }
}