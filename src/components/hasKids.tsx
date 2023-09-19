import drCarol from '../assets/drcarol-p.png';
import moment from 'moment'
interface IHasKidsProps {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

export function HasKids({ setSteps }: IHasKidsProps) {

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
                <h2>Você já foi mãe?</h2>
            </div>

            <section className='flex flex-col space-y-4 mb-6'>
                <div onClick={() => setSteps(5)} className='flex justify-center items-center h-12 bg-green-600 rounded-lg'>
                    <span className='text-xl font-bold'>Sim</span>
                </div>
                <div onClick={() => {
                    setSteps(5)
                    scrollToTop()
                }} className='flex justify-center items-center h-12 bg-red-600 rounded-lg'>
                    <span className='text-xl font-bold'>Não</span>
                </div>
            </section>


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