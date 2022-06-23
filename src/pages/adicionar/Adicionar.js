import styles from './Adicionar.module.css';
import Title from '../../components/title/Title';
import ItemAddPedido from '../../components/itemAddPedido/ItemAddPedido';
import Button from '../../components/button/Button';

function Adicionar() {

    return (
        <>

            <Title title="Adicionar Pedido" />

            <form className={styles.formAdd}>
                <label for="">Nome do cliente</label>
                <input type="text" name="nome" />

                <div className='checkbox'>
                    <div>
                        <label>sda</label>
                        <input type="checkbox" name="nome" />
                    </div>

                    <div>
                        <label></label>
                        <input type="checkbox" name="nome" />
                    </div>

                    <div>
                        <label></label>
                        <input type="checkbox" name="nome" />
                    </div>

                    <div>
                        <label></label>
                        <input type="checkbox" name="nome" />
                    </div>
                </div>

                <ItemAddPedido
                    img="ttt"
                    item="Burguer"
                    quant="2"
                    total="32,00"
                />

                <Button text="Cadastrar"/>
                <Button type="cancel" text="Cancelar"/>
            </form>

        </>
    )
}

export default Adicionar
