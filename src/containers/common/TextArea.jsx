import React from 'react';
import '../register/Register.scss';

const textarea = ({
  name, label, error, ...rest
}) => (
  <div className="form__group">
    <label htmlFor={name} className="form__label">{label}</label>
    <textarea {...rest} name={name} id={name} className="form__input" rows = "15">
      
    </textarea>
    {error && <div className="alert alert-danger">{error}</div>}
  </div>
);

export default textarea;
