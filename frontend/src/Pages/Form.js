import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';



function Form()  {


    
    const [estados, setEstados] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products/code').then(response => {
            setEstados(response.data);
        })
    }, []);


    return (

        <div>
            <form>
                <fieldset>
                    <legend>
                        <h2>Produto</h2>
                    </legend>

                    <div>
                        <label>
                            <select name="cmbUF" id="cmbUF" >
                                <option value="0">Selecione uma opção</option>
                                {estados.map(estado =><option>{estado}</option>)}
                                {/* {<option value="1">{estados}</option>} */}
                            </select>
                        </label>
                    </div>
                    <Button type="flat">Pesquisar</Button>
                </fieldset>
            </form>
        </div>
    )
}

export default Form;