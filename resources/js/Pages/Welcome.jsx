import { Link, Head } from '@inertiajs/react';
import '../../css/Welcome.css'
import ContainerPrintApp from '@/Components/ContainerPrintApp';
import Subtitle from '@/Components/Text/Subtitle';
import InputPurple from '../Components/Inputs/InputPurple';
import CardTitle from '@/Components/CardsOrContainers/CardTitle';
import ApplicationLogo from '@/Components/ApplicationLogo';
import imgAppStore from '../../img/installAppStore.png';
import imgGooglePlay from '../../img/installGooglePlay.png';
import imgMockupMobile from '../../img/mockup-home-mobile.png'
import CardFuncionalidades from '@/Components/CardsOrContainers/CardFuncionalidades';


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
                                        <Link><ApplicationLogo /></Link>

                                    </div>

                                    <div>
                                        <Link href='#home'
                                            className="ms-4 font-medium text-white hover:text-neutral-500 uppercase border-link" >
                                            Home
                                        </Link>
                                        <Link href='#funcionalidades'
                                            className="ms-4 font-medium text-white  hover:text-neutral-500 uppercase border-link" >
                                            Funcionalidades
                                        </Link>

                                    </div>

                                    <div>
                                        <Link
                                            href={route('login')}
                                            className="ms-4 font-medium text-white  hover:text-neutral-500" >
                                            Entrar
                                        </Link>

                                        <Link
                                            href={route('register')}
                                            className="font-medium text-white  hover:text-neutral-500"
                                            id='btnRegistrar'>
                                            Registrar
                                        </Link>
                                    </div>

                                </nav>
                                <main>
                                    <section id='home'>
                                        <h1 className='text-4xl font-bold text-white text-center mt-48 mb-32' >Conectando mentes, expandindo horizontes.</h1>
                                        <InputPurple
                                            typeInput={'email'}
                                            placeholderInput={'logus@study.com'}
                                            typeBtn={'submit'}
                                            valueBtn={'Obtenha o Lógus grátis'}
                                        />

                                    </section>

                                    <ContainerPrintApp></ContainerPrintApp>

                                    <section id='home' className='container__app-mobile mt-16' >
                                        <div className='mt-40'>
                                            <Subtitle >Baixe também nosso aplicativo mobile</Subtitle>
                                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, facere autem veritatis pariatur, minus est fugit molestiae quisquam perferendis, temporibus optio possimus aliquam qui illo! Minima libero et magnam odio?</p>

                                            <div className='flex justify-left gap-32 mt-16'>
                                                <a href=""><img className='w-32' src={imgGooglePlay} alt="Link para baixar o aplicativo android" /></a>
                                                <a href=""><img className='w-32' src={imgAppStore} alt="Link para baixar o aplicativo IOS" /></a>
                                            </div>

                                        </div>

                                        <img className='w-3/4' src={imgMockupMobile} alt="" />
                                    </section>

                                    <section id='funcionalidades' className='my-32  w-3/4 m-auto' >
                                        <Subtitle centered>
                                            FUNCIONALIDADES
                                        </Subtitle>
                                        <p className='text-center mt-4 mb-24 w-auto'>Passe o mouse por cima dos titulos e veja nossas principais funcionalidades. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat perspiciatis ducimus modi. </p>

                                        <div className='container__funcionalidades-grid'>
                                            <div>
                                                <CardFuncionalidades
                                                    title={'Postagem de Materiais'}
                                                    text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid'}

                                                />

                                                <CardFuncionalidades
                                                    title={'Agenda'}
                                                    text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid'}

                                                />

                                                <CardFuncionalidades
                                                    title={'Método Pomodoro'}
                                                    text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid'}

                                                />

                                            </div>


                                            <img src="" alt="Print das funcionalidades" />

                                        </div>
                                    </section>

                                   
                                </main>
                                <footer >
                                    <div className='bg-[#820AD1] py-4'>
                                        <h3 className='font-semibold text-xl text-white text-center my-8'>O que está esperando para se cadastrar??</h3>
                                        <InputPurple
                                            typeInput={'email'}
                                            placeholderInput={'logus@study.com'}
                                            typeBtn={'submit'}
                                            valueBtn={'Obtenha o Lógus grátis'}

                                            btnBgColor='white'
                                            btnTextColor='#830AD1'
                                            inputBorder='1px solid #E3E3E3'
                                            placeholderColor='white'

                                        />
                                    </div>

                                    <div className='bg-[#533680] text-white h-40'>
                                        footer

                                    </div>
                                </footer>
                            </div>


                            /* -------------------------------------------------------------------------- */
                        ) : ( //SEM LOGAR

                            <>
                                <div className='bg-img'>

                                    <nav className='py-4 nav__landing-page'>
                                        <div>
                                            <Link><ApplicationLogo /></Link>

                                        </div>

                                        <div>
                                            <Link href='#home'
                                                className="ms-4 font-medium text-white hover:text-neutral-500 uppercase border-link" >
                                                Home
                                            </Link>
                                            <Link href='#funcionalidades'
                                                className="ms-4 font-medium text-white  hover:text-neutral-500 uppercase border-link" >
                                                Funcionalidades
                                            </Link>
                            
                                        </div>

                                        <div>
                                            <Link
                                                href={route('login')}
                                                className="ms-4 font-medium text-white  hover:text-neutral-500" >
                                                Entrar
                                            </Link>

                                            <Link
                                                href={route('register')}
                                                className="font-medium text-white  hover:text-neutral-500"
                                                id='btnRegistrar'>
                                                Registrar
                                            </Link>
                                        </div>

                                    </nav>
                                    <main>
                                        <section id='home'>
                                            <h1 className='text-4xl font-bold text-white text-center mt-48 mb-32' >Conectando mentes, expandindo horizontes.</h1>
                                            <InputPurple
                                                typeInput={'email'}
                                                placeholderInput={'logus@study.com'}
                                                typeBtn={'submit'}
                                                valueBtn={'Obtenha o Lógus grátis'}
                                            />

                                        </section>

                                        <ContainerPrintApp></ContainerPrintApp>

                                        <section id='home' className='container__app-mobile mt-16' >
                                            <div className='mt-40'>
                                                <Subtitle >Baixe também nosso aplicativo mobile</Subtitle>
                                                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, facere autem veritatis pariatur, minus est fugit molestiae quisquam perferendis, temporibus optio possimus aliquam qui illo! Minima libero et magnam odio?</p>

                                                <div className='flex justify-left gap-32 mt-16'>
                                                    <a href=""><img className='w-32' src={imgGooglePlay} alt="Link para baixar o aplicativo android" /></a>
                                                    <a href=""><img className='w-32' src={imgAppStore} alt="Link para baixar o aplicativo IOS" /></a>
                                                </div>

                                            </div>

                                            <img className='w-3/4' src={imgMockupMobile} alt="" />
                                        </section>

                                        <section id='funcionalidades' className='my-32 w-3/4 m-auto' >
                                            <Subtitle centered>
                                                FUNCIONALIDADES
                                            </Subtitle>
                                            <p className='text-center mt-4 mb-24 w-auto'>Passe o mouse por cima dos titulos e veja nossas principais funcionalidades. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat perspiciatis ducimus modi. </p>

                                            <div className='container__funcionalidades-grid'>
                                                <div>
                                                    <CardFuncionalidades
                                                        title={'Postagem de Materiais'}
                                                        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid'}

                                                    />

                                                    <CardFuncionalidades
                                                        title={'Agenda'}
                                                        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid'}

                                                    />

                                                    <CardFuncionalidades
                                                        title={'Método Pomodoro'}
                                                        text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid'}

                                                    />

                                                </div>


                                                <img src="" alt="Print das funcionalidades" />

                                            </div>
                                        </section>

                
                                    </main>
                                    <footer >
                                        <div className='bg-[#820AD1] py-4'>
                                            <h3 className='font-semibold text-xl text-white text-center my-8'>O que está esperando para se cadastrar??</h3>
                                            <InputPurple
                                                typeInput={'email'}
                                                placeholderInput={'logus@study.com'}
                                                typeBtn={'submit'}
                                                valueBtn={'Obtenha o Lógus grátis'}

                                                btnBgColor='white'
                                                btnTextColor='#830AD1'
                                                inputBorder='1px solid #E3E3E3'
                                                placeholderColor='white'

                                            />
                                        </div>

                                        <div className='bg-[#533680] text-white h-40'>
                                            footer

                                        </div>
                                    </footer>
                                </div>

                            </>
                        )}
                    </div>
                </header>
            </div>
        </>
    );
}
