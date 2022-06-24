import styles from './Adicionar.module.css';
import Title from '../../components/title/Title';
import ItemAddPedido from '../../components/itemAddPedido/ItemAddPedido';
import Button from '../../components/button/Button';

function Adicionar() {

    const outDisplay = {
        display: "flex",
        justifyContent: "flex-end",
        gap: "0 25px"
      };

    return (
        <>

            <Title title="Adicionar Pedido" />

            <form className={styles.formAdd}>
                <label for="">Nome do cliente</label>
                <input type="text" name="nome" />

                <div className="checkbox">
                    <label className="item">
                        <img src="asd" alt="item"/>
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="item">
                        <img src="asd" alt="item"/>
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="item">
                        <img src="asd" alt="item"/>
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="item">
                        <img src="asd" alt="item"/>
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>

                <ItemAddPedido
                    img="ttt"
                    item="Burguer"
                    quant="1"
                    total="32,00"
                />
                
                <div style={outDisplay}>
                    <Button type="cancel" text="Cancelar"/>
                    <Button text="Cadastrar"/>
                </div>
            </form>

        </>
    )
}

export default Adicionar
