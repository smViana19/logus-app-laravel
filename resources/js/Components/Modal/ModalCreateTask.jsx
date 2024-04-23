import React from 'react';

export default function ModalCreateTask({ isOpen }) {
    if (isOpen) {
        return (
            <div className='mt-4'>
                <input className='rounded-md w-full text-lg font-semibold bg-[#F0F1F5] border-none' type="text" placeholder='Tarefa' />
                <div className='flex mt-4 w-full'>
                    <select className='w-6/12 rounded-md bg-[#F0F1F5] border-none mr-4' name="" id="">
                        <option value="" disabled selected >Categoria</option>
                        <option value="">Escola</option>
                        <option value="">Trabalho</option>
                    </select>

                    <select className='w-6/12 rounded-md bg-[#F0F1F5] border-none' name="" id="">
                        <option value="" disabled selected >Urgencia</option>
                        <option value="">Urgênte</option>
                        <option value="">Moderado</option>
                        <option value="">Tranquilo</option>
                    </select>
                </div>

                <div className='flex mt-4 w-full'>

                    <div className='flex itens-center w-6/12 bg-[#F0F1F5] p-2 rounded-md justify-between mr-4'>
                        <span className='mr-2 text-lg text-gray-500'>Dia</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="
                                    group peer ring-0 bg-gray-400 rounded-full 
                                    outline-none duration-300 after:duration-300 w-14 h-7 
                                    hadow-md 
                                    peer-checked:bg-[#820AD1] peer-focus:outline-none 
                                    after:rounded-full after:absolute after:bg-gray-50 after:outline-none 
                                    after:h-5 after:w-5 
                                    after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center     peer-checked:after:translate-x-7 peer-hover:after:scale-95 peer-checked:after:rotate-0">
                            </div>
                        </label>
                    </div>

                    <div className='flex itens-center w-6/12 bg-[#F0F1F5] p-2 rounded-md justify-between'>
                        <span className='mr-2 text-lg text-gray-500'>Hora</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="
                                    group peer ring-0 bg-gray-400 rounded-full 
                                    outline-none duration-300 after:duration-300 w-14 h-7 
                                    hadow-md 
                                    peer-checked:bg-[#820AD1] peer-focus:outline-none 
                                    after:rounded-full after:absolute after:bg-gray-50 after:outline-none 
                                    after:h-5 after:w-5 
                                    after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center     peer-checked:after:translate-x-7 peer-hover:after:scale-95 peer-checked:after:rotate-0">
                            </div>
                        </label>
                    </div>
                </div>

                <div className='rounded-md w-full bg-[#F0F1F5] mt-4 flex justify-between p-2 '>
                    <span className='text-gray-500 text-lg pt-0.5'>Data</span>
                    <div className='flex gap-4'>
                        <div className='bg-gray-300 py-0.5 px-2 rounded-md'>
                            <span>25 de mar. de 2024</span>
                        </div>
                        <div className='bg-gray-300 py-0.5 px-2 rounded-md'>
                            <span>12:00 AM</span>
                        </div>
                    </div>
                </div>


                <button id='btnCreateTask'
                    class="rounded-lg relative w-full h-10 cursor-pointer flex items-center border border-[#820AD1] bg-[#820AD1] group hover:bg-[#820AD1] active:bg-[#820AD1] active:border-[#820AD1] mt-8 mb-4"
                >
                    <span
                        class="text-white font-semibold mx-auto transform group-hover:translate-x-20 transition-all duration-300 "
                    >Criar Tarefa</span>
                    
                    <span
                        class="absolute right-0 h-full w-10 rounded-lg bg-[#820AD1] flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
                    >
                        <svg
                            class="svg w-8 text-white"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="12" x2="12" y1="5" y2="19"></line>
                            <line x1="5" x2="19" y1="12" y2="12"></line>
                        </svg>
                    </span>
                </button>

            </div>
        )
    }
    return null;
}
