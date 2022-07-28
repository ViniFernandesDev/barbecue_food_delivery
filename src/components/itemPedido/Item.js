import {useState} from 'react'

import styles from './Item.module.css';
import Modal from '../../components/modal/Modal';
import DetalhesPedido from '../../components/detalhesPedido/DetalhesPedido';

function Item({img, name, quant, item, total}) {

    /* MODAL */
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>

            <div className={styles.item}>
            <a href="#" onClick={() => setIsModalVisible(true)}>
                <div className={styles.img}>
                    <img src={img} alt="item" />
                </div>
                
                <div className={styles.txt}>
                    <div>
                        <h2>{name}</h2>
                        <h3><span>{quant}</span> {item}</h3>
                        <h4>Total: R${total}</h4>
                    </div>

                    <div>
                        <span>Detalhes do pedido</span>
                    </div>
                </div>
            </a>
            </div>

            <div>
                {isModalVisible ? (

                    <Modal onClose={() => setIsModalVisible(false)}>
                        <DetalhesPedido/>
                    </Modal>

                ): null }
            </div>
        
        </>
    )
}

export default Item