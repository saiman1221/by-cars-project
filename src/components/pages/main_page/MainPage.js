import styles from './MainPage.module.css';

const Car = (props) => {
    return (
        <div className={'display-flex container ' + styles.block}>
            <div className={styles.img_wrapper}>
                <img src={props.img} alt={'Фото авто'} className={styles.image}/>
            </div>
            <div className={styles.text_side}>
                <h2 className={styles.h2}>{props.title}</h2>
                <h2 className={styles.h2}>2020</h2>
                <button className={styles.button}>Узнать больше</button>
            </div>
        </div>
    );
}

const MainPage = () => {
    let componentsData = [
        {title: "Новый Audi A5", img: "/images/main_page/pic_audi_a5.jpg"},
        {title: "Новый Audi A6", img: "/images/main_page/pic_audi_a6.jpg"},
        {title: "Новый Audi A7", img: "/images/main_page/pic_audi_a7.jpg"}
    ];

    return(
        <div className={styles.blocks}>
            {componentsData.map((el) => (<Car title={el.title} img={el.img}/>))}
        </div>
    );
}

export default MainPage;