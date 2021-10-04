export default function validateRegister(values) {
    let errors = {};

    if (!values.nome.trim()) {
        errors.nome = 'O nome é obrigatório.';
    }

    if (!values.termos) {
        errors.termos = 'Você deve aceitar os termos.';
    }

    if (!values.sobrenome.trim()) {
        errors.sobrenome = 'O sobrenome é obrigatório.';
    }
    if (!values.telefone) {
        errors.telefone = 'O telefone é obrigatório.';
    }
    else if (values.telefone.length < 10) {
        errors.telefone = 'Telefone inválido.';
    }

    if (!values.email) {
        errors.email = 'O e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Endereço de e-mail inválido.';
    }
    if (!values.senha) {
        errors.senha = 'A senha é obrigatória.';
    } else if (values.senha.length < 6) {
        errors.senha = 'A senha deve possuir 6 ou mais caracteres.';
    }

    if (!values.senha2) {
        errors.senha2 = 'A confirmação de senha é obrigatória.';
    } else if (values.senha2 !== values.senha) {
        errors.senha2 = 'As senhas não coincidem.';
    }
    return errors;
}