import React, {Fragment, useState} from "react";
import {connect} from 'react-redux';
//import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import propTypes from 'prop-types';
import {login} from '../../actions/auth';
//import { ReactReduxContext } from "react-redux";

const Register=({setAlert,register,isAuthenticated})=>{
    const [formData, setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name,email,password,password2}= formData;
    const onChange = e => setFormData({
        ...formData,[e.target.name]:e.target.value
    });
    const onSubmit = async e => {
        e.preventDefault();
        if(password!==password2){
            setAlert('Passwords do not match','danger');
        }else{
            register({name,email,password});

            // const newUser={
            //     name,
            //     email,
            //     password
            // }

            // try {
            //     const config={
            //         headers:{
            //             'Content-Type': 'application/json'
            //         }
            //     }

            //     const body=JSON.stringify(newUser);
            //     const res=await axios.post('/api/users',body,config);
            //     console.log(res.data);
            // } catch (err) {
            //     console.error(err.response.data);
            // }

            // console.log(formData);
        }
    };

    //Redirect if logged in
    if(isAuthenticated){
        return <Redirect to="/dashboard" />;
    }

    return (<Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form 
            className="form" 
            action="create-profile.html"
            onSubmit={e=>onSubmit(e)}>
                <div className="form-group">
                <input type="text" placeholder="Name" 
                name="name" 
                value={name}
                onChange={e => onChange(e)}
                 />
                </div>
                <div className="form-group">
                <input 
                value={email} 
                onChange={e => onChange(e)}
                type="email" 
                placeholder="Email Address" 
                name="email" />
                <small className="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small
                >
                </div>
                <div className="form-group">
                <input
                    value={password}
                    onChange={e => onChange(e)}
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    value={password2}
                    onChange={e => onChange(e)}
                    placeholder="Confirm Password"
                    name="password2"
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <Link to="login.html">Sign In</Link>
            </p>
        </Fragment>
    );
};

Register.propTypes={
    setAlert:propTypes.func.isRequired,
    register:propTypes.func.isRequired,
    isAuthenticated:propTypes.bool
};

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(
    mapStateToProps, 
    {login}
    )(Register);