import { Typography, Grid, Card, CardContent, Divider, Box, Button } from '@mui/material';
import { ShopLayouts } from "../../../components/layouts"
import { CartList, OrdenSumary } from '../../../components/cart';

const CartPage = () => {
  return (
    <ShopLayouts title={"Carrito-3"} pageDescription={"Pagina de carrito de compras"}>
        <Typography variant="h1" component="h1">Carrito</Typography>
        <Grid container>
            <Grid item xs={12} sm={7}>
               <CartList editable/>
            </Grid>

            <Grid item xs={12} sm={5}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Orden</Typography>
                        <Divider sx={{my:1}}/>
                        <OrdenSumary/>

                        <Box>
                            <Button sx={{mt:3, '&:hover':{backgroundColor: '#274494'} }} color='secondary' fullWidth>
                                <Typography>Checkout</Typography>
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayouts>
  )
}

export default CartPage