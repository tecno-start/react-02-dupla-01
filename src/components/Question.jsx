import React from 'react';

function Question({ pergunta }) {
    return (
        <li key={pergunta.id}>
             <input id={pergunta.id} type='checkbox' name='checkPergunta' />
            <label>{pergunta.title}
            </label>
        </li>)
}

export default Question