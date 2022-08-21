import styles from './ContactsPage.module.css';

const ContactsPage = () => {
    return (
        <div className={'container ' + styles.contacts_page}>
            <div className={'display-flex ' + styles.info}>
                <h1>Минск</h1>
                <div className={styles.info_group}>
                    <div className={'display-flex ' + styles.info_group_text}>
                        <p>Минск, ул. Кутузова 15</p>
                        <p>+375296527110</p>
                    </div>
                    <div className={'display-flex ' + styles.info_group_text}>
                        <p>Дзержинского 57, офис 30-1, 6 этаж</p>
                        <p>+375296527168</p>
                    </div>
                </div>
            </div>
            <div className={styles.contacts}>
                <h2>Обратная связь</h2>
                <p>Оставьте свои данные и мы свяжемся с Вами в ближайшее время.</p>
                <form action="">
                    <div className="display-flex"><span>Ваше имя<span className={styles.star}>*</span></span><input type="text"/></div>
                    <div className="display-flex"><span>Номер телефона<span className={styles.star}>*фауа</span></span><input type="tel"/></div>
                    <div className="display-flex"><span>Комментарий</span><input type="text"/></div>
                </form>
            </div>
        </div>
    );
}

export default ContactsPage;