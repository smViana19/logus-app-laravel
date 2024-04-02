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
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white drop-shadow-2xl overflow-hidden sm:rounded-lg">
                <div>
                    <Link href="/">
                        {/* <ApplicationLogo className="w-30 h-20 fill-current text-gray-500" /> */}
                        <TituloH1>Seja bem vindo ao logus</TituloH1>
                    </Link>
                </div>
                {children}

            </div>
        </div>
    );
}
