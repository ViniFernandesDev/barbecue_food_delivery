import { gql, useQuery } from '@apollo/client';

import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import Item from '../../components/itemPedido/Item';

const GET_LESSONS_QUERY = gql`
  query {
    products {
      id
      name
      price
      image {
        url
        thumbnail:url
      } 
    }
  }
`

function Home() {

    const {data} = useQuery(GET_LESSONS_QUERY);

    console.log(data)

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
