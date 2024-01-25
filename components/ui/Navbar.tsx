import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import { MenuSharp, SearchOutlined, ShoppingCartOutlined} from '@mui/icons-material'
import { Badge, Box, Button, Grid, IconButton, Link, TextField, Tooltip } from '@mui/material'



export const Navbar = () => {
  return (
   
    <>
    <AppBar position="fixed" color="primary" >
      
      <Toolbar>
       
            <Link href='/' display='flex' alignItems='center'>
              <Grid display='flex' justifyContent='center' alignItems='center'>
             <Typography variant="h1">Teslo</Typography>
             <Typography sx={{ml:0.5}}><img src='frutero.svg'></img></Typography>
             <Typography variant='subtitle1' sx={{ml:0.5}}>Shop</Typography>
              </Grid>
            </Link>

            {/*todo:Flex */}

            <Box flex={1} />
                     <Grid style={{backgroundColor:'#cea405'}} height='10px'>

                       <TextField  sx={{width:'150px'}}  label="Buscar" variant="filled"  style={{backgroundColor:'white', borderRadius:'40px'}}
                              InputProps={
                                {
                                  endAdornment:(
                                    <IconButton>                   
                                     <SearchOutlined/>
                                   </IconButton>
                                  )
                                }
                              }
                              >
                        </TextField>
                     </Grid>
                      
                     <Box flex={1} />
                      <Box sx={{display:{xs:'none', sm:'block'},mr: 1}  }>
                          <Link href='/categoria/women'><Button>Hombres</Button></Link>  
                          <Link href='/categoria/men'><Button>Mujeres</Button></Link>  
                          <Link href='/categoria/kids'><Button>Niños</Button></Link>                         
                      </Box>


                     
                      
                      

                  <Link href='/cart'>
                    <Tooltip title='Carrito'>
                        <IconButton>                       
                          <Badge badgeContent={2} color="secondary">
                            <ShoppingCartOutlined/>
                          </Badge>
                        </IconButton>
                    </Tooltip>
                  </Link>

                  <Tooltip title='Menú'>
                  <IconButton>                   
                    <MenuSharp/>
                  </IconButton>
                  </Tooltip>
                  

            {/*todo:Flex */}
            
      </Toolbar>
    </AppBar>
    </>
  )
}
