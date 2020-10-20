import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions"

class GoogleAuth extends React.Component {


    componentDidMount() {

        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "393067308955-3bkshjc7ebqapm9lr2dp5b9ggk3i9vgj.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChanged(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChanged);
            })
        }
        );
    }

    onAuthChanged = (isSignedIn) => {

        console.log("Auth Changed=>" + this.auth.currentUser.get().getId());
        //console.log(this.auth);
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.signOut();
        }

    }


    onSignIn = (event) => {
        this.auth.signIn();
    }

    onSignOut = (event) => {
        console.log("Sign Out");
        this.auth.signOut();

    }


    renderAuthButton = () => {

        console.log(this.auth);

        if (this.props.isUserSignedIn === null) {
            return null
        }

        else if (this.props.isUserSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOut}>
                    <i className="google icon" />
                        Sign Out
                </button>
            )
        }

        else {
            return (
                <button className="ui red google button" onClick={this.onSignIn}>
                    <i className="google icon" />
                    Sign In
                </button>
            )
        }


    }


    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }


}


const mapStateToProps = (state) => {
    return {
        isUserSignedIn: state.auth.isUserSignedIn
    }
}
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);