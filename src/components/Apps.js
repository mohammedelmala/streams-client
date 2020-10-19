import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

const pageOne = () => {
    return <div>Page One</div>
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={pageOne} />
            </BrowserRouter>
        </div>
    )
}


export default App;