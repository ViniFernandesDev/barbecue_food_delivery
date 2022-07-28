import { gql, useQuery } from '@apollo/client';

import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import Item from '../../components/itemPedido/Item';

const GET_LESSONS_QUERY = gql`
  query {
    products {
      name
      price
      image {
        id
        url
      }
    }
  }
`

function Home() {

    const {data} = useQuery(GET_LESSONS_QUERY);

    console.log(data?.products)

    return (
        <>

            <Title title="Pedidos" />

            {data?.products.map((item, index) => {
              return (
                  <Item key={index}
                      img={item.image.url}
                      name={item.name}
                      item={item.nome_cliente}
                      quant="2"
                      total={item.price}
                  />
                  )
            })}

            <Button link="/adicionar" text="Novo pedido" />
        </>
    )
}

export default Home
