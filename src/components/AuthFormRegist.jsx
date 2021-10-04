
import React from 'react';
import { Button, Form, FormGroup, Input, Label, FormText } from 'reactstrap';
import InputMask from "react-input-mask";
import { Link, useHistory } from 'react-router-dom';
import { LOGIN } from '../routes/routes';
import useForm from '../services/useForm'
import validateRegister from '../services/validateRegister'
import { axiosConfig } from '../services/axiosConfig';
import { useState } from 'react';


function AuthFormRegist() {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    const fields = {
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        senha: '',
        senha2: '',
        termos: '',
    }

    function apiErrorHandle(reason) {
        const fieldsErrorTranslate = {
            'phone': 'telefone',
            'email': 'email',
            'password': 'senha'
        }
        if (reason.response.status === 400) {
            reason.response.data.errors.forEach(error => {
                var errorsToAppend = {}
                errorsToAppend[fieldsErrorTranslate[error.field]] = error.defaultMessage
                setErrors(errorsToAppend)
            });
        }
        setLoading(false)
    }

    function submitForm(values) {
        setLoading(true)
        const to_post = {
            email: values.email,
            name: values.nome + ' ' + values.sobrenome,
            password: values.senha,
            phone: values.telefone,
            description: "Novo Usuario",
            photo: "Vazio"
        }
        axiosConfig.post('/user', to_post).then(
            response => { history.push({ LOGIN }); setLoading(false) }
        ).catch((reason) => apiErrorHandle(reason))
    }

    const { handleChange, handleSubmit, values } = useForm(
        submitForm,
        validateRegister,
        setErrors,
        fields,
        errors
    );

    const userNameInputProps = {
        type: 'text',
        placeholder: 'Nome',
        name: 'nome',
        values: values.nome,
        onChange: handleChange
    }
    const userLastNameInputProps = {
        type: 'text',
        placeholder: 'Sobrenome',
        name: 'sobrenome',
        values: values.sobrenome,
        onChange: handleChange
    }

    const userPhoneInputProps = {
        name: 'telefone',
        values: values.telefone,
        onChange: handleChange,
        mask: "+55 (99) 99999-9999",
        maskChar: " ",
        placeholder: "+55 (48) 99999-9999",
        className: "form-control"
    }

    const emailInputProps = {
        name: 'email',
        type: 'email',
        placeholder: 'voce@email.com',
        values: values.email,
        onChange: handleChange
    }
    const passwordInputProps = {
        name: 'senha',
        type: 'password',
        placeholder: 'digite sua senha',
        values: values.senha,
        onChange: handleChange
    }
    const password2InputProps = {
        name: 'senha2',
        type: 'password',
        placeholder: 'digite sua senha',
        values: values.senha2,
        onChange: handleChange
    }



    return (
        <Form onSubmit={handleSubmit}>
            <div className="text-center pb-4">
                <h1>TecnoStart</h1>
            </div>

            <FormGroup>
                <Label for="name">Nome</Label>
                <Input {...userNameInputProps} required />
            </FormGroup>
            {errors.nome && <FormText color="danger">
                {errors.nome}
            </FormText>}
            <FormGroup>
                <Label for="sobrenome">Sobrenome</Label>
                <Input {...userLastNameInputProps} required />
            </FormGroup>
            {errors.sobrenome && <FormText color="danger">
                {errors.sobrenome}
            </FormText>}
            <FormGroup >
                <Label for="phone">Telefone</Label>
                <InputMask {...userPhoneInputProps} required />
            </FormGroup>
            {errors.telefone && <FormText color="danger">
                {errors.telefone}
            </FormText>}
            <FormGroup>
                <Label for="Email">Email</Label>
                <Input {...emailInputProps} required />
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
            <FormGroup>
                <Label for="confirmeSenha">Confirmação de senha</Label>
                <Input {...password2InputProps} required />
            </FormGroup>
            {errors.senha2 && <FormText color="danger">
                {errors.senha2}
            </FormText>}
            <FormGroup className='lembrarSenha'>
                <Input type="checkbox" required name="termos" values={values.termos} onChange={handleChange} />
                <Label for="termoDeclaracao">
                    Declaro que li e concordo com os termos e políticas de privacidade
                </Label>
                {errors.termos && <FormText color="danger">
                    {errors.termos}
                </FormText>}
            </FormGroup>


            <Button
                size="lg"
                className="bg-gradient-theme-left border-0"
                block
                onClick={handleSubmit}>
                {!loading ? "Cadastrar" : "Carregando.."}
            </Button>
            <Link to={LOGIN}>Já possui conta</Link>
            <hr />
            <span>Copyright &copy; Caio, Gabriel, Jéssica - TecnoStart</span>
        </Form>);
}
export default AuthFormRegist



