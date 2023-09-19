import drCarol from '../assets/drcarol-p.png';
import moment from 'moment';

interface IWeightAndHeightProps {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

export function WeightAndHeight({ setSteps }: IWeightAndHeightProps) {

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

            {/* <div className='flex justify-center text-center text-2xl mb-10'>
                <span className=''>Oportunidade <span className='bg-green-600 p-0.5 font-bold'>ÚNICA</span> </span>
            </div> */}

            <div className='flex justify-center text-center text-3xl font-bold mb-10'>
                <h2>Qual seu peso e altura?</h2>
            </div>



            <section className='flex flex-col space-y-4 mb-8'>
                <div className='flex flex-col space-y-1 '>
                    <span className='text-xl'>Peso:</span>
                    <input className='rounded-xl h-10 text-gray-800 p-2' type="text" />
                </div>
                <div className='flex flex-col space-y-1 '>
                    <span className='text-xl' >Altura:</span>
                    <input className='rounded-xl h-10 text-gray-800 p-2' type="text" />
                </div>
            </section>

            <div className="mb-10 ">
                <button onClick={() => {
                    setSteps(6)
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