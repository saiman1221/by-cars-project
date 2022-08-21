import styles from './CatalogPage.module.css';
import {NavLink} from 'react-router-dom';

const CatalogPage = () => {
    return(
        <div className={'container ' + styles.catalog_page}>
            <h1>Catalog</h1>
            <NavLink to='/catalog/audi'>Audi</NavLink>
            <br/>
            <NavLink to='/catalog/bmw'>BMW</NavLink>
            <br/>
            <NavLink to='/catalog/mercedes'>Mercedes</NavLink>
        </div>
    );
}

export default CatalogPage;