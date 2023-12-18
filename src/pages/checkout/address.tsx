import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { ShopLayouts } from "../../../components/layouts"

const address = () => {
  return (
    <ShopLayouts title={"Direccion"} pageDescription={"Confirmar direccion de destino"}>
        <Typography variant='h1' component='h1'>Direccion</Typography>
        <Grid container spacing={3} sx={{mt:2}}>
                <Grid item xs={12} sm={6} >
                    <TextField label='Nombre' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Apellido' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <Select
                        variant='filled'
                        label='Pais'
                        value={1}>
                            <MenuItem value={1}>Costa Rica</MenuItem>
                            <MenuItem value={2}>Venezuela</MenuItem>
                            <MenuItem value={3}>Guatemala</MenuItem>
                            <MenuItem value={4}>Mexico</MenuItem>
                            <MenuItem value={5}>Chile</MenuItem>
                            <MenuItem value={6}>Cuba</MenuItem>
                            <MenuItem value={7}>Peru</MenuItem>
                        </Select>
                    </FormControl>            
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Ciudad' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Direccion' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Direccion 2' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Codigo Postal' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Telefono' variant='filled' fullWidth/>
                </Grid>

                <Box sx={{mt:5}} display='flex' justifyContent='center'>
                <Button color='secondary' size='large'>
                 Realizar Pedido
                </Button>
                </Box>
        </Grid>

    </ShopLayouts>
  )
}

export default address