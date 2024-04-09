export default function BtnCriarDoc() {
    return (
        <button
            class="
            
                cursor-pointer
                flex justify-between 
                bg-violet-700 px-3 py-2 
                rounded-full
                text-white 
                tracking-wider 
                shadow-xl 
                hover:bg-violet-900
                hover:scale-105 
                duration-500 
                hover:ring-1 
                w-[150px]
                my-6
                mx-auto"
        >
            Criar
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5  animate-bounce"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
            </svg>
        </button>

    )

}