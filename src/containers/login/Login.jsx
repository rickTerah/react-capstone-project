import React, { Component } from 'react';
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from '../common/Form';
import '../register/Register.scss';
class Login extends Form {
    state = {
        fields: { 
            email: "",
            password: "",
        },
        errors: {}
    };

    schema = {
        email: Joi.string()
            .required()
            .label("Email"),
        password: Joi.string()
            .required()
            .label("Password"),
    };

    doSubmit = async () => {
        console.log("submitted");
        return toast.success("Your message has been received.");
    };
    render() { 
        return ( 
            <section className="form-wrapper form__login">
                <h2 className="form__title">Sign In</h2>
                <form onSubmit={this.handleSubmit} className="form">
                    {this.renderInput("email", "Email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </section>
         );
    }
}
 
export default Login;