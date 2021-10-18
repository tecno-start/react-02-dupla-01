import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Row, Col, Card, Container, Alert } from 'reactstrap';
import ButtonGoBack from '../components/ButtonGoBack';
import Questions from '../components/Questions';
import Room from '../components/Room';
import Lobby from '../components/Lobby';
import useForm from '../services/useForm';
import getAxios from '../services/axiosConfig';
import validateRoom from '../services/validateRoom';




function CreateRoom() {
    // states
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [messageAlert, setMessageAlert] = useState('');
    const [linkSala, setLinkSala] = useState('')

    // axios
    const axiosConfig = getAxios(true)

    const fields = {
        perguntas: [],
        nomeSala: '',
        maximoParticipantes: '',
        minimoParticipantes: '',
        comSenha: '',
        senha: ''
    }

    function apiErrorHandle(reason) {
        setMessageAlert('Erro na API')
    }

    function submitForm(values) {
        setLoading(true)
        const to_post = {
            name: values.nomeSala,
            questions: values.perguntas,
            size: values.minimoParticipantes,
        }
        if (values.comSenha) {
            to_post["password"] = values.senha
        }

        axiosConfig.post('/room', to_post).then(
            response => { setLoading(false); fecthLinkQuestion(response) }
        ).catch((reason) => apiErrorHandle(reason))
    }

    function fecthLinkQuestion(response) {
        const linkSala = encodeURI('https://localhost:3000/' + response.data.id + '/' + values.nomeSala)
        setLinkSala(linkSala)
    }


    const { handleChange, handleSubmit, values } = useForm(
        submitForm,
        validateRoom,
        setErrors,
        fields,
        errors
    );


    return (
        <div>
            <Sidebar />
            <Container style={{
                width: '80%',
                display: 'flex 1',
                alignItems: 'center',
                justifyContent: 'center',
            }} className="pt-4 pb-4">
                <Row>
                    {messageAlert &&
                        <Alert color="danger">
                            {messageAlert}
                        </Alert>}
                </Row>
                <Row className="pb-3">
                    <Col xs="6" sm="4">

                        <Card body style={{
                            borderRadius: '10px'
                        }}>
                            <Questions handleChange={handleChange} values={values} />
                        </Card>

                    </Col>

                    <Col xs="6" sm="4">

                        <Card body style={{
                            borderRadius: '10px'
                        }}>
                            <Room errors={errors} values={values} handleChange={handleChange} handleSubmit={handleSubmit} loading={loading} linkSala={linkSala} />

                        </Card>

                    </Col>

                    <Col xs="6" sm="4">

                        <Card body style={{
                            borderRadius: '10px'
                        }}>
                            <Lobby />

                        </Card>

                    </Col>

                </Row>
                <div style={{
                    textAlign: 'center',
                }}>
                    <ButtonGoBack />
                </div>


            </Container>

        </div >
    )
}

export default CreateRoom
