import { Box, Typography } from "@mui/material"
import { ShopLayouts } from "../../../components/layouts"
import { RemoveShoppingCartOutlined } from "@mui/icons-material"

const emptyPage = () => {
  return (
    <ShopLayouts title={"Carrito vacio"} pageDescription="No hay articulos en el carrito de compras"> 
            <Box 
                display='flex'
                justifyContent='center' 
                alignItems='center' 
                height='calc(1000vh-200px)'
                sx={ { flexDirection:{xs:'column',sm:'row'}  } }> 
        <RemoveShoppingCartOutlined sx={{fontSize:100}}/>            
            <Box display='flex' flexDirection='column' alignItems='center'>            
                <Typography marginLeft='2'>Su carrito esta vacio</Typography>
            </Box>
        </Box>
    </ShopLayouts>
  )
}

export default emptyPage