
import logo200Image from '../assets/img/logo/logo_200.png';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


function AuthFormRegist() {
    function handleSubmit() {
        console.log("confirmou formulario")
    }
    const userNameInputProps = {
        type: 'text',
        placeholder: 'Nome',
    }
    const userLastNameInputProps = {
        type: 'text',
        placeholder: 'Sobremonome',
    }

    const userPhoneInputProps = {
        type: 'number',
        placeholder: '(99)99999-9999',
    }
    const userInputProps = {
        type: 'email',
        placeholder: 'voce@email.com',
    }
    const passwordInputProps = {
        type: 'password',
        placeholder: 'digite sua senha',
    }


    return (

        <Form onSubmit={handleSubmit}>

            <div className="text-center pb-4">
                <img
                    src={logo200Image}
                    className="rounded"
                    style={{ width: 60, height: 60, cursor: 'pointer' }}
                    alt="logo"
                    onClick={handleSubmit}
                />
            </div>

            <FormGroup>
                <Label for="name">Nome</Label>
                <Input {...userNameInputProps} required />
            </FormGroup>
            <FormGroup>
                <Label for="sobrenome">Sobrenome</Label>
                <Input {...userLastNameInputProps} required />
            </FormGroup>
            <FormGroup >
                <Label for="phone">Telefone</Label>
                <Input {...userPhoneInputProps} required />
            </FormGroup>
            <FormGroup>
                <Label for="Email">Email</Label>
                <Input {...userInputProps} required />
            </FormGroup>
            <FormGroup>
                <Label for="Senha">Senha</Label>
                <Input {...passwordInputProps} required />
            </FormGroup>
            <FormGroup>
                <Label for="confirmeSenha">Confirmação de senha</Label>
                <Input {...passwordInputProps} required />
            </FormGroup>
            <FormGroup>
                <Input type="checkbox" required />
                <Label for="termoDeclaracao">
                    Declaro que li e concordo com os termos e políticas de privacidade
                </Label>
            </FormGroup>
            <Button
                size="lg"
                className="bg-gradient-theme-left border-0"
                block
                onClick={handleSubmit}>
                Cadastrar
            </Button>
            <p>Já possui conta</p>
            <span>Copyright &copy; Caio, Gabriel, Jéssica - TecnoStart</span>
        </Form>);
}
export default AuthFormRegist



