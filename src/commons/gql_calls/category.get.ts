import { gql, useQuery, ApolloError } from "@apollo/client"

import { Category } from "../interfaces/Category"
import { Product } from "../interfaces/Product"

const GET_CATEGORY_LIST = gql`
    query GetListByCategoty($input : CategoryInput!){
        category(input : $input) {
            products {
                gallery
                name
                id
                prices {
                    amount
                    currency {
                        label
                        symbol
                    }
                }
                inStock
            }
            
        }
    }
`
interface CategoryListCall {
    data: {
        category: {
            products: Product[] | undefined
        }
    }

    error: ApolloError | undefined
    loading: boolean
}
export const _getListByCategory = (input: { title: string }): CategoryListCall => {
    const { data, error, loading } = useQuery(GET_CATEGORY_LIST, {
        variables: {
            input
        }
    })
    return { data, error, loading }
}
const GET_CATEGORIES = gql`
    query {
        categories {
            name
        }
    }
`
interface CategoriesCall {
    data: {
        categories: Category[]
    } | undefined
    error: ApolloError | undefined
    loading: boolean
}
export const _getCategories = (): CategoriesCall => {
    const { data, error, loading } = useQuery(GET_CATEGORIES)

    return { data, error, loading }
}