import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Please review your entries.</h5>
      <div className='survey-form-review__container'>

      </div>
      <button
        className='survey-form-review__button'
        onClick={onCancel}
      >
        Back
      </button>
    </div>
  );
}

function mapStateToProps(state) {

  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);