import styles from './Block.module.css';

const Block = () => {
    return(
        <div className={`display-flex container ${styles.block}`}>
            <img src="" alt="" className={styles.image}/>
            <div className={styles.text_side}>
                <h2 className={styles.h2}>Новый Audi RS 6</h2>
                <h2 className={styles.h2}>Sportback</h2>
                <button className={styles.button}>Узнать больше</button>
            </div>
        </div>
    );
}

export default Block;