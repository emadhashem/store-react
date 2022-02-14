import React from 'react'
import { Container } from '../../../commons/styles/Container'
import './attributeItem.style.css'
import { AttributeSet } from '../../../commons/interfaces/AttributeSet'
import { useAttributeHooks } from './attribute.hooks'
const AttributrItemComp: React.FC<{ item: AttributeSet, hideName: boolean }> = ({ hideName,
    item }) => {
    const { curChoosenValue, handlechoosenvalue } = useAttributeHooks()
    return (
        <Container className='attribute__container' flexDirction='column'  >
            {
                (!hideName) && (<p className='attribute__name'>
                    {item.name} :
                </p>)
            }
            <Container className='values__container' >
                {
                    item.items.map((ele, idx) => (
                        <Container key={ele.id}
                            onClick={() => handlechoosenvalue(idx)}
                            className={`value__container ${(idx === curChoosenValue) && 'chossen'}`}
                            jc='center' ai='center' >
                            <p>{ele.displayValue}</p>
                        </Container>
                    ))
                }

            </Container>
        </Container>
    )
}

export default AttributrItemComp