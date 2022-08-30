import React from "react";
import styles from './HeaderNavigation.module.css';
import {Link} from 'react-router-dom';

const HeaderNavigation = () => {
    return(
        <div className={styles.nav_bar}>
            <div className={'display-flex container ' + styles.nav_bar__content}>
                <Link to='/main' className={styles.nav_bar__button}>Главная</Link>
                <Link to='/catalog' className={styles.nav_bar__button}>Каталог</Link>
                <Link to='/contacts' className={styles.nav_bar__button}>Контакты</Link>
            </div>
        </div>
    );
}

export default HeaderNavigation;