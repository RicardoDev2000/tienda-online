import { Box, Typography } from "@mui/material"
import { ShopLayouts } from "../../components/layouts/ShopLayouts"

const Custom404 = () => {
  return (
    <ShopLayouts title='Page not found' pageDescription='La pagina no fue encontrada'>
        <Box 
        display='flex'
        justifyContent='center' 
        alignItems='center' 
        height='calc(1000vh-200px)'
        sx={ {  flexDirection:{xs:'column',sm:'row'}  } }> 

            <Typography variant='h1' component='h1' fontSize={80} fontWeight={200} >404 |</Typography>
            <Typography marginLeft='0' >No encontramos su búsqueda</Typography>
        </Box>
    </ShopLayouts>
  )
}

export default Custom404