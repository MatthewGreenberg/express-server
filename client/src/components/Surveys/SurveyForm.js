import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
]

class SurveyForm extends React.Component {
  renderFields() {
    return (
      <div>
      {
        _.map(FIELDS,  (field, key) => {
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

  errors.emails = validateEmails(values.emails || '');

  _.forEach(FIELDS, ( { name } ) => {
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