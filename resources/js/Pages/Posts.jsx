import AuthenticatedLayoutPost from '@/Layouts/AuthenticatedLayoutPost';
import { Head } from '@inertiajs/react';
import '../../css/Dashboard.css'


export default function Dashboard({ auth }) {
    return (
       
            <div>
                <AuthenticatedLayoutPost
                    user={auth.user}
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tela Principal</h2>}
                >
                    <Head title="Tela Principal" />
                </AuthenticatedLayoutPost>
                
            </div>


    );
}