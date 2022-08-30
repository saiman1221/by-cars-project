import React from "react";
import {NavLink} from 'react-router-dom';
import brandCatalog from "./brandCatalog.json";
import styles from './Brands.module.css';

const Brands = () => {
    return(
        <div className={'container'}>
            <div className={styles.catalog}>
                {brandCatalog.map(el => <div className={styles.brands}><NavLink to={el.link} >{el.name}</NavLink></div>)}
            </div>
        </div>
    );
}

export default Brands;