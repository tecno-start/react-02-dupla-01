import React, { useState } from 'react'
import getAxios from '../services/axiosConfig'
import { Label, Input, FormGroup } from 'reactstrap'

function Questions({ handleChange, values }) {
    const [perguntas, setPerguntas] = useState([])

    const axiosConfig = getAxios(true)

    function fetchQuestions() {
        return axiosConfig.get('/question').then(res => res.data).catch(err => console.error(err))
    }
    fetchQuestions()
        .then(res => setPerguntas(res))


    return (
        <div>
            <div className="text-center pb-4">
            <h1>Perguntas</h1>
            </div>
            {
                perguntas.map((pergunta) => {
                    return (
                        < FormGroup key={pergunta.id} className='ml-3'>
                            <Input id={pergunta.id} type='checkbox' name='perguntas' onChange={handleChange} />
                            <Label for="name">{pergunta.title}</Label>
                        </FormGroup>
                    )
                })}
        </div >
    )

}

export default Questions