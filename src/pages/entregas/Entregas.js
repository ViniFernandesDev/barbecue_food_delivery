import Title from '../../components/title/Title';
import ItemEntrega from '../../components/itemEntrega/ItemEntrega';

function Home() {

    return (
        <>

            <Title title="Entregas" />

            <ItemEntrega
                img="ttt"
                name="Vinicius Fernandes"
                item="Burguer"
                quant="2"
                total="32,00"
                btnEntregar="sim"
            />

            <ItemEntrega
                img="ttt"
                name="Vinicius Fernandes"
                item="Burguer"
                quant="2"
                total="32,00"
            />


        </>
    )
}

export default Home
