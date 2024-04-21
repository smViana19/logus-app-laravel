import Checkbox from "../Checkbox";
import '../../../css/Agenda.css'
export default function () {
    return (
        <div className="items-center custum__card-tarefas">
            <Checkbox />

            <div className="bg-[#F0F1F5] rounded-lg p-4 mx-8">
                <div className="flex justify-between">

                    <span className="font-thin">Trabalho</span>
                    <div className="bg-[#EDDDFF] p-2 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#820ad1" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
                    </div>

                </div>
                <div>
                    <h2 className="font-semibold text-xl text-gray-700">Nome da Tarefa</h2>
                </div>
                <div className="flex justify-between mt-2">
                    <div className="flex">
                        <svg className="mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#6e48a3" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                        <span className="text-[#6e48a3]">10:00 AM</span>
                    </div>
                    <button className="bg-[#C7F1C0] px-3 h-6 rounded-md text-[#3AC224] text-sm">Tranquilo</button>
                </div>
            </div>
        </div>
    );
}