import React, { useEffect } from 'react'
import { Category as CategoryProps } from '../../../commons/interfaces/Category'
import { Container } from '../../../commons/styles/Container'
import burgermenu from '../../../images/burgermenu.jpg'
import { useAppSelector } from '../../../redux/hooks'
import Category from '../../category/Category'
import { useBurgerMenuHooks } from './burgermenu.hooks'
import useHeaderHooks from '../Header.custoemHooks'
const BurgerComp: React.FC<{ items: CategoryProps[], _className: string, menuClassName: string }> = (
    { items, _className, menuClassName }) => {
    const { handleOpenBurgerMenu, openBurger } = useBurgerMenuHooks()
    const { id, name } = useAppSelector(state => state.categoty)
    const { handleClickOnCategory } = useHeaderHooks(name)
    function handlePath() {
        if (window.location.pathname.toLowerCase().includes('product')) {
            window.location.assign('/')
            return
        }
    }
    return (
        <div className={_className} >
            <img src={burgermenu} onClick={handleOpenBurgerMenu} />
            {(openBurger) && <Container className={menuClassName}
                
                flexDirction='column' ai='center' >
                {
                    items.map(({ name }, idx) => (
                        <Category key={name} title={name}
                            active={(id === idx)}
                            onClick={
                                () => {
                                    handleClickOnCategory(idx, name)
                                    handlePath()
                                    handleOpenBurgerMenu()
                                }
                            }
                        />
                    ))
                }

            </Container>}
        </div>
    )
}

export default BurgerComp