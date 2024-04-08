import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

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
                                    Tela Principal
                                </NavLink>
                               
                               
                                <NavLink 
                                    borderPage={currentRoute === '/agenda' ? '1px solid black' : 'none'}
                                    href={route('agenda')} active={route().current('agenda')}>
                                    Agenda
                                </NavLink>
                            </div>

                        </div>

                        {/* Restante do código omitido para brevidade */}
                    </div>
                </div>

                {/* Restante do código omitido para brevidade */}
            </nav>

            {/* Restante do código omitido para brevidade */}
        </div>
    );
}
