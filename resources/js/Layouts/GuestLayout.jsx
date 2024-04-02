import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import TituloH1 from '@/Components/TituloCadastro';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen 
        flex flex-col 
        sm:justify-center 
        items-center pt-6 
        sm:pt-0 
        bg-corFundo">
            <div className="w-full max-w-xl mt-6 px-6 py-6 bg-white drop-shadow-2xl overflow-hidden sm:rounded-lg">
                <div className="flex justify-center">
                    <Link href="/">
                        <ApplicationLogo className="" /> 
                        {/* <TituloH1>Seja bem vindo ao logus</TituloH1> */}
                    </Link>
                </div>
                {children}

            </div>
        </div>
    );
}
