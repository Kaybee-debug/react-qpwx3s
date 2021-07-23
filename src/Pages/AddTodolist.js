import React from "react";
import "./style.css";
import React,{Component} from 'react';
import Button from '@material-ui/core/Button';

export default class AddTodolist extends Component {
 constructor(props){
  super (props);
  this.state={
    userInput:'',
    List:[]
  }
  }
  changeUserinput(input){
this.setState({
  userInput:input
});
  }
  addToList(input){
    let listArray = this.state.List;

    listArray.push(input);

    this.setState({
      List: listArray,
      userInput:''
    })
  }
  
  render(){
  return (
    <div>
      <input 
      onChange={(e )=> this.changeUserinput(e.target.value)}
      value={this.state.userInput} 
      type="text"
      />
      <Button onClick={() => this.addToList(this.state.userInput)}style={{color:"white"}}>Add</Button>
   <ul> {this.state.List.map((val)=><li style={{color:"white"}}>{val}</li>)}</ul>
    </div>
  );
  }
}
