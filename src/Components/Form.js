import React  , {Fragment}from 'react' ;
import './Form.css' ;

class Form extends React.Component {

    render(){

        return(

            <Fragment>
            <form onSubmit={this.props.handleSubmit}>

                <input id="course-input" type="text" required />

                <button role="button">Add Course</button>

            </form>
            
            </Fragment>
        );

    }

}

export default Form ;