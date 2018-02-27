import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className='survey-field'>
      <label className='survey-field__label'>{label}</label>
      <input className='survey-field__input' {...input} />
      <h3 className='survey-field__error'>
        {touched && error ? error : ''}
      </h3>
    </div>
  );
}