import React from 'react';
import './App.css';
import Form from './Components/Form' ;
import Courses from './Components/Courses' ;


class App extends React.Component {

  state = {
    courses: [],
    id: 0
  }


  handleSumbit = (e) => {

    e.preventDefault() ;

    let input = document.getElementById('course-input') ;
    let id = this.state.id+1 ;

    let courses = this.state.courses ;
    courses.push({id:id , name: input.value});

    // remove the value from input failed
    input.value = '';

    this.setState({
      courses ,
      id
    });
  }

  handleDelete = (e) => {


    // deleteid is the index that we should romve it form the courses list from the state
    const deleteid = e.target.parentElement.id ;

    // storing values of state to edit them then update the state
    let courses = this.state.courses ;
    let id = this.state.id -1 ;

    // remove Course by splice method 
    courses.splice( deleteid , 1 ) ;

    // Update state
    this.setState({
      courses,
      id
    });

  }

  handleEdit = (e) => {

   let value ;
   let index = e.target.parentElement.id ;
   let courses = this.state.courses ;
   

     
    if(e.target.textContent == 'Edit'){

      // changing the content of button 
      e.target.textContent = 'Update';

      // catch span elment to romove it and get its value
      let span = e.target.parentElement.firstElementChild ;
       value = span.textContent ;
      
       // creating input faild
      let input = document.createElement('input') ;
      input.setAttribute('type','text') ;
      input.setAttribute('id' , 'edit_input') ;
      input.value = value ;
      
      // removing span element
       e.target.parentElement.removeChild(span) ;

       // add input faild
       e.target.parentElement.prepend(input) ;

       let edit_input = document.getElementById('edit_input') ;

        edit_input.focus() ;


    }else{

      // change the content of button
      e.target.textContent = 'Edit';

      // catch input faild and its value 
      let input = e.target.parentElement.firstElementChild ;
       value = input.value ;
      
       // creating span element
      let span = document.createElement('span') ;
      span.textContent = value ;

      // removing input faild 
      e.target.parentElement.removeChild(input) ;

      // add span element with new value
      e.target.parentElement.prepend(span) ;

      // edite the value
      courses[index].name = value ;

      // Update the state with new changes
      this.setState({
        courses
      });

    }
    
  } 

  render(){

    return (
      <div className="App">

        <div className="container">
        <h1>Courses</h1>

          <Form handleSubmit={this.handleSumbit}/>

          <Courses 
          courses={this.state.courses} 
          handleDelete={this.handleDelete} 
          handleEdit={this.handleEdit}
          />

        </div>
        
      </div>
    );

  }

}

export default App;
