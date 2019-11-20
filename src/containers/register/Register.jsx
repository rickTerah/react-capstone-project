import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import "./Register.scss";
import { toast } from "react-toastify";

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
            {id:1, name: 'male'},
            {id:2, name: 'female'},
        ],
        admin: [
            {id:1, name: "true"},
            {id:2, name: "false"},
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

    doSubmit = async () => {
        console.log("submitted");
        return toast.success("Your message has been received.");
    };

    render() {
        return (
            <section className="form-wrapper">
                <h2 className="form__title">Register Employee</h2>
                <form onSubmit={this.handleSubmit} className="form">
                    {this.renderInput("firstName", "FirstName")}
                    {this.renderInput("lastName", "LastName")}
                    {this.renderInput("email", "Email")}
                    {this.renderInput("password", "Password")}
                    {this.renderSelect('gender', 'Gender', this.state.genders)}
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
