import logo200Image from '../assets/img/logo/logo_200.png';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


function AuthForm() {
  function handleSubmit() {
    console.log("confirmou formulario")
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
        <Label for="Email">Email</Label>
        <Input {...userInputProps} />
      </FormGroup>
      <FormGroup>
        <Label for="Senha">Senha</Label>
        <Input {...passwordInputProps} />
      </FormGroup>
      <FormGroup>
        <Input type="checkbox" />
        <Label for="Lembrar de mim">Lembrar de mim</Label>
      </FormGroup>
      <hr />
      <Button
        size="lg"
        className="bg-gradient-theme-left border-0"
        block
        onClick={handleSubmit}>
        Login
      </Button>
      <p>Esqueceu sua senha</p>
      <p>Não possui uma conta? <button>Cadastra-se</button> </p>
      <span>Copyright &copy; Caio, Gabriel, Jéssica - TecnoStart</span>
    </Form>);
}
export default AuthForm;




