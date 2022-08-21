import styles from './Header.module.css';

const Header = () => {
    return(
        <div className={styles.header}>
            <div className={'container display-flex'}>
                <h1 className={styles.logo}>ByCar.com</h1>
                <div className={'display-flex ' + styles.search_lang_buttons}>
                    <div className={styles.search}>
                        <form className={styles.search_form}>
                            <input type="text" className={styles.search_input} placeholder="Поиск по объявлениям"/>
                        </form>
                    </div>
                    <div>
                        <button className={styles.lang_butt + ' ' + styles.lang_butt_ru + ' ' + styles.active}>
                            ru
                        </button>
                        <button className={styles.lang_butt + ' ' + styles.lang_butt_eng}>
                            eng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;