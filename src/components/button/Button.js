import styles from './Button.module.css';

function Button({text, link, type}) {
    return (
        <div className={type === 'cancel' ? styles.button2 : styles.button }>
            <a href={link}>{text}</a>
        </div>
    )
}

export default Button