import '../../../css/Welcome.css'

export default function CardPlanos({ namePlan, preco, paraQuem, funcionalidade1, funcionalidade2, funcionalidade3, 
                                    backgroundColor, color, buttonBackgroundColor, buttonColor, btnBorder }) {

    return (
        <div className='card-planos hover:scale-105 ease-in duration-300' style={{backgroundColor, color}}>
            <p>{namePlan}</p>
            <h3 className="text-5xl font-bold mt-2 mb-4">
                {preco} <span className='font-normal text-sm'>/ mês</span>
            </h3>
            <p className='mb-8 font-light' >{paraQuem}</p>

            <div className='grid mb-8'>
                <div className='mt-4 flex'>
                    <svg className='mt-2 mr-4' xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <p className='w-3/4'>{funcionalidade1}</p>
                </div>
                
                <div className='mt-4 flex'>
                    <svg className='mt-2 mr-4' xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <p className='w-3/4'>{funcionalidade2}</p>
                </div>

                <div className='mt-4 flex'>
                    <svg className='mt-2 mr-4' xmlns="http://www.w3.org/2000/svg" height="12" width="10.5" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <p className='w-3/4'>{funcionalidade3}</p>
                </div>

            </div>
            <button className='font-semibold custum__btn-planos' 
                    style={{backgroundColor:buttonBackgroundColor, color: buttonColor, border: btnBorder}}

                         >Começar agora
            </button>
        </div>
    );
}