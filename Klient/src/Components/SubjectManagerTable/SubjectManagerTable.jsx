import React ,{Component}from "react";
import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import { Table as BootstrapTable, Input } from "reactstrap";

export default class SubjectManagerTable extends Component{

  constructor(props){
    super();
    this.data=props.dat
    console.log(this.data);

  }

 render(){
        return (
             <ul>
           {this.data.map( item => (
             <li key={item.Id}> Name : {item.Name}</li>
           ))}
         </ul>
                 
              );
 }
}