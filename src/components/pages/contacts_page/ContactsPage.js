import React, {createRef} from "react";
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
    let nameRef = createRef();
    let phoneRef = createRef();
    let commRef = createRef();

    let handleClick = () => {
        return console.log(nameRef.current.value, phoneRef.current.value, commRef.current.value);
    }

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
                <form>
                    <div className="display-flex"><span>Ваше имя<span className={styles.star}>*</span></span><input ref={nameRef} type="text"/></div>
                    <div className="display-flex"><span>Номер телефона<span className={styles.star}>*</span></span><input ref={phoneRef} type="tel"/></div>
                    <div className="display-flex"><span>Комментарий</span><input ref={commRef} type="text"/></div>
                    <button type={'submit'} onClick={() => {handleClick(); return false}}>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default ContactsPage;