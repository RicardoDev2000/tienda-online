import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { IProduct } from "../../interfaces"
import { FC, useMemo, useState } from "react";


interface Props{
    product:IProduct;

}
export const ProductCard:FC<Props> = ({product}) => {

    const [isHovered, setIsHovered] = useState(false);


    const productImage = useMemo(() => {    
      return isHovered
        ? `products/${product.images[1]}`
        : `products/${product.images[0]}`
         
    }, [isHovered, product.images]);


  return (
    <Grid item xs={6} sm={4} 
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
     >      
        <Link href="/product/slug" >
            <Card>
                 <CardActionArea>
                   <CardMedia
                   component='img'
                   image={productImage}
                   alt={product.title}
                   className='fideIn'
                   />
                 </CardActionArea>
              </Card>           
        </Link>

          <Box sx={{mt:1}} className='fideIn'>         
          <Typography fontWeight={700}>{product.title}</Typography>
          <Typography fontWeight={500}>${product.price}</Typography>
          </Box>
    </Grid> 
)}
