import logo200Image from '../assets/img/logo/logo_200.png';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


function AuthForm() {
  function handleSubmit() {
    console.log("confirmou formulario")
  }
  const usernameInputProps = {
    type: 'email',
    placeholder: 'voce@email.com',
  }
  const passwordInputProps = {
    type: 'senha',
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
        <Input {...usernameInputProps} />
      </FormGroup>
      <FormGroup>
        <Label for="Senha">Senha</Label>
        <Input {...passwordInputProps} />
      </FormGroup>
      <hr />
      <Button
        size="lg"
        className="bg-gradient-theme-left border-0"
        block
        onClick={handleSubmit}>
        Login
      </Button>
    </Form>);
}
export default AuthForm;




