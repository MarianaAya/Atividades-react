
import './App.css';
import React,{useState} from 'react';

function MyInput({value,onChange}){
  return <input value={value} onChange={ev=>onChange(ev.target.value)}/>
}
function NumericInput({component,value,onChange, ...inputProps}){
  const numericValue = value.replace(/[^\d]/g,'');
  const onChangeNumeric = value => onChange(value.replace(/[^\d]/g,''));
  const InnerComponent = component;

  return <InnerComponent value={numericValue} onChange={onChangeNumeric} {...inputProps}/>
  
}
function formatarCPF(value){

  if(value.length<14){
    let cpf = value.replace(/[^\d]/g,'');
  

    cpf=cpf.replace(/(\d{3})(\d)/,'$1.$2');
    cpf=cpf.replace(/(\d{3})(\d)/,'$1.$2');
    cpf=cpf.replace(/(\d{3})(\d)/,'$1-$2');

    return cpf;
  }
  else
    return value.substring(0,14)

  
}
function CPFInput({component,value,onChange,...inputProps}){
  const InnerComponent = component;
  
  const valueCpf = formatarCPF(value)
    
  const onChangeCPF = value=>onChange(formatarCPF(value) )

 
  
  return <InnerComponent value={valueCpf} onChange={onChangeCPF} {...inputProps}/>
}
function App() {
  const [numero,setNumero] = useState("999");
  const [cpf,setCpf] = useState("");
  //const [date,setDate] = useState(new Date(2020,11,01));
  return (
    <div className="App">
     
        <NumericInput component={MyInput} value={numero} onChange={value=>setNumero(value)}/>
        <CPFInput component={MyInput} value={cpf} onChange={value=>setCpf(value)}/>
        <h2>Número: {numero}</h2>
        <h2>CPF: {cpf}</h2>
    </div>
  );
}

export default App;
