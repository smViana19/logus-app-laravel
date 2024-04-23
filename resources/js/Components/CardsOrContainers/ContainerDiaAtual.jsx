import React, { useState } from 'react';
import ModalCreateTask from '../Modal/ModalCreateTask';

export default function ContainerDiaAtual({ diaNum, diaText, mesAno }) {
    const [openModal, setOpenModal] = useState(false); // Estado para controlar se o modal está aberto ou fechado

    return (
        <div className="relative flex justify-between px-32 pt-8">
            <div className="flex">
                <span className="font-bold text-6xl mx-8">{diaNum}</span>
                <div className="flex flex-col mt-1">
                    <span className="font-semibold text-lg">{diaText}</span>
                    <span className="font-semibold text-lg">{mesAno}</span>
                </div>
            </div>

            <button
                onClick={() => setOpenModal(true)} // Quando clicado, abre o modal
                title="Add New"
                className="group cursor-pointer outline-none hover:rotate-90 duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    className="stroke-[#820AD1] fill-none 
                    group-hover:scale-110
                    group-active:stroke-indigo-100 
                    group-active:fill-[#820AD1] group-active:duration-0 duration-300"
                >
                    <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        strokeWidth="1.5"
                    />
                    <path d="M8 12H16" strokeWidth="1.5" />
                    <path d="M12 16V8" strokeWidth="1.5" />
                </svg>
            </button>

            {/* Renderiza o modal se openModal for true */}
            {openModal && (
                <div className="fixed z-20 inset-0 overflow-y-auto flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay escuro */}
                    <div className="relative bg-white rounded-xl p-8 w-3/6">
                        <button onClick={() => setOpenModal(false)} className="absolute top-0 right-0 m-4 text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="stroke-current w-6 h-6"
                            >
                                <path
                                    d="M6 18L18 6M6 6l12 12"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <ModalCreateTask isOpen={openModal} />
                    </div>
                </div>
            )}
        </div>
    );
}
