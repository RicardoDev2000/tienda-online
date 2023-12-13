import { FC } from "react";
import { Slide } from "react-slideshow-image";
import styles from './ProductSlides.module.css';
import 'react-slideshow-image/dist/styles.css'

interface Props{
    images:string[]
}

export const ProductSlide:FC<Props> = ({images}) => {
  return (            
    <Slide
    easing="ease"
    duration={6000}
    indicators
    >
        {
        images.map( image => {
            const url=`/products/${image}`;

            return(
                <div className={styles['each-slide']} key={image}>
                    <div 
                    style={{
                        backgroundImage:`url(${url})`,
                        backgroundSize:'cover'}}
                        > 
                    </div>
                </div>
            )
        }

        )}

    </Slide>
  )             
}
