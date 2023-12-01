import { Inter } from 'next/font/google'
import { ShopLayouts } from '../../components/layouts/ShopLayouts';
import { Typography } from '@mui/material';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ShopLayouts title={'Tesla-Shop'} pageDescription={'Encuentra los mejores productos de tesla shop'}>
        <Typography variant='h1' component='h1'>Tienda</Typography>       
        <Typography variant='h2' sx={{mb:1}}>Todos los productos</Typography>                      
    </ShopLayouts>
  )
}
