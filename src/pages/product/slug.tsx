import { Box, Button, Chip, Grid, Typography } from "@mui/material"
import { ShopLayouts } from "../../../components/layouts"
import { initialData } from "../../../database/products"
import { ProductSlide, SizeSelector } from "../../../components/products"
import { ItemCounter } from "../../../components/ui/ItemCounter"


const product=initialData.products[0]

export const ProductPage = () => {
  return (
   <ShopLayouts title={product.title} pageDescription={product.description}>
      
      <Grid container spacing={3}>


              <Grid item xs={12} sm={7}>
                <ProductSlide 
                images={product.images}
                />
              </Grid>

              <Grid item xs={12} sm={5}>
                  <Box display='flex' flexDirection='column'>
                      <Typography content='h1' variant='h1'>{product.title}</Typography>
                     <Typography content='subtitle1' variant='h2' fontWeight='800'>${product.price}</Typography>
                      <Box sx={{my:2}}>
                            <Typography variant='subtitle2'>Cantidad</Typography>
                            <ItemCounter contador={0}/>
                            <SizeSelector sizes={product.sizes} selectedSize={product.sizes[4]} />
                      </Box>
                      
                      <Button color="secondary" sx={{
                  '&:hover': {
                    backgroundColor:'#274494' 
                  }
                   }} >
                        Agregar al carrito
                      </Button>

                      {/*<Chip label='No hay productos' color='error' variant='outlined' />*/}
                      <Box sx={{mt:3}}>
                          <Typography fontWeight='900' variant="subtitle2">Descripción</Typography>
                          <Typography variant="body2">{product.description}</Typography>
                      </Box>
                  </Box>
              </Grid>        
      </Grid>

   </ShopLayouts>
  )
}
export default ProductPage

 