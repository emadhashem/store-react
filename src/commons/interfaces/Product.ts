import {AttributeSet} from './AttributeSet'
import { Price } from './Price'
export interface Product {
    id?: String
    name?: String
    inStock?: Boolean
    gallery?: String[]
    description?: String
    category?: String
    attributes?: AttributeSet[]
    prices?: Price[]
    brand?: String
}