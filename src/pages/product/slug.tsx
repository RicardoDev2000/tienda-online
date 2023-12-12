import { Box, Button, Chip, Grid, Typography } from "@mui/material"
import { ShopLayouts } from "../../../components/layouts"
import { initialData } from "../../../database/products"

const product=initialData.products[0]

export const ProductPage = () => {
  return (
   <ShopLayouts title={product.title} pageDescription={product.description}>
      
      <Grid container spacing={3}>


              <Grid item xs={12} sm={7}>
                {/* SideShow */}
              </Grid>

              <Grid item xs={12} sm={5}>
                  <Box display='flex' flexDirection='column'>
                      <Typography content='h1' variant='h1'>{product.title}</Typography>
                     <Typography content='subtitle1' variant='h2' fontWeight='800'>${product.price}</Typography>
                
                
                      <Box sx={{my:2}}>
                            <Typography variant='subtitle2'>Cantidad</Typography>
                                   {/* ItemCounter*/}
                      </Box>

                      <Button color='secondary' className='circular-btn'>
                        Agregar al carrito
                      </Button>

                      <Chip label='No hay productos' color='error' variant='outlined' />

                      <Box sx={{mt:3}}>
                          <Typography variant="subtitle2">Descripcion</Typography>
                          <Typography variant="body2">{product.description}</Typography>

                      </Box>

                  </Box>
              </Grid>



        
      </Grid>

   </ShopLayouts>
  )
}
export default ProductPage

 