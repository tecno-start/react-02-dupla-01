import React from 'react'
import { useHistory } from 'react-router-dom';

function ButtonGoBack() {

    const history = useHistory()
    const voltar = () => history.goBack()


    return (
        <div>
            <button type='button' onClick={voltar} className="bg-gradient-theme-left border-0">Voltar</button>
        </div>
    )

}

export default ButtonGoBack