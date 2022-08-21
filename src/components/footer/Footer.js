import styles from './Footer.module.css';

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className='container'>
                <div className={'display-flex ' + styles.top_part}>
                    <p className={styles.top_part__text}>Мы предлагаем большой выбор легковых автомобилей, грузового и коммерческого транспорта, мототехники, спецтехники и многих других видов транспортных средств.</p>
                    <div className={'display-flex ' + styles.top_part__contacts}>
                        <a href="#" className={styles.a}><img src="./images/youtube.png" alt="YouTube" className={styles.img}/></a>
                        <a href="#" className={styles.a}><img src="./images/instagram.png" alt="Instagram" className={styles.img}/></a>
                        <a href="#" className={styles.a}><img src="./images/facebook.png" alt="Facebook" className={styles.img}/></a>
                    </div>
                </div>
                <div className={styles.bottom_part}>
                    © 1996–2022 ООО «Яндекс.Вертикали»
                </div>
            </div>
        </div>
    );
}

export default Footer;