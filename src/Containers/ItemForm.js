import {Grid, Button} from '@mui/material'
import React,{useState} from 'react'
import {Form,Field} from 'react-final-form'
import Input from '../Components/Input'
function ItemForm(props){
    /*
    const [formState,setFormState] = useState({descricao: "",codigo:""})
 
    const setDescricao = value => setFormState(formState=>({...formState, descricao:value}))
    const setCodigo = value => setFormState(formState=>({...formState,codigo:value}))*/
   
    const salvarItem = formValues =>{
        props.setList([...props.list,{id:props.id,codigo:formValues.codigo,descricao: formValues.descricao}])
        
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

    const initialValues ={codigo:"xxxxxx",descricao:"xxxxxx"}
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