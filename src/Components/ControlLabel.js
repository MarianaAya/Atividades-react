import {FormControlLabel, Switch } from '@mui/material';
function ControlLabel(props){
    const errorMessage = props.meta.error;
    const shoudShowError = !!errorMessage && props.meta.touched;
    const value = props.input.value;

    const onChange = ev => props.input.onChange(ev.target.checked);
    return <>
        {props.label}
        <FormControlLabel
                control={<Switch
                checked={value}
                onChange={onChange}
                />}
                label="Receber notificações"
            />
            {shoudShowError && errorMessage}
        
    </>
}

export default ControlLabel;