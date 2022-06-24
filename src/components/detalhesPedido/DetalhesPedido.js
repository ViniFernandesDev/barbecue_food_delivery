import styles from './detalhesPedido.module.css';

function DetalhesPedido({img, name, quant, item, total}) {
    return (
        <div className={styles.detalhes}>
            
            <div className={styles.cancel}>
            <a href="">
                <span>Cancelar Pedido</span>
                <q>x</q>
            </a>
            </div>

            <div className={styles.pago}>
            <a href="">
                <span>Pago</span>
                <q>✓</q>
            </a>
            </div>

        </div>
        
    )
}

export default DetalhesPedido