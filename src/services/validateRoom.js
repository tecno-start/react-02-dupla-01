export default function validateRoom(values) {
    let errors = {};

    const validations = [{
        'condition': !values.nomeSala, 'error': 'Você deve informar um nome para a sala.', 'field': 'nomeSala'
    }, {
        'condition': !values.maximoParticipantes, 'error': 'Informe o máximo de participantes.', 'field': 'maximoParticipantes'
    },
    {
        'condition': !values.minimoParticipantes, 'error': 'Informe o mínimo de participantes.', 'field': 'minimoParticipantes'
    },
    {
        'condition': parseInt(values.maximoParticipantes) < parseInt(values.minimoParticipantes), 'error': 'Máximo deve ser maior/igual ao mínimo.', 'field': 'maximoParticipantes'
    },
    {
        'condition': parseInt(values.minimoParticipantes) < 3, 'error': 'Número de participantes deve ser maior igual a 3.', 'field': 'minimoParticipantes'
    },
    {
        'condition': values.comSenha === 'Sim' && (values.senha.length < 6 || values.senha.length > 8), 'error': 'A senha deve ter entre 6 e 8 caracteres', 'field': 'senha'
    }
        // {
        //     'condition': values.perguntas.lenght < 1, 'error': 'Número de participantes deve ser maior igual a 3.', 'field': 'minimoParticipantes'
        // }
    ]

    validations.forEach(validation => {
        if (validation['condition']) {
            errors[validation['field']] = validation['error']
        }
    });


    return errors;
}