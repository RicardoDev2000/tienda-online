import { Typography, Grid, Card, CardContent, Divider, Box, Button, Link, Chip } from '@mui/material';
import { ShopLayouts } from "../../../components/layouts"
import { CartList, OrdenSumary } from '../../../components/cart';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrdersPage = () => {
  return (
    <ShopLayouts title={"Resumen de la orden 123456"} pageDescription={"Pagina de resumen de la orden"}>
        <Typography variant="h1" component="h1">Orden ABCD</Typography>
        {/**<Chip 
        sx={{my:2}}
        color='error'
        variant='outlined'
        label='Pendiente de pago'
        icon={<CreditCardOffOutlined/>}
        />*/}

        <Chip 
        sx={{my:2}}
        color='success'
        variant='outlined'
        label='Pagado'
        icon={<CreditScoreOutlined/>}
        />

        <Grid container>
            <Grid item xs={12} sm={7}>
               <CartList/>
            </Grid>

            <Grid item xs={12} sm={5}>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Resumen</Typography>
                        <Divider sx={{my:1}}/>                      

                        <Box display='flex' justifyContent='space-between'>
                         <Typography variant='subtitle1'>Direccion de entrega</Typography>            
                        </Box>
                        
                        <Typography>Ricardo Eloy</Typography>
                        <Typography>55905062</Typography>
                        <Typography>Cuba</Typography>
                        <Typography>Sancti Spiritus</Typography>
                        <Typography>Yaguajay</Typography>
                        <Typography>Calle 5ta #59</Typography>
                        <Divider sx={{m:2}}/>
                        

                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Datos del pedido</Typography>
                            
                        </Box>
                        <OrdenSumary/>
                        <Box>
                            <Typography variant='h1'>Pagar</Typography>
                        </Box>
            
                          <Chip 
                            sx={{my:2}}
                            color='success'
                            variant='outlined'
                            label='Orden Pagada Con Exito'
                            icon={<CreditScoreOutlined/>}
                            />

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayouts>
  )
}
export default OrdersPage