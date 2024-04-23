import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import CardTarefa from '@/Components/CardsOrContainers/CardTarefa';
import ContainerTarefa from '@/Components/CardsOrContainers/ContainerTarefa';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [OpenModalCreateTask, setOpenModalCreateTask] = useState(false)

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

                                <NavLink
                                    borderPage={currentRoute === '/pomodoro' ? '1px solid black' : 'none'}
                                    href={route('pomodoro')} active={route().current('pomodoro')}>
                                    Método Pomodoro
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
            <main className='bg-white pb-24 flex justify-center'>
            <aside className='float-left'>
                    <div className='border p-2 rounded-lg flex flex-col w-48'>
                        <span className='text-base pb-2'>Tempo de foco hoje</span>
                        <span className='text-[#5A1B8D] font-semibold text-2xl'>0 min</span>
                    </div>
                    <div className= 'border p-2 rounded-lg flex flex-col w-48'>
                        <span>Tarefas</span>
                        <img src="" alt="" />
                    </div>

                    <div className= 'border p-2 rounded-lg flex flex-col w-48 h-32'>
                        <span>Estatísticas</span>

                    </div>

                    <div className= 'border p-2 rounded-lg flex flex-col w-48'>
                        <span>Papel de parede</span>
                    </div>
                </aside>
                <div className='w-6/12'>
                    <button className='bg-[#F0F1F5] rounded-xl  py-1 px-8 mt-4'>Selecione uma tarefa</button>

                    <div>
                        Cronometro
                    </div>
                </div>

                <aside>
                    <h2 className='text-xl font-semibold text-center my-8'>Tarefas à fazer</h2>
                    <ContainerTarefa />
                    <ContainerTarefa />
                    <ContainerTarefa />

                </aside>

                
            </main>



        </div>
    );
}
