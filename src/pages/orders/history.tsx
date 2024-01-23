import { DataGrid, GridCellParams, GridColDef} from '@mui/x-data-grid'
import { ShopLayouts } from '../../../components/layouts'
import { Chip, Grid, Link, Typography } from '@mui/material'

const columns:GridColDef[]=[
    {field:'id',headerName:'ID', width:100},
    {field:'fullName',headerName:'Nombre completo', width:300},
    {
            field:'paid',
            headerName:'Pagada',
            description:'Muestra Informacion de si esta pagada la orden o no',
            width:200,
            renderCell:(params:GridCellParams)=>
            {
                return(
                    params.row.paid ? <Chip label='Pagado' color='success'  variant='outlined' />
                                    : <Chip label='No Pagado' color='error' variant='outlined'  />

                )
            }
    },

    {
        field:'orden',
        headerName:'Ver Orden', 
        width:100,
        sortable:false,
        renderCell:(params:GridCellParams)=>
            {
                    return (
                    <Link href={`/orders/${params.row.id}`} underline='always'><Typography>Ver Orden</Typography></Link>)
            }
    },

];

const rows=[
    {id:1,paid:false,fullName:'Fernando Herrera' },
    {id:2,paid:true,fullName:'Ricardo Rodriguez' },
    {id:3,paid:false,fullName:'Felo Marrero'     },
    {id:4,paid:true,fullName:'Armando Gonzalez'  },
    {id:5,paid:false,fullName:'Hayla Nayade Cesar Cedeño'},
]

const HistoryPage = () => {
  return (
    <ShopLayouts title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'} >
        <Typography variant='h1'>Historial de pedidos</Typography>

        <Grid container>
            <Grid item xs={12} sx={{height:600, width:'100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    
                    
                />                
            </Grid>
        </Grid>



    </ShopLayouts>
  )
}

export default HistoryPage