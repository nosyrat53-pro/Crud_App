import React from 'react' ;
import './Courses.css' ;

class Courses extends React.Component {

    render(){

        let courses = this.props.courses ;
        
         let items = courses.length == 0 ?  <h1>No Courses Sofar</h1> : 

         courses.map((course,index) => {

            return(

               <li key={index} id={index} >
                    <span>{course.name}</span>
                    <button role="button" toggle="true" onClick={this.props.handleEdit}>Edit</button>
                    <button role="button" onClick={this.props.handleDelete}>Delete</button>
               </li>

            );
            
        });

        return(
            <ul id="items">
                {items}                
            </ul>
        )
    }


}




export default Courses;