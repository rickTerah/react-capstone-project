import React from 'react';
import Joi from "joi-browser";
import Form from '../common/Form';
import { postNewGif } from '../../services/gifService';
import '../register/Register.scss';
class NewGif extends Form {
    state = {
        fields: { 
            title: "",
            image: "",
        },
        errors: {}
    };

    schema = {
        title: Joi.string()
            .required()
            .label("Title"),
        image: Joi.binary()
            .required()
            .label("Image"),
    };

    doSubmit = async () => {
        await postNewGif(this.state.fields);
    };
    render() { 
        return ( 
            <section className="form-wrapper form__login">
                <h2 className="form__title">Post New GIF</h2>
                <form onSubmit={this.handleSubmit} className="form">
                    {this.renderInput("title", "Title")}
                    {this.renderInput("image", "Image", "file")}
                    {this.renderButton("Submit")}
                </form>
            </section>
         );
    }
}
 
export default NewGif;