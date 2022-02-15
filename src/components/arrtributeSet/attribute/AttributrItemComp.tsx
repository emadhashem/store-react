import React from 'react'
import { Container } from '../../../commons/styles/Container'
import './attributeItem.style.css'
import { AttributeSet } from '../../../commons/interfaces/AttributeSet'
import { useAttributeHooks } from './attribute.hooks'
const AttributrItemComp: React.FC<{ item: AttributeSet, hideName: boolean ,productId : string }> = ({ hideName,
    item, productId }) => {
    
    const { curChoosenValue, 
        handlechoosenvalue, checkIfIdxChoosen } = useAttributeHooks(productId, item.id)
    return (
        <Container className='attribute__container' flexDirction='column'  >
            {
                (!hideName) && (<p className='attribute__name'>
                    {item.name} :
                </p>)
            }
            <div className='values__container' >
                {
                    item.items.map((ele, idx) => (
                        <Container key={ele.id}
                            onClick={() => handlechoosenvalue(idx)}
                            className={`value__container ${(checkIfIdxChoosen(idx)) && 'chossen'}`}
                            jc='center' ai='center' >
                            <p>{ele.displayValue}</p>
                        </Container>
                    ))
                }

            </div>
        </Container>
    )
}

export default AttributrItemComp