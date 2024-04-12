export default function CardMaterial({ materia, data, titulo, colorSVG, anoEscolar }) {
    return (
        <div className="px-4 py-2 border-2 rounded-lg">
            <div className="mb-4">
                <div className="border-b border-zinc-300 w-32 flex gap-2 mb-2">
                    <svg className="w-3"
                        style={{ fill: colorSVG }}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
                    <p>{materia}</p>
                </div>
                <p className="text-sm">{anoEscolar}</p>

            </div>
            <div className="flex gap-8">
                <h1 className="font-semibold text-xl m-0">{titulo}</h1>
                <h3 className="mt-1">{data}</h3>
            </div>
            <div>
                <button>
                    <img src="" alt="" />
                    <p>Download</p>
                </button>

            </div>
        </div>
    )
}