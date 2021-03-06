import React from "react";

import { Router, Route } from "react-router-dom";

import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";

import Header from "./Header";
import history from "../history";



const App = () => {

    return (

        <div className="ui container">

            <Router history={history} >
                <div>
                    <Header></Header>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/show/:id" exact component={StreamShow} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />

                </div>

            </Router>

        </div>

    )


}


export default App;