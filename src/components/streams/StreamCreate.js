import React from "react";
import { connect } from "react-redux";

import { streamCreate } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.streamCreate(formValues);
    }

    render() {
        return (
            <StreamForm onSubmit={this.onSubmit} />
        );
    }


}

export default connect(null, { streamCreate })(StreamCreate)