import CardTitle from '@/Components/CardsOrContainers/CardTitle';
import '../../../css/Welcome.css'

export default function CardFuncionalidades({text, title}) {
    return (

        <div className='card-funcionalidades onhover px-4 py-2 mb-12'>
            <CardTitle
              title={title} />
  
            <p>{text}</p>
        </div>
    )
}