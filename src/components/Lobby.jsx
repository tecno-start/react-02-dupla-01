import React from 'react'

function Lobby() {
    return (
        <div>
            <h1>Texto lobby</h1>
            <div style={{
                flex: 1,
                float: 'right',
            }}>
                <span>
                    Min
                </span>
                <span>
                    Atual
                </span>
                <span>
                    Max
                </span>
            </div>
        </div>
    )
}

export default Lobby