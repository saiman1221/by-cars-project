import styles from './MainPage.module.css';

const MainPage = () => {
    return(
        <div className={styles.blocks}>
            <div className={'display-flex container ' + styles.block}>
                <img src="" alt="" className={styles.image}/>
                <div className={styles.text_side}>
                    <h2 className={styles.h2}>Новый Audi RS 6</h2>
                    <h2 className={styles.h2}>Sportback</h2>
                    <button className={styles.button}>Узнать больше</button>
                </div>
            </div>
            <div className={'display-flex container ' + styles.block}>
                <img src="" alt="" className={styles.image}/>
                <div className={styles.text_side}>
                    <h2 className={styles.h2}>Новый BMW M5</h2>
                    <h2 className={styles.h2}>MPower</h2>
                    <button className={styles.button}>Узнать больше</button>
                </div>
            </div>
            <div className={'display-flex container ' + styles.block}>
                <img src="" alt="" className={styles.image}/>
                <div className={styles.text_side}>
                    <h2 className={styles.h2}>Новый Mercedes E63</h2>
                    <h2 className={styles.h2}>2020 года</h2>
                    <button className={styles.button}>Узнать больше</button>
                </div>
            </div>
        </div>
    );
}

export default MainPage;