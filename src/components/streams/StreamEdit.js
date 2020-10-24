import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";

import StreamForm from "./StreamForm";


class StreamEdit extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }


    render() {
        if (!this.props.stream) {
            return null;
        }
        return (
            <div>
                <StreamForm onSubmit={this.onSubmit} initialValues={{ title: this.props.stream.title, description: this.props.stream.description }} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);