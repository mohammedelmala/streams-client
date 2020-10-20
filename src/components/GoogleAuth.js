import React from "react";


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

    }

    render() {
        return (
            <div>GoogleAuth</div>
        )
    }
}


export default GoogleAuth;