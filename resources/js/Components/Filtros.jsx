export default function Filtros() {
    return(
        <div className="flex justify-left mt-32 mx-16">
            <div className="my-22">
                <select name="" id="" className="rounded-lg mx-2 border-2 border-gray-200">
                    <option value="" disabled selected>Ordenar por: </option>
                    <option value="">Populares</option>
                    <option value="">Recentes</option>
                </select>
            </div>

            <select name="" id="" className="rounded-lg mx-4 border-2 border-gray-200" >
                <option value="" disabled selected >Ano Escolar</option>
                <option value="">Ensino Fundamental I</option>
                <option value="">Ensino Fundamental II</option>
                <option value="">Ensino Médio</option>
                <option value="">Faculdade e Universidade</option>
            </select>

            <select name="" id="" className="rounded-lg mx-4 border-2 border-gray-200" >
                <option value="" disabled selected>Disciplina</option>
                <option value="">Português</option>
                <option value="">Matemática</option>
                <option value="">História</option>
                <option value="">Geografia</option>
                <option value="">Ciência</option>
                <option value="">Ciências Sociais</option>

            </select>


            <select name="" id="" className="rounded-lg mx-4 border-2 border-gray-200" >
                <option value="" disabled selected>Tipo</option>
                <option value="">Resumos</option>
                <option value="">PowerPoint e Google Apresentações</option>
                <option value="">Exercícios</option>
                <option value="">Outros</option>
            </select>


            <select name="" id="" className="rounded-lg mx-4 border-2 border-gray-200" >
                <option value="" disabled selected>Avaliação</option>
                <option value="">5 estrelas</option>
                <option value="">4 estrelas</option>
                <option value="">3 estrelas</option>
                <option value="">2 estrelas</option> 
                <option value="">1 estrela</option>
            </select>
        </div>
    );
}