import React from "react";
import {NavLink, useParams} from 'react-router-dom';


const Models = () => {
    let {brandName} = useParams();

    return(
        <div className={'container'}>
            Brand: {brandName}
            <br/>
        </div>
    );
}

export default Models;