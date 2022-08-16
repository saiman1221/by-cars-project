import styles from './MainPage.module.css';
import Block from './block/Block';

const MainPage = () => {
    return(
        <div className={styles.main_page}>
            <Block />
            <Block />
            <Block />
        </div>
    );
}

export default MainPage;