import { gql, useQuery, ApolloError } from "@apollo/client"

import { Category, CategoryInput } from "../interfaces/Category"

const GET_CATEGORY_LIST = gql`
    query GetListByCategoty($input : CategoryInput!){
        category(input : $input) {
            name
            products {
                gallery
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
export const _getListByCategory = (input: { title: string }): {
    data: Category[] | undefined,
    error: ApolloError | undefined, loading: boolean
} => {
    const { data, error, loading } = useQuery(GET_CATEGORY_LIST, {
        variables: {
            input
        }
    })
    return { data, error, loading }
}