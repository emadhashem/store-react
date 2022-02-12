import styled from 'styled-components'

interface ContainerProps {
    jc?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    ai?: 'center' | 'flex-start' | 'flex-end'
    flexDirction?: 'row' | 'column'
}

export const Container = styled.div <ContainerProps>`
    display: flex;
    flex-direction: ${props => props.flexDirction};
    justify-content: ${props => props.jc};
    align-items: ${props => props.ai};

`