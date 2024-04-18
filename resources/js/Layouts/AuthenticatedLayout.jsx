import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import BtnCriarDoc from '@/Components/Buttons/BtnCriarDoc';
import Filtros from '@/Components/Filtros';
import CardMaterial from '@/Components/CardsOrContainers/CardMaterial';
import CardStatus from '@/Components/CardsOrContainers/CardStatus';
import '../../css/Dashboard.css'

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    // Obtém a rota atual
    const currentRoute = window.location.pathname;

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">


                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    borderPage={currentRoute === '/' ? '1px solid black' : 'none'}
                                    href={route('dashboard')} active={route().current('dashboard')}>
                                    Dashboard
                                </NavLink>

                                <NavLink
                                    borderPage={currentRoute === '/posts' ? '1px solid black' : 'none'}
                                    href={route('posts')} active={route().current('posts')}>
                                    Área de Postagens {/* fazer dropdown - resumo slide etc */}
                                </NavLink>



                                <NavLink
                                    borderPage={currentRoute === '/agenda' ? '1px solid black' : 'none'}
                                    href={route('agenda')} active={route().current('agenda')}>
                                    Agenda
                                </NavLink>
                            </div>

                        </div>

                        {/* Dropdown para sair da conta */}
                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}


                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Perfil</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Sair
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                    </div>

                </div>
            </nav>
            {/* -------------------------------------------------------------------------- */}
            <main>
            <CardStatus 
                    escola="COTEMIG - Colégio e Faculdade"
                    anoEscolar="3º Ano do Ensino Médio"
                    ocupacao="Estudante"
                    entregues={24}
                    naoEntregues={2}
                    media={98.5}
                    user={{ name: "Sofia Passos" }} //AUTOMATIZAR
                />

                <div className='custum__div-baner h-64 py-8' >
           
                    <p className='
                        text-center 
                        mt-16 
                        text-xl 
                        font-medium
                        text-gray-700'>Crie seu próprio material de estudos</p>
                    <BtnCriarDoc />

                </div>

                <Filtros />

                <div className='mx-16'>
                    <h3 className='w-100 pb-2 mt-16
                    text-gray-700 text-lg font-medium
                    border-b-2 border-gray-300'>Tarefas Pendentes: </h3>

             
                </div>

                <div className='mx-16'>
                    <h3 className='w-100 pb-2 mt-16
                    text-gray-700 text-lg font-medium
                    border-b-2 border-gray-300'>Da sua turma: </h3>

                    <div className='grid grid-cols-4 my-8 gap-4'>
                        <CardMaterial
                            materia={'Matemática'}
                            data={'12/04/24'}
                            anoEscolar={'1º Ano do Ensino Médio'}
                            titulo={'Área e volume de Poligonos e Piramides'}
                            colorSVG={'red'}

                        />

                        <CardMaterial
                            materia={'Português'}
                            data={'12/04/24'}
                            titulo={'Preposições'}
                            colorSVG={'blue'}

                        />

                        <CardMaterial
                            materia={'Biologia'}
                            anoEscolar={'1º Ano do Ensino Médio'}
                            data={'12/04/24'}
                            titulo={'Fungos e bactérias'}
                            colorSVG={'green'}

                        />

                        <CardMaterial
                            materia={'Matemática'}
                            data={'12/04/24'}
                            titulo={'Área e volume de Poligonos e Piramides'}
                            colorSVG={'red'}

                        />


                    </div>


                </div>
            </main>


        </div>
    );
}
