import React from 'react'
import { Container } from '../../commons/styles/Container'
import './attributeset.style.css'
import { AttributeSet } from '../../commons/interfaces/AttributeSet'
import AttributrItemComp from './attribute/AttributrItemComp'
const AttributeSetComp: React.FC<{ items: AttributeSet[], hideName: boolean }> = (
  { items, hideName }) => {
  return (
    <Container className='attributeset__container' flexDirction='column' >
      {
        items.map(item => (
          <AttributrItemComp item={item} hideName = {hideName} />
        ))
      }
    </Container>
  )
}

export default AttributeSetComp