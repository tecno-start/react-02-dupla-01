import React from 'react';
import { Button, Form, FormGroup, Input, Label, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { REDEFINIR_SENHA, CADASTRO } from '../routes/routes';
import './AuthForm.css'
import { useState } from 'react';
import { axiosConfig } from '../services/axiosConfig';
import { HOME } from '../routes/routes';
import useForm from '../services/useForm';
import { useHistory } from 'react-router-dom';
import validateLogin from '../services/validateLogin';
import { login } from '../auth/auth'



function AuthForm() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const fields = {
    email: '',
    senha: ''
  }

  function apiErrorHandle(reason) {
    const fieldsErrorTranslate = {
      'username': 'email',
      'password': 'senha'
    }
    if (reason.response.status === 400) {
      reason.response.data.errors.array.forEach(error => {
        var errorsToAppend = {}
        errorsToAppend[fieldsErrorTranslate[error.field]] = error.defaultMessage
        setErrors(errorsToAppend)
      });
    } else if (reason.response.status === 401) {
      setErrors({ email: "Email e/ou senha incorretos" })
    }
    setLoading(false)
  }

  function submitForm(values) {
    setLoading(true)
    const to_post = {
      username: values.email,
      password: values.senha,
    }
    axiosConfig.post('/login', to_post).then(
      response => { setLoading(false); login(response.data.token); history.push(HOME) }
    ).catch((reason) => apiErrorHandle(reason))
  }

  const { handleChange, handleSubmit, values } = useForm(
    submitForm,
    validateLogin,
    setErrors,
    fields,
    errors
  );

  const userInputProps = {
    type: 'email',
    placeholder: 'voce@email.com',
    name: 'email',
    values: values.email,
    onChange: handleChange
  }
  const passwordInputProps = {
    type: 'password',
    placeholder: 'digite sua senha',
    name: 'senha',
    values: values.senha,
    onChange: handleChange
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="text-center pb-4">
        <h1>TecnoStart</h1>
      </div>

      <FormGroup>
        <Label for="Email">Email</Label>
        <Input {...userInputProps} required />
      </FormGroup>
      {errors.email && <FormText color="danger">
        {errors.email}
      </FormText>}
      <FormGroup>
        <Label for="Senha">Senha</Label>
        <Input {...passwordInputProps} required />
      </FormGroup>
      {errors.senha && <FormText color="danger">
        {errors.senha}
      </FormText>}
      <FormGroup className='lembrarSenha'>
        <Input type="checkbox" />
        <Label for="Lembrar de mim">Lembrar de mim</Label>
      </FormGroup>
      <hr />
      <Button
        size="lg"
        className="bg-gradient-theme-left border-0"
        block
        onClick={handleSubmit}>
        {!loading ? "Login" : "Carregando.."}
      </Button>
      <div id='botoesLogin'>
        <Link to={REDEFINIR_SENHA}>Esqueceu sua senha?</Link>
        <Link to={CADASTRO} id='cadastro'>Não possui uma conta? Cadastre-se</Link>
      </div>
      <hr />
      <span className='copyRight'>Copyright &copy; Caio, Gabriel, Jéssica - TecnoStart</span>
    </Form>);
}

export default AuthForm;




