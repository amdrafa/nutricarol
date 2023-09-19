import drCarol from '../assets/drcarol-p.png';
import moment from 'moment';
interface IProblemsProps {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

export function Problems({ setSteps }: IProblemsProps) {

    const scrollToTop = () => {
        window.scrollTo(0, 0); // Defina a posição do scroll para o topo da página
    };

    return (
        <div>
            <div className='text-center text-lg mb-5 bg-red-600 p-1'>
                <span className=' font-bold'>Consultoria gratúita</span> disponível apenas até dia {moment().format("DD/MM/YYYY")}
            </div>
            <div className='flex flex-col items-center space-y-2 mb-4'>
                <img width={90} src={drCarol} alt="dr Carol" />
                <span className='text-xl'>Dr. Carol</span>
            </div>

            <div className='flex justify-center text-center text-3xl font-bold mb-10'>
                <h2>Quais desses problemas você sente?</h2>
            </div>

            <section className='flex flex-col space-y-4 mb-8'>
                <div className='flex items-center'>
                    <input type='checkbox' className='form-checkbox h-5 w-5  mr-2' />
                    <span className='text-2xl mr-2'>Metabolismo lento</span>
                </div>
                <div className='flex items-center'>
                    <input type='checkbox' className='form-checkbox h-5 w-5 text-green-500 mr-2' />
                    <span className='text-2xl mr-2'>Insônia</span>
                </div>
                <div className='flex items-center'>
                    <input type='checkbox' className='form-checkbox h-5 w-5 text-green-500 mr-2' />
                    <span className='text-2xl mr-2'>Baixa autoestima</span>
                </div>
                <div className='flex items-center'>
                    <input type='checkbox' className='form-checkbox h-5 w-5 text-green-500 mr-2' />
                    <span className='text-2xl mr-2'>Ansiedade</span>
                </div>
                <div className='flex items-center'>
                    <input type='checkbox' className='form-checkbox h-5 w-5 text-green-500 mr-2' />
                    <span className='text-2xl mr-2'>Compulsão alimentar</span>
                </div>
                <div className='flex items-center'>
                    <input type='checkbox' className='form-checkbox h-5 w-5 text-green-500 mr-2' />
                    <span className='text-2xl mr-2'>Procrastinação</span>
                </div>
            </section>

            <div className="mb-10 ">
                <button onClick={() => {
                    setSteps(4)
                    scrollToTop()
                }} className="bg-green-600 w-full text-xl font-bold animate-pulse-scale">
                    Enviar
                </button>
            </div>

            <footer className=" py-4 text-white text-center">
                <div className="container mx-auto">
                    <p className="text-2xl font-bold">

                        © {new Date().getFullYear()} <span className='text-green-500'>Todos os direitos</span> reservados.
                    </p>
                    <p className="text-sm mt-1">
                        Este conteúdo é protegido por direitos autorais. Qualquer reprodução total ou parcial sem autorização é considerada plágio e pode estar sujeita a ações legais.
                    </p>
                </div>
            </footer>
        </div>
    )
}