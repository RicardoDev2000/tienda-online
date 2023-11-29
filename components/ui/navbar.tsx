import AppBar from '@mui/material/AppBar'
import { Link } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'

export const navbar = () => {
  return (
    <>
    <AppBar position="fixed" color="primary">
      <Toolbar>
          <NextLink href='/' passHref>
            <Link>
             <Typography variant="h6">Teslo</Typography>
             <Typography>Shop</Typography>
            </Link>
          </NextLink>
      </Toolbar>
    </AppBar>
    </>
  )
}
