import AuthenticatedLayoutAgenda from '@/Layouts/AuthenticatedLayoutAgenda';
import { Head } from '@inertiajs/react';
import '../../css/Dashboard.css'


export default function Dashboard({ auth }) {
    return (
       
            <div>
                <AuthenticatedLayoutAgenda
                    user={auth.user}
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tela Principal</h2>}
                >
                    <Head title="Tela Principal" />
                </AuthenticatedLayoutAgenda>
                
            </div>


    );
}