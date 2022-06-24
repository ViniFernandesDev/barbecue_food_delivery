import styles from './itemAddPedido.module.css';

function ItemAddPedido({img, name, quant, item, total}) {
    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <img src={img} alt="item" />
            </div>
            
            <div className={styles.txt}>
                <div>
                    <h2>{item}</h2>
                    <div className={styles.quantidade}>
                        <span>-</span>
                        <input type="number" min={quant} name="quant"/>
                        <span>+</span>
                    </div>
                    <h4>Total: R${total}</h4>
                </div>

                <div>
                    <span>Remover</span>
                </div>
            </div>
        </div>
        
    )
}

export default ItemAddPedido