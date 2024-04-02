import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Adicionando a nova cor roxoPrincipal com o código de cor 533680
                roxoPrincipal: '#5A1B8D',
                // Adicione mais cores conforme necessário
                corPrincipal: '#B4ADEA',
                corFundo: '#820AD1',
            },
        },
    },

    plugins: [forms],
};
