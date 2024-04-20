import '../../../css/Dashboard.css'
import ContainerTarefa from './ContainerTarefa'
export default function ({ atividade1 }) {
    return (
        <div className='m-16'>
            <h2 className='font-bold text-2xl mb-8'>Tarefas Urgentes</h2>

            <ContainerTarefa/>
            <ContainerTarefa/>

        </div>
    )

}