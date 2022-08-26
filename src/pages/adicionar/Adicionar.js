import { gql, useQuery } from '@apollo/client';
import { useState } from "react";

import styles from './Adicionar.module.css';
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

function Adicionar() {

    const outDisplay = {
        display: "flex",
        justifyContent: "flex-end",
        gap: "0 25px"
      };

      const {data} = useQuery(GET_LESSONS_QUERY);

      const [checked, setChecked] = useState([]);

      function removeItem(e) {
        const newItems = checked.filter((item) => item.name !== e);
        setChecked(newItems)
      }

      // Add/Remove checked item from list
        const handleCheck = (event) => {
            const image = event.currentTarget.getAttribute('data-image');
            const name = event.currentTarget.getAttribute('data-name');
            const price = event.currentTarget.getAttribute('data-price');

            let itemCheck = {
                image: image,
                name: name,
                price: price,
            }

            if (event.target.checked) {
                setChecked(prev => [...prev, itemCheck]);
            } else {
                removeItem(itemCheck.name)
            }
        };

        console.log(checked)

    return (
        <>

            <Title title="Adicionar Pedido" />

            <form className={styles.formAdd}>
                <label htmlFor="nome">Nome do cliente</label>
                <input type="text" name="nome" />

                <div className="checkbox">
                    {data?.products.map((item, index) => {
                    return (

                        <label className="item" key={index} data-image={item.image.url} data-name={item.name} data-price={item.price} onChange={handleCheck}>
                            <input type="checkbox" />

                            <img src={item.image.url} alt={item.name}/>
                            
                            <span className="checkmark"></span>
                        </label>
                        
                        )
                    })}
                </div>

                <div style={outDisplay}>
                    <Button type="cancel" text="Cancelar"/>
                    <Button text="Cadastrar"/>
                </div>
            </form>

            {checked?.map((item, index) => {
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

        </>
    )
}

export default Adicionar
