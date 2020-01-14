import React from 'react';
import Joi from "joi-browser";
import Form from '../common/Form';
import { createNewArticle } from '../../services/articleService';
import '../register/Register.scss';
class NewArticle extends Form {
    state = {
        fields: { 
            title: "",
            article: "",
            categoryId: ""
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
        categoryId: Joi.number()
            .required()
            .label("Category"),
    };

    doSubmit = async () => {
        await createNewArticle(this.state.fields);
    };
    render() { 
        return ( 
            <section className="form-wrapper form__login">
                <h2 className="form__title form__article">New Article</h2>
                <form onSubmit={this.handleSubmit} className="form">
                    {this.renderInput("title", "Title")}
                    {this.renderTextarea("article", "Article")}
                    {this.renderInput("categoryId", "Category")}
                    {this.renderButton("Submit")}
                </form>
            </section>
         );
    }
}
 
export default NewArticle;