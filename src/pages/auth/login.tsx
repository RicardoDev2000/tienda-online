import { AuthLayout } from '../../../components/layouts'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'

const LoginPage = () => {
  return (
    
    <AuthLayout title={'Pagina de Login'}>
<Grid display='flex' flexDirection={'column'}>

      <Grid display='flex' justifyContent='center' alignItems='center'>
                  <Typography variant="h1">Teslo</Typography>
                  <Typography sx={{ml:0.5}}><img src='../frutero.svg' alt='frutero'></img></Typography>
                  <Typography variant='subtitle1' sx={{ml:0.5}}>Shop</Typography>
                 
      </Grid>
     <Box sx={{width:350, padding:'10px 20px'}}>
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <Typography variant='h1' component='h1'>Iniciar Sesión</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Correo" variant="filled" fullWidth/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Contraseña" variant="filled" fullWidth type='password'/>
        </Grid>
        <Grid item xs={12}>
          <Button color="secondary" className='circular-btn' size='large' fullWidth>
            Ingresar
          </Button>
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='end'>
          <Link href='/auth/register' underline='always' >
           No tienes cuenta?
          </Link>
        </Grid>
      </Grid>

     </Box>
</Grid>
    </AuthLayout>
  )
}

export default LoginPage