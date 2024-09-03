import React from "react";
import '../css/PageNotFound.css';
import notFound from '../images/404.png';

function PageNotFound(){

    return (
        <div id="notFound">
            <img className="notFound" alt="Page Not Found" src={notFound} title="Page Not Found"></img>
            <h1>Ooops, something went wrong!</h1>
        </div>
    );
}

export default PageNotFound;