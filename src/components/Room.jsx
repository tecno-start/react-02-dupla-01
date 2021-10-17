import React from 'react'
import { Form, FormGroup, Input, Label, FormText, Button } from 'reactstrap';
// import ModalRules from '../components/ModalRules'

function Room({ errors, values, handleChange, handleSubmit, loading }) {

    const dateNameRoom = {
        type: 'text',
        placeholder: 'Nome da Sala',
        name: 'nomeSala',
        onChange: handleChange,
        values: values.nomeSala
    }

    const dateMaxParticipants = {
        type: 'number',
        placeholder: 'Máximo 20',
        name: 'maxParticipantes',
        onChange: handleChange,
        values: values.maximoParticipantes
    }

    const dateMinParticipants = {
        type: 'number',
        placeholder: 'Mínimo 03',
        name: 'minParticipantes',
        onChange: handleChange,
        values: values.minimoParticipantes
    }


    const dateRoomPassword = {
        type: 'password',
        placeholder: 'Digite a Senha',
        name: 'senha',
        onChange: handleChange,
        values: values.senha
    }



    return (
        <div>

            <Form >
                <div className="text-center pb-4">
                    <h1>Sala</h1>
                </div>
                <FormGroup>
                    <Label for="nameRoom">Nome da Sala</Label>
                    <Input {...dateNameRoom} required />
                </FormGroup>
                {errors['nomeSala'] && <FormText color="danger">
                    {errors['nomeSala']}
                </FormText>}
                <FormGroup>
                    <Label for="maxParticipants">Máximo de Participantes</Label>
                    <Input {...dateMaxParticipants} required />
                </FormGroup>
                {errors['maximoParticipantes'] && <FormText color="danger">
                    {errors['maximoParticipantes']}
                </FormText>}
                <FormGroup>
                    <Label for="minParticipants">Mínimo de Participantes</Label>
                    <Input {...dateMinParticipants} required />
                </FormGroup>
                {errors['minimoParticipantes'] && <FormText color="danger">
                    {errors['minimoParticipantes']}
                </FormText>}
                <FormGroup>
                    <Label for="withPassword">Com Senha?</Label>
                    <Input type="select" id="select" required onChange={handleChange} values={values.comSenha} defaultValue='Não' name='senha'>
                        <option>Sim</option>
                        <option>Não</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="roomPassword">Senha</Label>
                    <Input {...dateRoomPassword} required />
                </FormGroup>
                {errors['senha'] && <FormText color="danger">
                    {errors['senha']}
                </FormText>}
            </Form>
            <Button
                size="lg"
                className="bg-gradient-theme-left border-0"
                block
                onClick={handleSubmit}>
                {!loading ? "Criar Sala" : "Carregando.."}
            </Button>

            <div>
                <button>Copiar</button>
                <button>Compartilhar</button>
            </div>
            {/* <div>
                <ModalRules />
            </div> */}

            <div>
                <span>link criado</span>

            </div>
            <span>Bora ver quem são os melhores Best Friends!</span>
        </div>


    )
}

export default Room