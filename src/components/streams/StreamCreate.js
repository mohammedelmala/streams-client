import React from "react";

import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {

    renderInput = ({ input, label }) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input} className="field" />
            </div>
        );
    }

    onSubmit() {
        console.log("form submit");
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Title" />
                <Field name="description" component={this.renderInput} label="Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }



}


export default reduxForm({
    form: "createForm"
})(StreamCreate);