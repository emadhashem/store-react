import {AttributeSet} from './AttributeSet'
import { Price } from './Price'
export interface Product {
    id?: string
    name?: string
    inStock?: Boolean
    gallery?: string[]
    description?: string
    category?: string
    attributes?: AttributeSet[]
    prices?: Price[]
    brand?: string
}