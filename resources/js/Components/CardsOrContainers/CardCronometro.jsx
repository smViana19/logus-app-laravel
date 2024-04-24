import React, { useState, useEffect } from 'react';
import '../../../css/Pomodoro.css';

export default function CardCronometro() {
    const [tempoDecorridoEmSegundos, setTempoDecorridoEmSegundos] = useState(25 * 60); // 25 minutos em segundos
    const [cronometroIniciado, setCronometroIniciado] = useState(false);
    let intervalId;

    useEffect(() => {
        if (cronometroIniciado && tempoDecorridoEmSegundos > 0) {
            intervalId = setInterval(() => {
                setTempoDecorridoEmSegundos(prevTempo => prevTempo - 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [cronometroIniciado, tempoDecorridoEmSegundos]);

    function formatarTempo(tempoEmSegundos) {
        const minutos = Math.floor(tempoEmSegundos / 60);
        const segundos = tempoEmSegundos % 60;
        return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }

    const startCronometro = () => {
        setCronometroIniciado(prevState => !prevState);
    };

    return (
        <div className='border border-gray-300 rounded-3xl w-9/12 m-auto justify-center flex flex-col mt-16'>
            <div className='border border-gray-400 rounded-full h-8 w-8 flex justify-center itens-center  mx-4 mt-2'>
                <button>
                    <svg  xmlns="http://www.w3.org/2000/svg" height="14" width="3.5" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                </button>
            </div>
            <div id='timer' className='text-8xl font-bold custum-timer text-center text-gray-800'>
                {formatarTempo(tempoDecorridoEmSegundos)}
            </div>
            <button className='bg-[#820AD1] text-white text-lg rounded-xl py-2 px-16 mx-32 mt-16 mb-8' onClick={startCronometro}>{cronometroIniciado ? 'Pausar' : 'Começar'}</button>
        </div>
    );
}
