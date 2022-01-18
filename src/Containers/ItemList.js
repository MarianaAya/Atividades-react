import {Grid, TableContainer,Table,TableBody, TableHead, TableRow, TableCell} from '@mui/material'
import { styled } from '@mui/material/styles';
function ItemList(props){
    const list=props.list
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map(item=>
                        <TableRow>
                            <TableCell align="center">{item.id}</TableCell>
                            <TableCell align="center">{item.codigo}</TableCell>
                            <TableCell align="center">{item.descricao}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </Grid>
}

export default ItemList;