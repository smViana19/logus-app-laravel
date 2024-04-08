import '../../css/Welcome.css'

export default function CardPlanos({ namePlan, preco, paraQuem, funcionalidade1, funcionalidade2, funcionalidade3, 
                                    backgroundColor, color, buttonBackgroundColor, buttonColor, btnBorder }) {

    return (
        <div className='card-planos hover:scale-105 ease-in duration-300' style={{backgroundColor, color}}>
            <p>{namePlan}</p>
            <h3 className="text-5xl font-bold mt-2 mb-4">
                {preco} <span className='font-normal text-sm'>/mês</span>
            </h3>
            <p className='mb-8 font-light' >{paraQuem}</p>

            <div className='grid mb-8'>
                <div className='mt-4'><img src="" alt="" /> <p>{funcionalidade1}</p></div>
                <div className='mt-4'><img src="" alt="" /> <p>{funcionalidade2} </p></div>
                <div className='mt-4'><img src="" alt="" /> <p>{funcionalidade3} </p></div>
            </div>
            <button className='font-semibold custum__btn-planos' 
                    style={{backgroundColor:buttonBackgroundColor, color: buttonColor, border: btnBorder}}

                         >Começar agora
            </button>
        </div>
    );
}