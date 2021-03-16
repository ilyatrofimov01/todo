import React, {Component} from 'react'
import './item-add-form.css';

export default class ItemAddForm extends Component {

    render(){

    return(
        <div className ="d-flex item-add-form ">
            <input className ="form-control" placeholder ="Type Here to add"/>
            <button type="button" className='btn btn-outline-secondary'> Add </button>
        </div>
    )};
}