import React from 'react'
import { Button, Form, FormGroup, Input, Label, FormText } from 'reactstrap';

function Room() {

    const dateNameRoom = {
        type: 'text',
        placeholder: 'Nome da Sala',
        name: 'nameRoom',
    }

    const dateMaxParticipants = {
        type: 'number',
        placeholder: 'Máximo 20',
        name: 'maxParticipants',
    }

    const dateMinParticipants = {
        type: 'number',
        placeholder: 'Mínimo 03',
        name: 'minParticipants',
    }


    const dateRoomPassword = {
        type: 'password',
        placeholder: 'Digite a Senha',
        name: 'roomParticipants',
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
                <FormGroup>
                    <Label for="maxParticipants">Máximo de Participantes</Label>
                    <Input {...dateMaxParticipants} required />
                </FormGroup>
                <FormGroup>
                    <Label for="minParticipants">Mínimo de Participantes</Label>
                    <Input {...dateMinParticipants} required />
                </FormGroup>
                <FormGroup>
                    <Label for="withPassword">Com Senha?</Label>
                    <Input type="select" id="select" requirid>
                        <option>Sim</option>
                        <option>Não</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="roomPassword">Senha</Label>
                    <Input {...dateRoomPassword} required />
                </FormGroup>
            </Form>
            <hr />
            <div>
                <button>Criar Sala</button>
            </div>
            <div>
                <button>Copiar</button>
                <button>Compartilhar</button>
            </div>
    
            <div>
                <span>link criado</span>
                
            </div>
            <span>Bora ver quem são os melhores Best Friends!</span>
        </div>
    )
}

export default Room