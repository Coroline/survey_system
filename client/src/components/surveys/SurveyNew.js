// SurveyNew shows SurveyForm and SurveyFormReview

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { new: true };
    // }


    // initialize and construct
    state = { showReview: false };

    renderContent() {
        if (this.state.showReview) {
            return <SurveyFormReview
                onCancel={() => this.setState({ showReview: false })}
            />;
        } else {
            return <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />;
        }
    }

    render() {
        return (
            <div>
               {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'SurveyForm'
})(SurveyNew);