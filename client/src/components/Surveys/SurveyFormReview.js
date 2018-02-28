import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  })
  return (
    <div>
      <h5>Please review your entries.</h5>
      <div className='survey-form-review__container'>
        {reviewFields}
      </div>
      <button
        className='survey-form-review__button'
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues)}
      >
        Send Survey
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);