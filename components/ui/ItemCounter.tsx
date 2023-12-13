import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import { FC } from "react"

interface Props{
    contador:number;
}

export const ItemCounter:FC<Props> = ({contador}) => {
    contador=1;
  return (
    <Box  display='flex' alignItems='center'>
        <IconButton> <RemoveCircleOutline/> </IconButton>
        <Typography sx={{width:40, textAlign:'center'}} >{contador}</Typography>
        <IconButton> <AddCircleOutline/> </IconButton>
    </Box>
  )
}
