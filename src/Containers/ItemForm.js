import {Grid, TextField, Button} from '@mui/material'
import React,{useState} from 'react'
function ItemForm(props){
    
    const [descricao,setDescricao] = useState("");
    const [codigo,setCodigo] = useState("");
    const list = props.list
    function salvarItem(){
        
        props.setList([...props.list,{id:props.id,codigo,descricao}])
        setCodigo("");
        setDescricao("");
        props.setId(props.id+1)
    }
    return <Grid container spacing={3}>
        
        <Grid item xs={12}>
            <TextField
                fullWidth
                label="Código"
                value={codigo}
                onChange={ev=>setCodigo(ev.target.value)}
            >
            </TextField>
        </Grid>
        <Grid item xs={12}>
            <TextField
                fullWidth
                label="Descrição"
                value={descricao}
                onChange={ev=>setDescricao(ev.target.value)}
            >
            </TextField>
        </Grid>
        <Grid item xs>
            <Button variant="contained" onClick={salvarItem}>Salvar</Button>
        </Grid>

    </Grid>
}
export default ItemForm;