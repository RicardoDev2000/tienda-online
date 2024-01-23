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
    <Grid item xs={6} sm={3} 
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    display='flex' flexDirection={'column'}    
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
        
          <Grid style={{flexGrow:1}} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} > 
              <Grid>
                  <Box  className='fideIn'>
                  <Typography fontWeight={700}>{product.title}</Typography>
                  </Box>
              </Grid>  
              <Grid>
                <Box  className='fideIn'>
                <Typography fontWeight={500}>${product.price}</Typography>
                </Box>
              </Grid>  
          </Grid>
    </Grid> 
)}
