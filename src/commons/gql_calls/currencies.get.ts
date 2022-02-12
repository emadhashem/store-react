import { useQuery, ApolloError, gql } from "@apollo/client";
import { Currency } from "../interfaces/Currency";

const GET_CURRENCIES = gql`
    query {
        currencies {
            label
            symbol
        }
}
`
interface CurrenciesCall {
    data: {
        currencies: Currency[]
    }
    error: ApolloError | undefined
    loading: boolean
}

export const _getCurrencies = (): CurrenciesCall => {
    const { data, error, loading } = useQuery(GET_CURRENCIES)
    return { data, error, loading }
}