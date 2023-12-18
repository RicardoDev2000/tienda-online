import { Grid, Typography } from "@mui/material"

export const OrdenSumary = () => {
  return (
    <Grid container>
          <Grid xs={6} item>
          <Typography>No Productos</Typography>
          </Grid>
          <Grid xs={6} item display='flex' justifyContent='end'>
          <Typography>3</Typography>
          </Grid>

          <Grid xs={6} item>
          <Typography>SubTotal</Typography>
          </Grid>
          <Grid xs={6} item display='flex' justifyContent='end'>
          <Typography>$200.63</Typography>
          </Grid>

          <Grid xs={6} item>
          <Typography>Impuestos(15%)</Typography>
          </Grid>
          <Grid xs={6} item display='flex' justifyContent='end'>
          <Typography>$30.11</Typography>
          </Grid>
          
          <Grid  item xs={6} sx={{mt:2}}>
          <Typography variant='subtitle1' content='h2'>Total</Typography>
          </Grid>
          <Grid item xs={6} sx={{mt:2}} display='flex' justifyContent='end'>
          <Typography variant='subtitle1'>$230.74</Typography>
          </Grid>
          
    </Grid>
  )
}
