import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //hooks de react
  const [nombres, setNombres] = useState("Daniel"); //se declara y se inicializa al tiempo
  const [formulario, setFormulario] = useState({}); //se declara y se inicializa al tiempo
  const [compras, setCompras] = useState([]); //se declara y se inicializa al tiempo
  const [item, setItem] = useState(); //se declara y se inicializa al tiempo
  
  // let apellidos; //declarada
  // apellidos = "garces" //inicializada

  const cambiarNombre = (event) => {
    console.log(event.target.value);
    setNombres(event.target.value)
  }

  const handleChangeForm = (e) => {
    console.log("mostrando el name", e.target.name)
    console.log("mostrando el value", e.target.value)
    const {name, value} = e.target;
    setFormulario({...formulario, [name]:value}) //clave -> valor {"clave": "valor"}
  }

  const handleSubmit = () => {
    console.log("mostrando values", formulario)
  }
  const handleAddItem = (value)=>{
    // let tmpArry = compras.slice();
    // tmpArry.push(value);
    // setCompras(tmpArry);

    setCompras([...compras, value]);
  }
  
  /*
  VARIACIONES EN LOS ATRIBUTOS

  HTML - JSX
   class - className
   <br> - <br/>
   <hr> - <hr/>
   <label for=""></label> - <label htmlFor=""></label>
   <div style="background-color:red;font-size: 10px;"></div> - <div style={{backgroundColor: 'red', fontSize: '10px'}}

   */

  return (
    <>
    {/* <div style={{marginBottom: '10px', border: '1px solid black', padding: '5px'}}>
      <label>Nombres</label> <br/>
      <input type="text" name="nombres" onBlur={(e)=>handleChangeForm(e)} />
    </div>
    <div style={{marginBottom: '10px', border: '1px solid black', padding: '5px'}}>
      <label>Apellidos</label> <br/>
      <input type="text" name="apellidos" onBlur={(e)=>handleChangeForm(e)} />
    </div>
    <div style={{marginBottom: '10px', border: '1px solid black', padding: '5px'}}>
      <label>Telefono</label> <br/>
      <input type="text" name="telefono" onBlur={(e)=>handleChangeForm(e)} />
    </div>
    <div style={{marginBottom: '10px', border: '1px solid black', padding: '5px'}}>
      <label>Correo</label> <br/>
      <input type="text" name="correo" onBlur={(e)=>handleChangeForm(e)} />
    </div>
    <button type="button" onClick={()=>handleSubmit()}>Enviar</button> */}

    <h3>Lista de compras</h3>
    <label>Articulo</label>
    <input type="text" onBlur={(e)=>handleAddItem(e.target.value)}></input>
      
      <p>Items de la compra</p>
      {compras.map((data,index)=>{
        return(
          <li key={index}>{data}</li>
        )
      })}
    </>
  )
}

export default App
