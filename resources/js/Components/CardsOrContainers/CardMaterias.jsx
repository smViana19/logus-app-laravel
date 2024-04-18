export default function CardMaterias({ materia, atividades, imgCard }) {
    return (
        <div className="
        
            border-2 border-[#820AD1]
            rounded-lg
            py-2 px-2 flex 
            shadow-md">

            <img className="w-2/5 mr-4 rounded-lg" src={imgCard} alt="" />
            <div>
                <h1 className="text-xl font-semibold text-[#820AD1]">{materia}</h1>
                <div className="my-2">
                    <input type="checkbox" className="mr-4 rounded" />
                    <label htmlFor="">{atividades}</label>
                </div>
            </div>
        </div>
    );
}
