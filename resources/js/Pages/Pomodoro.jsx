import AuthenticatedLayoutPomodoro from '@/Layouts/AuthenticatedLayoutPomodoro';
import { Head } from '@inertiajs/react';


export default function Dashboard({ auth }) {
    return (
       
            <div>
                <AuthenticatedLayoutPomodoro
                    user={auth.user}
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Método Pomodoro</h2>}
                >
                    <Head title="Método Pomodoro" />
                </AuthenticatedLayoutPomodoro>
                
            </div>


    );
}