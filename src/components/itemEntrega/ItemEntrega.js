import styles from './itemEntrega.module.css';

function ItemEntrega({img, name, quant, item, total, btnEntregar}) {

    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <img src={img} alt="item" />
            </div>
            
            <div className={styles.txt}>
                <div>
                    <h2>{name}</h2>
                    <h3><span>{quant}</span> {item}</h3>
                    <h4>Total: R${total}</h4>
                </div>
                
                <div className={btnEntregar === 'sim' ? "btnBlock" : "btnNone"}>
                    <button>Entregar</button>
                </div>
            </div>
        </div>
        
    )
}

export default ItemEntrega