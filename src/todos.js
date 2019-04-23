import React, { Component } from 'react';
import Todo from './todo';


class Todos extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [],
      todo: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    console.log(e.key === "Enter")
    if (e.key === "Enter") {
      // let newTodo = <Todo item={this.state.todo} />;
      this.setState({
        // list: [...this.state.list, newTodo]
        list: [...this.state.list, this.state.todo],
        todo:''
      });

    }
  }


  render(){
    // var renderList = this.state.list.map((item, index) => {
    //   item.key = index;
    //   return <li key={index}>item</li>
    // })
    const renderList = this.state.list.map((item, i) =>  {
      return <li><Todo item={item} key={i}/></li>;
    });

    return(
      <div className="todo-list-box">
        <div>MY TODO LIST</div>
        <ul>{ renderList }</ul>
        <input type="text" value={this.state.todo} onChange = {data => {this.setState({todo: data.target.value})}} onKeyPress={ this.onSubmit }/>
      </div>
    )
  }
}

// ReactDOM.render(<ul>{renderList}</ul>, document.getElementById('root'));



export default Todos;


//onsubmit method: push to array
//create input form
// create button that on click handle onsubmit event
// 1. create todo instance and push to state.LIST
// 2. create
