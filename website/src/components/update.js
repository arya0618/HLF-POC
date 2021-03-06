import React, { Component } from 'react';
import * as action from "../actions/api";
//import Modal from 'react-modal';

class Update extends Component {
  constructor(props){ 
    super(props) 
    this.state = { modalOpened: false} 
    this.handleChange = this.handleChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this) 
    
  } 
  handleChange(event){ 
    this.setState({ 
      // Computed property names 
      // keys of the objects are computed dynamically 
      [event.target.name] : event.target.value 
    }) 
  } 
 
    handleSubmit(event){ 
      const {  name, colour, size,appraisedValue ,assetId } = this.state 
      event.preventDefault() 
      console.log("-->>",name,colour,size,appraisedValue,assetId)
      let obj ={
        appraisedValue,
        name,
        colour,
        size,
        assetId
      }
      // alert(` 
      //   ____Your Details____\n 
      //   Email : ${name} 
      //   Name : ${color} 
      //   size : ${size} 
      //   Address : ${appraisedValue} 
      // `) 
      action.UpdateAPI(obj) 
      .then((res)=>{
         // console.log('res----->>>>',res.data.status);
          if(res.data.status === 200){
            alert(` Data updated Successfully !! 
            Go go ViewList page `) 
          }
          
      })
      .catch((err)=>{
          console.log(err)
      })
    }
  
    render = () => {
      return (
        <div>
           
          <div className="row mx-0">
            <div className="col-12 px-0">
            <div className="form-style-5" >
            <form onSubmit={this.handleSubmit}> 
            <fieldset>
            <label htmlFor='assetId'>Asset Id</label> 
          <input  
            name='assetId'
            placeholder='assetId' 
            value = {this.state.assetId} 
            onChange={this.handleChange} 
          /> 
       
          <label htmlFor='size'>Owner name</label> 
          <input  
            name='name'
            placeholder='name' 
            value = {this.state.name} 
            onChange={this.handleChange} 
          /> 
       
          <label htmlFor='size'>size</label> 
          <input 
            name='size' 
            placeholder='size'
            value={this.state.size} 
            onChange={this.handleChange} 
          /> 
        
       
          <label htmlFor='colour'>Color</label> 
          <input 
            name='colour' 
            placeholder='colour'
            value={this.state.colour} 
            onChange={this.handleChange} 
          /> 
       
          <label htmlFor='appraisedValue'>Appraised</label> 
          <input 
            name='appraisedValue' 
            placeholder='appraisedValue'
            value={this.state.appraisedValue} 
            onChange={this.handleChange} 
          /> 


        <br></br>
      
        <div> 
          <button class="add-btn">Update</button> 
        </div> 
        </fieldset>
      </form>
      </div>
            
            
            </div>
          </div>
          {/* <div>
          <Modal
         
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image"
        ></Modal>
          </div> */}
        </div>
      );
    }
  }
  
  export default Update;
  