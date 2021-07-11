import React, {Fragment, useState} from "react";
import {Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {login} from '../../actions/auth';

const Landing=({login,isAuthenticated})=>{
    const [formData, setFormData]=useState({
        email:'',
        password:'',
    });

    const {email,password}= formData;
    const onChange = e => setFormData({
        ...formData,[e.target.name]:e.target.value
    });
    const onSubmit = async e => {
        e.preventDefault();
        login(email,password);
            
    };

    //Redirect if logged in
    if(isAuthenticated){
        return <Redirect to="/menus" />;
    }

    return <Fragment>
                    <div>
                    <h1 className="x-large text-primary">Archipelago's</h1>
                    <p className="lead">
                        We are handling the best of Indonesian Cuisine
                    </p>
                    {/* <div className="buttons">
                        <Link to="/register" className="btn btn-primary">Sign Up</Link>
                        <Link to="/login" className="btn btn-light">Login</Link>
                    </div> */}

                    {/* <h1 className="large text-primary">Sign In</h1>
                    <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p> */}
                    <form 
                    className="form" 
                    action="create-profile.html"
                    onSubmit={e=>onSubmit(e)}>
                        <div className="form-group flex-login">
                        <i className="fas fa-user icon-login"></i>&nbsp;&nbsp;&nbsp;
                        <input 
                        value={email} 
                        onChange={e => onChange(e)}
                        required 
                        type="email" 
                        placeholder="Email Address" 
                        name="email" />
                        </div>
                        <div className="form-group flex-login">
                        <i className="fas fa-lock icon-login"></i>&nbsp;&nbsp;&nbsp;
                        <input
                            value={password}
                            onChange={e => onChange(e)}
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                        </div>
                        <div className="right">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    </div>
    </Fragment>
}

Landing.propTypes={
    login:propTypes.func.isRequired,
    isAuthenticated:propTypes.bool
};

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(
    mapStateToProps, 
    {login})
    (Landing);