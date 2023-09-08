import React from "react";
import Container from "react-bootstrap/esm/Container";

import Table from 'react-bootstrap/Table';


const ListTable =({data})=>{

  console.log(data);

  return(
    <div>
          <tbody>
            <tr>
              <td>{data.nombre}</td>
              <td>juan per</td>
            </tr>
            <tr>
              <td>{data.link}</td>
            </tr>
          </tbody>
        </div>

  )
}

export default ListTable;

