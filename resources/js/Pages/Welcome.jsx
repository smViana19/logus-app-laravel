import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Bem Vindo" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-corPrincipal selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0  p-10 text-center">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="ms-4 text-lg font-semibold text-neutral-950 hover:text-neutral-500 uppercase"
                        >
                            Painel
                        </Link>
                    ) : (
                        <>
                            {/* <Link
                                href={route('login')}
                                className="font-semibold text-neutral-950 hover:text-neutral-500  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Login
                            </Link> */}

                            <Link
                                href={route('register')}
                                className="ms-4 text-lg font-medium text-neutral-950 hover:text-neutral-600 ">
                                Iniciar Sessão
                            </Link>
                            <Link className="ms-4 text-lg font-medium text-neutral-950 hover:text-neutral-600 ">Funcionalidades</Link>
                            <Link className="ms-4 text-lg font-medium text-neutral-950 hover:text-neutral-600 ">Planos</Link>
                            <Link className="ms-4 text-lg font-medium text-neutral-950 hover:text-neutral-600 ">Obtenha o lógus grátis</Link>

                        </>
                    )}
                </div>
            </div>
        </>
    );
}
