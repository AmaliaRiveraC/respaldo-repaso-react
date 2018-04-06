import React, { Component } from "react";
//import ReactDOM from "react-dom";
import List from './List';
import Title from './Title';

import data from "./data.js";

//import Button from "./Button.js"
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'reactstrap';
import './App.css';


 class App extends React.Component {
   constructor(props){
     super( );
     this.state={
       data : []
     }
   }

   handleClick = this.handleClick.bind(this)

   handleClick(event)
   {
    //console.log(event)
     //let objeto= {
      // dataName:dataname.target.innerText,
     //}
     //this.setState({data: [objeto].concat(this.state.dataname) })
     console.log(event.target.dataset.name);
     console.log(event.target.dataset.precio);
     
   }
   

  render () {
    let iteration = data.Desayuno.map(item=> item);
    let titles = data.Titles.map(item => item);
    console.log(data, iteration);
    return (
      <section>
        <div className="App-container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-sm-6 offset-sm-3 m-b-30">
               <h1 className="App-logo">{data.nameRestaurant}</h1>
            </div>
          </div>
          <div className="App-container">
          <div className="row">
            <div className="col-md-8 col-sm-8">
               <Title name={titles[0]}/>
                    <table className="table App-table-bordered">

                      <thead>
                        <tr>
                          <th scope="col">Productos</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                          {iteration.map((item) =><List {...item}key={item.id}/>)}

                       
  
                      </tbody>
                    </table>


                <Title name={titles[1]}/>

                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Hamburguesa</th>

                          <th scope="col">Precio Sencilla</th>
                          <th scope="col">Precio Doble</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{data.Comida.Hamburguesas[0].proteina}</th>
                          <td>${data.Comida.Hamburguesas[0].precioSencilla}</td>
                          <td>${data.Comida.Hamburguesas[1].precioDoble}</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> <button type="button" className="btn btn-success">Doble</button></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Hamburguesas[1].proteina}</th>
                          <td>${data.Comida.Hamburguesas[1].precioSencilla}</td>
                          <td>${data.Comida.Hamburguesas[1].precioDoble}</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> <button type="button" className="btn btn-success">Doble</button></td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Hamburguesas[2].proteina}</th>
                          <td>${data.Comida.Hamburguesas[2].precioSencilla}</td>
                          <td>${data.Comida.Hamburguesas[2].precioDoble}</td>

                          <td><button type="button" className="btn btn-success">Sencilla</button> <button type="button" className="btn btn-success">Doble</button></td>
                        </tr>
                       </tbody>
                    </table>


                    <table className="table App-table-bordered">

                      <thead>
                        <tr>
                          <th scope="col">Ingrediente Extra</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{data.Comida.Extras[0].alimento}</th>
                          <td>${data.Comida.Extras[0].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Extras[1].alimento}</th>
                          <td>${data.Comida.Extras[1].precio}</td>

                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                      </tbody>
                    </table>


                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Complementos</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>

                          <th scope="row">{data.Comida.Complementos[0].alimento}</th>
                          <td>$ {data.Comida.Complementos[0].precio}</td>
                          <td><button type="button" className="btn btn-success">Sencilla</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Complementos[1].alimento}</th>
                          <td>$ {data.Comida.Complementos[1].precio}</td>

                          <td><button type="button" className="btn btn-success">Sencilla</button> </td>
                        </tr>
                      </tbody>
                    </table>


                    <table className="table App-table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Bebidas</th>

                          <th scope="col">Precio</th>
                          <th scope="col">Agregar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>

                          <th scope="row">{data.Comida.Bebidas[0].alimento}</th>
                          <td>$ {data.Comida.Bebidas[0].precio}</td>
                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                        <tr>
                          <th scope="row">{data.Comida.Bebidas[1].alimento}</th>
                          <td>$ {data.Comida.Bebidas[1].precio}</td>

                          <td><button type="button" className="btn btn-success">Agregar</button> </td>
                        </tr>
                      </tbody>
                    </table>

            </div>
             <div className="col-md-4 col-sm-4">
                <div className="App-background-titulo">
                  <h2 className="App-titulo">Pedido</h2>
                </div>
                  <div className="App-pedido">

                  <ul className="nav nav-pills">
                      <li className="nav-item">
                        <a className="nav-link active" href="">Cliente 1</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="">Cliente 2</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="">Cliente 3</a>
                      </li>
                    </ul>
                </div>

                <div className="App-total">

                  <h4>TOTAL: $</h4>
                </div>
                <div>
                <button type="button" className="btn btn-danger">Generar Ticket</button>
              </div>

            </div>
          </div>
        </div>
        </div>

      </section>
   );
  }
}

export default App;
