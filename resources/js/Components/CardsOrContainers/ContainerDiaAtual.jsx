export default function ContainerDiaAtual({diaNum, diaText, mesAno}) {
    return(
        <div className="flex">
            <span className="font-bold text-6xl mx-8">{diaNum}</span>

            <div className="flex flex-col">
                <span>{diaText}</span>
                <span>{mesAno}</span>
            </div>

        </div>
    );
}