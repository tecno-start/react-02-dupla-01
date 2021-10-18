import React from 'react'
import { useHistory } from 'react-router-dom';
import Button from 'reactstrap/lib/Button';

function ButtonGoBack() {

    const history = useHistory()
    const voltar = () => history.goBack()


    return (
        <Button
            size="lg"
            className="bg-gradient-theme-left border-0"
            block
            onClick={voltar}>
            Voltar
        </Button>
    )

}

export default ButtonGoBack