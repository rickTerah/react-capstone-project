import React, { Component } from 'react';
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from '../common/Form';
import '../register/Register.scss';
class NewArticle extends Form {
    state = {
        fields: { 
            title: "",
            article: "",
            category: ""
        },
        errors: {}
    };

    schema = {
        title: Joi.string()
            .required()
            .label("Title"),
        article: Joi.string()
            .required()
            .label("Article"),
        category: Joi.number()
            .required()
            .label("Category"),
    };

    doSubmit = async () => {
        console.log("submitted");
        return toast.success("Your message has been received.");
    };
    render() { 
        return ( 
            <section className="form-wrapper form__login">
                <h2 className="form__title form__article">New Article</h2>
                <form onSubmit={this.handleSubmit} className="form">
                    {this.renderInput("title", "Title")}
                    {this.renderTextarea("article", "Article")}
                    {this.renderInput("category", "Category")}
                    {this.renderButton("Submit")}
                </form>
            </section>
         );
    }
}
 
export default NewArticle;