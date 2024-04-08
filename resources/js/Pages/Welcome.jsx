import { Link, Head } from '@inertiajs/react';
import '../../css/Welcome.css'
import ContainerPrintApp from '@/Components/ContainerPrintApp';
import Subtitle from '@/Components/Subtitle';
import InputPurple from '@/Components/InputPurple';
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Bem Vindo" />
            <div className=" bg-center bg-corPrincipal selection:bg-red-500 selection:text-white">
                <header>
                    <div className="w-fullr">
                        {auth.user ? (
                            <div className='bg-img'>

                                <nav className='py-4 nav__landing-page'>
                                    <div>
                                        <img src="../img/bg-logoLogus.png" alt="Logo do Lógus" />
                                    </div>

                                    <div>
                                        <Link
                                            className="ms-4 font-medium text-white hover:text-neutral-500 uppercase border-link" >
                                            Home
                                        </Link>
                                        <Link
                                            className="ms-4 font-medium text-white  hover:text-neutral-500 uppercase border-link" >
                                            Funcionalidades
                                        </Link>
                                        <Link
                                            className="ms-4 font-medium text-white text-base  hover:text-neutral-500 uppercase" >
                                            Planos
                                        </Link>
                                    </div>

                                    <div>
                                        <Link
                                            href={route('dashboard')}
                                            className="ms-4 font-medium text-white  hover:text-neutral-500" >
                                            Entrar
                                        </Link>

                                        <Link
                                            href={route('dashboard')}
                                            className="font-medium text-white  hover:text-neutral-500"
                                            id='btnRegistrar'>
                                            Registrar
                                        </Link>
                                    </div>

                                </nav>
                                <main>
                                    <section >
                                        <h1 className='text-4xl font-bold text-white text-center mt-48 mb-32' >Conectando mentes, expandindo horizontes.</h1>
                                        <InputPurple
                                            typeInput={'email'}
                                            placeholderInput={'logus@study.com'}
                                            typeBtn={'submit'}
                                            valueBtn={'Obtenha o Lógus grátis'}
                                        />

                                    </section>

                                    <ContainerPrintApp></ContainerPrintApp>

                                    <section className='container__app-mobile mt-32' >
                                        <div>
                                            <Subtitle>Baixe também nosso aplicativo mobile</Subtitle>
                                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, facere autem veritatis pariatur, minus est fugit molestiae quisquam perferendis, temporibus optio possimus aliquam qui illo! Minima libero et magnam odio?</p>

                                            <div className='flex justify-around mt-8'>
                                                <a href=""><img src="../../img/installGooglePlay.png" alt="Link para baixar o aplicativo android" /></a>
                                                <a href=""><img src="../img/installAppStore.png" alt="Link para baixar o aplicativo IOS" /></a>
                                            </div>

                                        </div>

                                        <img src="../../img/mockp-home-mobile.png" alt="" />
                                    </section>

                                    <section>

                                    </section>

                                </main>
                            </div>


                            /* -------------------------------------------------------------------------- */
                        ) : ( //SEM LOGAR

                            <>
                                <div className='bg-img'>

                                    <nav className='py-4 nav__landing-page'>
                                        <div>
                                            <img src="../img/bg-logoLogus.png" alt="Logo do Lógus" />
                                        </div>

                                        <div>
                                            <Link
                                                className="ms-4 font-medium text-white hover:text-neutral-500 uppercase border-link" >
                                                Home
                                            </Link>
                                            <Link
                                                className="ms-4 font-medium text-white  hover:text-neutral-500 uppercase border-link" >
                                                Funcionalidades
                                            </Link>
                                            <Link
                                                className="ms-4 font-medium text-white text-base  hover:text-neutral-500 uppercase" >
                                                Planos
                                            </Link>


                                        </div>

                                        <div>
                                            <Link
                                                href={route('dashboard')}
                                                className="ms-4 font-medium text-white  hover:text-neutral-500" >
                                                Entrar
                                            </Link>

                                            <Link
                                                href={route('dashboard')}
                                                className="font-medium text-white  hover:text-neutral-500"
                                                id='btnRegistrar'>
                                                Registrar
                                            </Link>
                                        </div>

                                    </nav>
                                    <main>
                                        <section >
                                            <h1 className='text-4xl font-bold text-white text-center mt-48 mb-32' >Conectando mentes, expandindo horizontes.</h1>
                                            <InputPurple
                                                typeInput={'email'}
                                                placeholderInput={'logus@study.com'}
                                                typeBtn={'submit'}
                                                valueBtn={'Obtenha o Lógus grátis'}
                                            />

                                        </section>

                                        <ContainerPrintApp></ContainerPrintApp>

                                        <section className='container__app-mobile mt-32' >
                                            <div>
                                                <Subtitle>Baixe também nosso aplicativo mobile</Subtitle>
                                                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, facere autem veritatis pariatur, minus est fugit molestiae quisquam perferendis, temporibus optio possimus aliquam qui illo! Minima libero et magnam odio?</p>

                                                <div className='flex justify-around mt-8'>
                                                    <a href=""><img src="../../img/installGooglePlay.png" alt="Link para baixar o aplicativo android" /></a>
                                                    <a href=""><img src="../img/installAppStore.png" alt="Link para baixar o aplicativo IOS" /></a>
                                                </div>

                                            </div>

                                            <img src="../../img/mockp-home-mobile.png" alt="" />
                                        </section>

                                        <section>

                                        </section>

                                    </main>
                                </div>



                            </>
                        )}
                    </div>
                </header>
            </div>
        </>
    );
}
