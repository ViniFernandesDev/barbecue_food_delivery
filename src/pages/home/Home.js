import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import Item from '../../components/itemPedido/Item';

function Home() {

    return (
        <>

            <Title title="Pedidos" />

            <Item
                img="ttt"
                name="Vinicius Fernandes"
                item="Burguer"
                quant="2"
                total="32,00"
            />

            <Item
                img="ttt"
                name="Vinicius Fernandes"
                item="Burguer"
                quant="2"
                total="32,00"
            />

            <Button link="/adicionar" text="Novo pedido" />

        </>
    )
}

export default Home
