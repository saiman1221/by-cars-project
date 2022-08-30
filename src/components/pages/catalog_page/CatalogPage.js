import React from "react";
import {Route, Routes} from 'react-router-dom';

import Brands from "./Brands/Brands";
import Models from "./Models/Models";
import Details from "./Details/Details";

const CatalogPage = () => {
    return(
        <div className={'container'}>
            <Routes>
                <Route path='/' element={<Brands />} />
                <Route path='/:brandName' element={<Models />} />
                <Route path='/:brandName/:modelName' element={<Details />} />
            </Routes>
        </div>
    );
}

export default CatalogPage;