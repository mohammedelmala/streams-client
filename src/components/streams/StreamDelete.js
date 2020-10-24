import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    onDismiss = () => {
        history.push("/");
    }

    actions() {
        const id = this.props.match.params.id;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui primary button ">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment >
        )
    };

    renderContent() {
        if (!this.props.stream) {
            return `Are you sure you want to delete this stream`
        }
        return `Are you sure you want to delete this stream ${this.props.stream.title}`
    }

    render() {
        return (
            <div>
                <Modal header="Delete Stream"
                    content={this.renderContent()}
                    actions={this.actions()}
                    onDismiss={this.onDismiss}
                />

            </div >

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);