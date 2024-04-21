import ModalCreateTask from '@/Components/Modal/ModalCreateTask';
import { useState } from 'react';

export default function ContainerDiaAtual({ diaNum, diaText, mesAno }) {
    const [OpenModalCreateTask, setOpenModalCreateTask] = useState(false)

    return (
        <div className="flex justify-between px-32 pt-8">
            <div className="flex">
                <span className="font-bold text-6xl mx-8">{diaNum}</span>
                <div className="flex flex-col mt-1">
                    <span className="font-semibold text-lg">{diaText}</span>
                    <span className="font-semibold text-lg">{mesAno}</span>
                </div>
            </div>

            <button
                onClick={() => setOpenModalCreateTask(true)}
                title="Add New"
                class="group cursor-pointer outline-none hover:rotate-90 duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    class="stroke-[#820AD1] fill-none 
                    group-hover:scale-110
                     group-active:stroke-indigo-100 
                     group-active:fill-[#820AD1] group-active:duration-0 duration-300"
                >
                    <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke-width="1.5"
                    ></path>
                    <path d="M8 12H16" stroke-width="1.5"></path>
                    <path d="M12 16V8" stroke-width="1.5"></path>
                </svg>
            </button>


            <ModalCreateTask isOpen={OpenModalCreateTask} />
        </div>
    );
}