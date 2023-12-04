import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import {SearchOutlined, ShoppingCartOutlined} from '@mui/icons-material'
import { Badge, Box, Button, IconButton, Link } from '@mui/material'

export const Navbar = () => {
  return (
    <>
    <AppBar position="fixed" color="primary">
      
      <Toolbar>
       
            <Link href='/' display='flex' alignItems='center'>
             <Typography variant="h1">Teslo | </Typography>
             <Typography variant='subtitle1' sx={{ml:0.5}}>Shop</Typography>
            </Link>

            {/*todo:Flex */}
                 <Box flex={1} />
                <Box sx={  {display:{xs:'none', sm:'block'}}  }>
                    <Link href='/categoria/women'><Button>Hombres</Button></Link>  
                    <Link href='/categoria/men'><Button>Mujeres</Button></Link>  
                    <Link href='/categoria/kids'><Button>Niños</Button></Link>  
                </Box>
                  <Box flex={1} />

                  <IconButton>                   
                    <SearchOutlined/>
                  </IconButton>

                  
                  <Link href='/cart'>
                        <IconButton>
                          
                          <Badge badgeContent={2} color="secondary">

                            <ShoppingCartOutlined/>

                          </Badge>
                        </IconButton>
                  </Link>

                  <Button>
                    Menú
                  </Button>
                  

            {/*todo:Flex */}
            
      </Toolbar>
    </AppBar>
    </>
  )
}
