import React, { useEffect } from 'react'
import './category.style.css'
import { CategoryProps } from '../../commons/interfaces/componentsTypes/categoryTypes'
import { Container } from '../../commons/styles/Container'
import { useAppSelector } from '../../redux/hooks'
const Category: React.FC<CategoryProps> = ({ title, onClick, active }) => {
    function handleClick() {
       onClick()
    }
    return (
        <Container
            onClick={handleClick}
            className={`category__container ${(active) ? 'active__category' : ""}`}
            jc='center' ai='center' >
            <p>
                {title}
            </p>
        </Container>
    )
}

export default Category