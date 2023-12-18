import { Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { initialData } from '../../database/products';
import { ItemCounter } from '../ui';
import { FC } from 'react';

interface Props{
    editable?:boolean;
}


export const CartList:FC<Props> = ({editable}) => {
    const productsInCart=[
        initialData.products[0],
        initialData.products[1],
        initialData.products[2], ]
                       
  return (
    <>
    {
        productsInCart.map(
            product=>  (
                <Grid container spacing={2} key={product.slug} sx={{mb:1}}>
                    <Grid item xs={3}>
                        <Link href='/product/slug'>
                            <CardActionArea>
                                <CardMedia 
                                image={`products/${product.images[0] }`}
                                component='img'
                                sx={{borderRadius:'5px'}}
                                />
                            </CardActionArea>
                        </Link>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography>{product.title}</Typography>
                        <Typography>Talla: <strong>M</strong></Typography>
                        {
                            editable ? <ItemCounter contador={0}/>
                                     : <Typography>3</Typography>
                        }

                    </Grid>
                    <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>                      
                        <Typography fontWeight='1000'>${product.price}</Typography>
                        {/*Editable */}
                        {
                            editable && 
                            <Button variant='text' color='secondary' sx={{ mt:8, '&:hover':{backgroundColor:'#274494', color:'#fff' }}} >Remover</Button>                      
                        }
                    </Grid>
                </Grid>
            )  
        )
    }
    </>
  )
}
