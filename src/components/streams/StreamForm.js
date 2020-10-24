import React from "react";

import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {


    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }


    renderInput = ({ input, label, meta }) => {
        let style = "field";

        if (meta.touched && meta.error) {
            style += " error";
        }

        return (
            <div className={style}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }



    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Title" />
                <Field name="description" component={this.renderInput} label="Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }



}


const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "Please enter title.";
    }
    if (!formValues.description) {
        errors.description = "Please enter description.";
    }
    return errors;
}


export default reduxForm({
    form: "streamCreate",
    validate: validate
})(StreamForm);
