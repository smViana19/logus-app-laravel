import { Link, Head } from '@inertiajs/react';
import '../../css/Welcome.css'
import ContainerPrintApp from '@/Components/ContainerPrintApp';
import Subtitle from '@/Components/Subtitle';
import InputPurple from '@/Components/InputPurple';
import CardTitle from '@/Components/CardTitle';

import CardPlanos from '@/Components/CardPlanos';
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
                        
                                                                    <img src="../../../img/mockp-home-mobile" alt="" />
                                                                </section>
                        
                        
                        
                                                                <section className='mt-32 w-3/4 m-auto' >
                                                                    <Subtitle centered>
                                                                        FUNCIONALIDADES
                                                                    </Subtitle>
                                                                    <p className='text-center mt-4 mb-24 w-auto'>Passe o mouse por cima dos titulos e veja nossas principais funcionalidades. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat perspiciatis ducimus modi. </p>
                        
                                                                    <div className='container__funcionalidades-grid'>
                                                                        <div>
                        
                                                                            <div className='card-funcionalidades onhover px-4 py-2 mb-8'>
                                                                                <CardTitle>Compartilhe resumos</CardTitle>
                                                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid.</p>
                                                                            </div>
                        
                                                                            <div className='card-funcionalidades px-4 py-2 mb-8'>
                                                                                <CardTitle>Agenda</CardTitle>
                                                                                <p className='opacity-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid.</p>
                                                                            </div>
                                                                            <div className='card-funcionalidades px-4 py-2 mb-8'>
                                                                                <CardTitle>Método Pomodoro</CardTitle>
                                                                                <p className='opacity-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid.</p>
                                                                            </div>
                        
                                                                        </div>
                        
                        
                                                                        <img src="" alt="Print das funcionalidades" />
                        
                                                                    </div>
                                                                </section>
                        
                                                                <section className='mb-32'>
                                                                    <Subtitle centered>PLANOS</Subtitle>
                                                                    <p className='text-center mb-24'>Escolha o plano perfeito para você</p>
                                                                    <div className='grid grid-cols-3 w-4/5 m-auto gap-10'>
                                                                        <CardPlanos
                                                                            namePlan={'Free'}
                                                                            preco={'R$ 0'}
                                                                            paraQuem={'ldsfasdfasdfasdfasdfasdLorem ipsum dolor sit amet, consectetur adipiscing elit. '}
                                                                            funcionalidade1={'primeira funcionalidade'}
                                                                            funcionalidade2={'segunda funcionalidade'}
                                                                            funcionalidade3={'terceira funcionalidade'}
                                                                        />
                                                                        <CardPlanos
                                                                            backgroundColor="#820AD1"
                                                                            color='white'
                                                                            buttonBackgroundColor='white'
                                                                            buttonColor='#009379'
                                                                            btnBorder='1px solid #009379'
                                                                            namePlan={'Premium'}
                                                                            preco={'R$ 9,90'}
                                                                            paraQuem={'O plano perfeito para estudantes que querem experimentar ao máximo seus estudos'}
                                                                            funcionalidade1={'primeira funcionalidade'}
                                                                            funcionalidade2={'segunda funcionalidade'}
                                                                            funcionalidade3={'terceira funcionalidade'}
                                                                        />
                                                                        <CardPlanos
                                                                            namePlan={'Empresarial'}
                                                                            preco={'R$ 120,00'}
                                                                            paraQuem={'O plano ideial para empresas, principalmente escolas e facultades, de médio e grande porte'}
                                                                            funcionalidade1={'primeira funcionalidade'}
                                                                            funcionalidade2={'segunda funcionalidade'}
                                                                            funcionalidade3={'terceira funcionalidade'}
                                                                        />
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

                                            <img src="../../../img/mockp-home-mobile" alt="" />
                                        </section>



                                        <section className='mt-32 w-3/4 m-auto' >
                                            <Subtitle centered>
                                                FUNCIONALIDADES
                                            </Subtitle>
                                            <p className='text-center mt-4 mb-24 w-auto'>Passe o mouse por cima dos titulos e veja nossas principais funcionalidades. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat perspiciatis ducimus modi. </p>

                                            <div className='container__funcionalidades-grid'>
                                                <div>

                                                    <div className='card-funcionalidades onhover px-4 py-2 mb-8'>
                                                        <CardTitle>Compartilhe resumos</CardTitle>
                                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid.</p>
                                                    </div>

                                                    <div className='card-funcionalidades px-4 py-2 mb-8'>
                                                        <CardTitle>Agenda</CardTitle>
                                                        <p className='opacity-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid.</p>
                                                    </div>
                                                    <div className='card-funcionalidades px-4 py-2 mb-8'>
                                                        <CardTitle>Método Pomodoro</CardTitle>
                                                        <p className='opacity-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quia ullam deserunt laboriosam velit voluptate, ut vero rerum cum ipsa aliquam totam consequatur obcaecati aspernatur aperiam facere blanditiis, repellat aliquid.</p>
                                                    </div>

                                                </div>


                                                <img src="" alt="Print das funcionalidades" />

                                            </div>
                                        </section>

                                        <section className='mb-32'>
                                            <Subtitle centered>PLANOS</Subtitle>
                                            <p className='text-center mb-24'>Escolha o plano perfeito para você</p>
                                            <div className='grid grid-cols-3 w-4/5 m-auto gap-10'>
                                                <CardPlanos
                                                    namePlan={'Free'}
                                                    preco={'R$ 0'}
                                                    paraQuem={'ldsfasdfasdfasdfasdfasdLorem ipsum dolor sit amet, consectetur adipiscing elit. '}
                                                    funcionalidade1={'primeira funcionalidade'}
                                                    funcionalidade2={'segunda funcionalidade'}
                                                    funcionalidade3={'terceira funcionalidade'}
                                                />
                                                <CardPlanos
                                                    backgroundColor="#820AD1"
                                                    color='white'
                                                    buttonBackgroundColor='white'
                                                    buttonColor='#009379'
                                                    btnBorder='1px solid #009379'
                                                    namePlan={'Premium'}
                                                    preco={'R$ 9,90'}
                                                    paraQuem={'O plano perfeito para estudantes que querem experimentar ao máximo seus estudos'}
                                                    funcionalidade1={'primeira funcionalidade'}
                                                    funcionalidade2={'segunda funcionalidade'}
                                                    funcionalidade3={'terceira funcionalidade'}
                                                />
                                                <CardPlanos
                                                    namePlan={'Empresarial'}
                                                    preco={'R$ 120,00'}
                                                    paraQuem={'O plano ideial para empresas, principalmente escolas e facultades, de médio e grande porte'}
                                                    funcionalidade1={'primeira funcionalidade'}
                                                    funcionalidade2={'segunda funcionalidade'}
                                                    funcionalidade3={'terceira funcionalidade'}
                                                />
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
