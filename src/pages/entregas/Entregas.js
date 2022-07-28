import { gql, useQuery } from '@apollo/client';

import Title from '../../components/title/Title';
import ItemEntrega from '../../components/itemEntrega/ItemEntrega';

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

function Entregas() {

    const {data} = useQuery(GET_LESSONS_QUERY);

    console.log(data?.products)

    return (
        <>

            <Title title="Entregas" />
            
            {data?.products.map((item, index) => {
              return (
                  <ItemEntrega key={index}
                      img={item.image.url}
                      name={item.name}
                      item={item.nome_cliente}
                      quant="2"
                      total={item.price}
                      btnEntregar="true"
                  />
                  )
            })}


        </>
    )
}

export default Entregas
