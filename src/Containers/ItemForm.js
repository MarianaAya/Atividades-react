import {Grid, Button} from '@mui/material'
import api from '../Services/api'
import React,{useState} from 'react'
import {Form,Field} from 'react-final-form'
import Input from '../Components/Input'
import ControlLabel from '../Components/ControlLabel'

function ItemForm(props){
    /*
    const [formState,setFormState] = useState({descricao: "",codigo:""})
 
    const setDescricao = value => setFormState(formState=>({...formState, descricao:value}))
    const setCodigo = value => setFormState(formState=>({...formState,codigo:value}))*/
   
    const salvarItem = formValues =>{
       
        return api.createItem(formValues)
            .then(()=>alert('Salvo com sucesso'))
            .catch(err=>alert(`Erro: ${err.message}`))
        
        props.setId(props.id+1)
    }
    const validate = formValues=>{
        const error={}
        if(!formValues.codigo){
            error.codigo="Código é obrigatório"
        }
        if(!formValues.descricao){
            error.descricao="Descrição é obrigatório"
        }
        return error;
    }

    const initialValues ={codigo:"xxxxxx",descricao:"xxxxxx",ativo:false}
    return (
      
            <Form onSubmit={salvarItem} validate={validate} initialValues={initialValues}>
                {formProps => (
                    <form onSubmit={formProps.handleSubmit}>
                        <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Field  name="codigo" nomeLabel="Código" component={Input}/>
                                
                        
                        </Grid>
                        <Grid item xs={8}>
                            <Field  name="descricao" nomeLabel="Descrição" component={Input}/>
                        
                        </Grid>
                        <Grid item >
                            <Field name="ativo" nomeLabel="Ativo" component={ControlLabel}/>
                            
                        </Grid>
                        <Grid item xs>
                            <Button variant="contained" type="submit" >Salvar</Button>
                        </Grid>
                        </Grid>
                    </form>
                )}
                
            </Form>
    )
       
}
export default ItemForm;