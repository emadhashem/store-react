import React from 'react'
import { Container } from '../../../commons/styles/Container'
import './galleryimg.style.css'
interface GalleryImgPorps {
    uri: string,
    onClick: () => void
    size: number
}
const GalleryImgComponent: React.FC<GalleryImgPorps> = ({ uri, size ,onClick }) => {
    return (
        <Container className='galleryimg_container'
            style={{ width: size, height: size }}
            jc='center' ai='center' >
            <img src={uri}onClick={onClick} />
        </Container>
    )
}

export default GalleryImgComponent