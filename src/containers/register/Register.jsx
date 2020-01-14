import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import { registerUser } from "../../services/userService"
import "./Register.scss";

class Register extends Form {
    state = {
        fields: { 
            firstName: "", 
            lastName: "", 
            email: "",
            password: "",
            gender: "",
            jobRole: "",
            department: "",
            address: "",
            isAdmin: "",
        },
        genders: [
            {id: 'male', name: 'male'},
            {id: 'female', name: 'female'},
        ],
        admin: [
            {id:true, name: 'true'},
            {id:false, name: 'false'},
        ],
        errors: {}
    };

    schema = {
        firstName: Joi.string()
            .required()
            .label("FirstName"),
        lastName: Joi.string()
            .required()
            .label("LastName"),
        email: Joi.string()
            .required()
            .label("Email"),
        password: Joi.string()
            .required()
            .label("Password"),
        gender: Joi.string()
            .required()
            .label("Gender"),
        jobRole: Joi.string()
            .required()
            .label("JobRole"),
        department: Joi.string()
            .required()
            .label("Department"),
        address: Joi.string()
            .required()
            .label("Address"),
        isAdmin: Joi.boolean()
            .required()
            .label("IsAdmin"),
    };

    doSubmit =  async () => {
        await registerUser(this.state.fields);  
    };

    render() {
        return (
            <section className="form-wrapper">
                <h2 className="form__title">Register Employee</h2>
                <form onSubmit={this.handleSubmit} className="form">
                    {this.renderInput("firstName", "FirstName")}
                    {this.renderInput("lastName", "LastName")}
                    {this.renderInput("email", "Email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderSelect('gender', 'Gender', this.state.genders)}
                    {this.renderInput("jobRole", "JobRole")}
                    {this.renderInput("department", "Department")}
                    {this.renderInput("address", "Address")}
                    {this.renderSelect('isAdmin', 'IsAdmin', this.state.admin)}
                    {this.renderButton("Register")}
                </form>
            </section>
        );
    }
}

export default Register;
