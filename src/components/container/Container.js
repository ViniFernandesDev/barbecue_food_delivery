import styles from './Container.module.css';

// <div>{props.children}</div> -> elementos filhos que estão dentro do componente CONTAINER (routes em app.js), eles vão ser encaixados dentro dessa div
function Container(props) {
    return <div className={styles.container}>{props.children}</div>
}

export default Container