import React from 'react'
import { Container } from '../../commons/styles/Container'
import './attributeset.style.css'
import { AttributeSet } from '../../commons/interfaces/AttributeSet'
import AttributrItemComp from './attribute/AttributrItemComp'
import { _getProductAtrr } from '../../commons/gql_calls/product.get'
const AttributeSetComp: React.FC<{ hideName: boolean, productId: string }> = (
  {  hideName, productId }) => {
  const { data, loading } = _getProductAtrr(productId)
  
  if (loading) return null
  return (
    <Container className='attributeset__container' flexDirction='column' >
      {
        (data) && data.product.attributes!.map(item => (
          <AttributrItemComp 
          key={item.name}
          productId={productId} item={item} hideName={hideName} />
        ))
      }
    </Container>
  )
}

export default AttributeSetComp