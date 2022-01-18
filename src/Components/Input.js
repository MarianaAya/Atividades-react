import {TextField} from '@mui/material'

function Input(props){
    const errorMessage = props.meta.error;
    const shoudShowError = !!errorMessage && props.meta.touched;
    const value = props.input.value;

    const onChange = ev => props.input.onChange(ev.target.value);
    return <>
        {props.label}
            <TextField fullWidth value={value} onChange={onChange}  label={props.nomeLabel} {...props.input}></TextField>
            {shoudShowError && errorMessage}
        
    </>
}

export default Input;