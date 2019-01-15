import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    }
    
    handleSubmitEvent = (e) => {
        e.preventDefault();
        console.log(this.state);
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
              <h5 className="grey-text text-darken-3">Sign Up</h5>

              <div className="input-field">
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" id='firstname' onChange={ this.handleChangeEvent }/>
              </div>

              <div className="input-field">
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" id='lastname' onChange={ this.handleChangeEvent }/>
              </div>

              <div className="input-field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id='email' onChange={ this.handleChangeEvent }/>
              </div>

              <div className="input-field">
                  <label htmlFor="password">Password</label>
                  <input type="password" id='password' onChange={ this.handleChangeEvent } />
              </div>

              <div className="input-field">
                  <button className="btn purple lighten-1 z-depth-0">SignUp</button>       
              </div>
          </form>
      </div>
    )
  }
}

export default SignUp;