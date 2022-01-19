import {Grid, TableContainer,Table,TableBody, TableHead, TableRow, TableCell} from '@mui/material'
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import api from '../Services/api'
import {useState} from 'react'
function ItemList(props){
    const [items,setItems] = useState([]);
    useEffect(()=>{
        api.getItems()
            .then(items=>setItems(items));
    },[])
    const StyledTableCell = styled(TableCell)(() => ({

          backgroundColor: "black",
          color: "white"
    }));
      
    return <Grid container >
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">Código</StyledTableCell>
                        <StyledTableCell align="center">Descrição</StyledTableCell>
                        <StyledTableCell align="center">Ativo</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item,index)=>
                        <TableRow key={index}>
                            <TableCell align="center">{item.id}</TableCell>
                            <TableCell align="center">{item.codigo}</TableCell>
                            <TableCell align="center">{item.descricao}</TableCell>
                            <TableCell align="center">{(item.ativo? "Ativo": "Desativado")}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </Grid>
}

export default ItemList;