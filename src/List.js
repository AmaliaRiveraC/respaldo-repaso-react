import React from 'react';

class List extends React.Component{
     render() {
         return(

        <tr>
          <th scope="row" >{this.props.alimento}</th>
          <td data-name={this.props.precio}>{this.props.precio}</td>
          <td><button type="button" data-name={this.props.alimento} data-precio={this.props.precio} onClick={this.handleClick} className="btn btn-success">Agregar</button></td>
        </tr>
    
);
     }

}
export default List;