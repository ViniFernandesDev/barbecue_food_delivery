import { gql, useQuery } from '@apollo/client';
import { useState } from "react";

import styles from './Adicionar.module.css';
import Title from '../../components/title/Title';
//import ItemAddPedido from '../../components/itemAddPedido/ItemAddPedido';
import Button from '../../components/button/Button';

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

      console.log(data?.products);

      const [checked, setChecked] = useState([]);

      //console.log(checked);
    
      // Add/Remove checked item from list
        const handleCheck = (event) => {
            var updatedList = [...checked];

            const image = event.currentTarget.getAttribute('data-image');
            const name = event.currentTarget.getAttribute('data-name');
            const price = event.currentTarget.getAttribute('data-price');

            if (event.target.checked) {
            updatedList = [...checked, ];
            } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
            }
            setChecked(updatedList);
        };

        

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

        </>
    )
}

export default Adicionar
