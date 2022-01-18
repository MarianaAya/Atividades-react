import React,{useState} from 'react'
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Form,Field} from 'react-final-form'
import { Typography,Grid,TextField,FormControlLabel, Switch,Button,FormControl } from '@mui/material';
import Input from '../Components/Input'
import ControlLabel from '../Components/ControlLabel';
function Configuration(){
    /*
    const [formState,setFormState] = useState({usuario: "",email: "", receberNotificacoes:""})

    const setUsuario = value=>setFormState(formState => ({...formState, usuario:value}));
    const setEmail = value => setFormState(formState => ({...formState, email: value}))
    const setReceberNotificacoes = value =>setFormState(formState => ({...formState, receberNotificacoes: value}))*/

    const onSubmit = formValues =>{
        alert("Usuario: "+formValues.usuario+" Email: "+formValues.email+(formValues.receberNotificacao ? "Receber notificações":"Não receber notificações"))
    }

    const validate = formValues=>{
        const error={}
        if(!formValues.usuario){
            error.usuario="Usuário é obrigatório"
        }
        if(!formValues.email){
            error.email="Email é obrigatório"
        }
        return error;
    }
    return (
        
        
          
            <Form onSubmit={onSubmit} validate={validate}>
                
                {formProps =>(
                    <form onSubmit={formProps.handleSubmit}>
                        <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Field name="usuario" nomeLabel="Usuário" component={Input}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Field name="email" nomeLabel="Email" component={Input}/>
                        </Grid>
                        <Grid item >
                            <Field name="receberNotificacao" component={ControlLabel}/>
                            
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type="submit">Salvar</Button>
                        </Grid>

                        </Grid>
                    </form>
                )}
                
              
            
                
                
            </Form>
         
            
        
    )
     
}
/*<Grid item xs={12}>
                <Typography variant="subtitle1">Email: {formState.email} ({formState.receberNotificacoes ? "Receber notificações":"Não receber notificações"})
                </Typography>
            </Grid>*/
export default Configuration;