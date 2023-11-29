<<<<<<< HEAD
import { Inter } from 'next/font/google'
import { ShopLayouts } from '../../components/layouts/ShopLayouts';
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { initialData } from '../../database/products';
=======
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ShopLayouts } from '../../components/layouts/ShopLayouts';
import { Typography } from '@mui/material';

>>>>>>> 5f56bcb (¨mi.primera.tienda¨)
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<<<<<<< HEAD
    <ShopLayouts title={'Tesla-Shop'} pageDescription={'Encuentra los mejores productos de tesla shop'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>       
        <Typography variant='h2' sx={{mb:1}}>Todos los productos</Typography> 

        <Grid container spacing={4}>
              {initialData.products.map(product=>(

                  <Grid item xs={6} sm={4} key={product.slug}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                        component='img'
                        image={ `products/${product.images[0] }` }
                        alt={product.title}
                        />
                      </CardActionArea>
                    </Card>
                  </Grid>
                
              ))
             
              }  

        </Grid>
=======
    <ShopLayouts title={'Tesla-Shop'} pageDescription={'Encuentraos mejores productos de tesla shop'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>       
        <Typography variant='h2' sx={{mb:1}}>Todos los productos</Typography>                      

>>>>>>> 5f56bcb (¨mi.primera.tienda¨)
    </ShopLayouts>
  )
}
