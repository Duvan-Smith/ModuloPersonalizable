import React,{useState} from 'react';
import {Paper, TextField,Button} from '@material-ui/core';
import '../CSS/App.css'

const sendData=(value)=>{
    var url = 'http://localhost:5000/api';
    var data = {'mensaje': value};
    console.log(data)
    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type':'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

const Demo=()=>{
    const [mensaje,setMesaje]=useState("")
    return(
        <div>
        <Paper className="paperMainDemo">
        <TextField
         className="TextFieldDemo"
          id="outlined-multiline-static"
          label="Mensaje de prueba"
          multiline
          rows={4}
          onChange={(event)=>setMesaje(event.target.value)}
          defaultValue="{'color':'red','tamano':'small','posicion':'left'}"
          variant="outlined"
        />
        <div><Button onClick={()=>sendData(mensaje)} className="Button" variant="contained" color="secondary">Enviar</Button>
       </div>
         </Paper>
        </div>
        
    )
}

export default Demo;