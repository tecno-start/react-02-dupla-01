import React, { useState, useEffect } from 'react'
import getAxios from '../services/axiosConfig'

function Questions() {
    const [perguntas, setPerguntas] = useState([])

    const axiosConfig = getAxios(true)

    function fetchQuestions() {
        return axiosConfig.get('/question').then(res => res.data).catch(err => console.error(err))
    }
    fetchQuestions()
        .then(res => setPerguntas(res))


    return (
        <div>
            <h1>Perguntas</h1>
            {
                perguntas.map((pergunta) => {
                    return (

                        <p key={pergunta.id}>
                            <input id={pergunta.id} type='checkbox' name='checkPergunta' />
                            <label>{pergunta.title}
                            </label>
                        </p>)

                })
            }
        </div>
    )
}

export default Questions