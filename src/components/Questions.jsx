import React, { useState, useEffect } from 'react'
import { axiosConfig } from '../services/axiosConfig';
import Question from './Question';

function Questions( {perguntas} ) {
    
    return (
        <div>
             <h1>Perguntas</h1>
            {
                perguntas.map((pergunta) => {
                    return (<Question pergunta={pergunta} />)

                })
            }
        </div>
    )
}

export default Questions