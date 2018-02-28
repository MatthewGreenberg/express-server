import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends React.Component {
  renderFields() {
    return (
      <div>
      {
        _.map(formFields,  (field, key) => {
          return (
            <Field
              component={SurveyField}
              type='text'
              label={field.label}
              name={field.name}
              key={key}
            />
          );
        })
      }
      </div>
    );
  }

  render() {
    return (
      <div>
        Survey Form
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to='/surveys'>
            Cancel
          </Link>
          <button type='submit'>
            Next
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ( { name } ) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}`;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);