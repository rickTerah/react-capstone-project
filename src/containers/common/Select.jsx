import React from 'react';
import '../register/Register.scss';

const select = ({
  name, label, error, options, ...rest
}) => (
  <div className="form__group">
    <label htmlFor={name} className="form__label">{label}</label>
    <select {...rest} name={name} id={name} className="form__input">
      <option value="" />
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
    {error && <div className="alert alert-danger">{error}</div>}
  </div>
);

export default select;
