import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Agenda({ auth, laravelVersion, phpVersion }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Agenda</h2>}
        >
            <Head title="Agenda" />

            <div className="py-12">
               
            </div>
        </AuthenticatedLayout>
    );
}