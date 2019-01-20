import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/project/projectActions';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    
    handleSubmitEvent = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state);
    }

    handleChangeEvent = (e) => {
        this.setState( {
            [e.target.id]: e.target.value
        } )
    }

    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={ this.handleSubmitEvent }>
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
      
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' onChange={ this.handleChangeEvent }/>
                    </div>
      
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={ this.handleChangeEvent }></textarea>
                    </div>
      
                    <div className="input-field">
                        <button className="btn purple lighten-1 z-depth-0">Create</button>       
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);
