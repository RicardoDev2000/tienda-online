import { Typography, Grid, Card, CardContent, Divider, Box, Button, Link } from '@mui/material';
import { ShopLayouts } from "../../../components/layouts"
import { CartList, OrdenSumary } from '../../../components/cart';

const SummaryPage = () => {
  return (
    <ShopLayouts title={"Resumen de compra"} pageDescription={"Pagina de resumen de la orden"}>
        <Typography variant="h1" component="h1">Resumen de la orden</Typography>
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
                            <Link href='/checkout/address' underline='always' >
                              Editar
                            </Link>
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
                            <Link href='/cart' underline='always' >
                              Editar
                            </Link>
                        </Box>

                        <OrdenSumary/>

                        <Box>
                            <Button sx={{mt:3, '&:hover':{backgroundColor: '#274494'} }} color='secondary' fullWidth>
                                <Typography>Confirmar orden</Typography>
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </ShopLayouts>
  )
}
export default SummaryPage
