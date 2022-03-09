import React from 'react';
import logo from  '../assets/images/logo.png'
class Login extends React.Component{
    state = {
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {

    }
    render(){
        return(
            <div>
                <img src={logo} alt=''></img>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="email" name="email" placeholder='email...' required onChange={this.handleChange}/>
                        <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Log In</button>

                        
                    </form>
                </div>

            </div>

        )
    }
}

export default Login;