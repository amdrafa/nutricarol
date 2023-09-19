import moment from 'moment'
import React, { useEffect, useRef } from 'react';
import provaSocial1 from '../assets/prova-social-01.jfif';
import provaSocial2 from '../assets/prova-social-02.jfif';
import provaSocial3 from '../assets/prova-social-03.png';
import provaSocial4 from '../assets/prova-social-04.png';
import provaSocial5 from '../assets/prova-social-05.png';
import provaSocial6 from '../assets/prova-social-06.png';

interface IResultsProps {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

export function Result({ setSteps }: IResultsProps) {

    const imageContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (imageContainerRef.current) {
            const images = imageContainerRef.current.querySelectorAll('.carousel-item');
            let currentPosition = 0;
            let animationFrame: number;

            const animateScroll = () => {
                currentPosition += 0.6; // Ajuste a velocidade da rolagem
                imageContainerRef.current!.scrollLeft = currentPosition;

                if (currentPosition >= images[0].clientWidth * images.length) {
                    currentPosition = 0;
                }

                animationFrame = requestAnimationFrame(animateScroll);
            };

            animationFrame = requestAnimationFrame(animateScroll);

            return () => {
                cancelAnimationFrame(animationFrame);
            };
        }
    }, []);

    return (

        <div>
            <div className='text-center text-lg mb-2 bg-red-600 p-1'>
                <span className=' font-bold'>Consultoria gratúita</span> disponível apenas até dia {moment().format("DD/MM/YYYY")}
            </div>




            <div className='flex flex-col items-center'>
                {/* <div className='flex flex-col text-2xl items-center'>
                    <img width={120} src={sobrepeso} alt="dr Carol" />
                    <span className='text-2xl text-center bg-yellow-500 p-1 mb-8 font-bold rounded-lg mt-2'>Você está com <span className='text-red-500'>sobrepeso </span>grave.</span>
                </div> */}

                {/* <div>
                    <span className='text-xl text-center  p-1 mb-3  rounded-lg mt-2'>Nossos casos de sucesso:</span>
                </div> */}
                <div>
                    <div className="flex justify-center my-4 mb-8 space-x-4 overflow-x-hidden relative" ref={imageContainerRef}>
                        <div className="absolute top-0 bottom-0 left-0 w-2  "></div>
                        <div className="flex transition-transform duration-500 transform space-x-6">
                            {Array.from({ length: 2 }, (_, index) => (
                                <React.Fragment key={index}>
                                    <img className="carousel-item w-52 h-56 object-cover" src={provaSocial1} alt="Prova Social" />
                                    <img className="carousel-item w-52 h-56 object-cover" src={provaSocial2} alt="Prova Social" />
                                    <img className="carousel-item w-52 h-56 object-cover" src={provaSocial3} alt="Prova Social" />
                                    <img className="carousel-item w-52 h-56 object-cover" src={provaSocial4} alt="Prova Social" />
                                    <img className="carousel-item w-52 h-56 object-cover" src={provaSocial5} alt="Prova Social" />
                                    <img className="carousel-item w-52 h-56 object-cover" src={provaSocial6} alt="Prova Social" />
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="absolute top-0 bottom-0 right-0 w-2 bg-gradient-to-l from-white"></div>
                    </div>
                </div>




                <div className='text-2xl text-center mb-10 '>
                    Segundo nossos calculos você <span className='bg-lime-600 font-bold'>emagrecerá 17 kilos</span> até dia {moment().add(14, 'days').format("DD/MM/YYYY")}.
                </div>

                {/* <div className=' text-center text-2xl space-y-6 mb-10'>
                    Neste ponto a gordura na <span className='font-bold bg-red-600 p-0.5'>região abdominal</span> pode aumentar ainda mais.

                    <div>Porém podemos resolver isso com um protocolo <span className='font-bold bg-lime-600 p-0.5'>personalizado.</span></div>
                </div> */}


                <div className='text-2xl mb-14'>
                    <div>🙋‍♀️ Coach</div>
                    <div>👩‍⚕ Nutricionista</div>
                    <div>🏋‍♀ Personal</div>
                    <div>🧘‍♀ Psicóloga</div>

                </div>

                <div className='text-4xl text-center mb-16'>
                    <div className='mb-6'>De: <span className='bg-red-600 font-bold'>R̶$̶7̶9̶7̶,̶0̶0̶</span></div>
                    <div className='mb-6'>Por: <span className='bg-lime-600 font-bold'>R$29,90</span></div>
                    <span className='text-2xl'>(Taxa de manutenção)</span>
                </div>
            </div>

            <div className="mb-10">
                <button onClick={() => {
                    setSteps(2)
                }} className="bg-lime-600 w-full text-2xl font-bold animate-pulse-scale">
                    Para <span className='bg-red-500'>ENTRAR AGORA</span>, é necessário apenas pagar taxa de manutenção do sistema <span className='bg-red-500'>(R$29,90)</span>
                </button>
            </div>

            {/* <div className='flex justify-center text-center text-3xl font-bold mb-10'>
                <h2>Seu objetivo é perder quantos quilos?</h2>
            </div>

            <section className='flex flex-col space-y-4 mb-6'>
                <div onClick={() => setSteps(3)} className='flex justify-center items-center h-12 bg-green-600 rounded-lg'>
                    <span className='text-xl font-bold'>5-10 quilos</span>
                </div>
                <div onClick={() => setSteps(3)} className='flex justify-center items-center h-12 bg-yellow-600 rounded-lg'>
                    <span className='text-xl font-bold'>10-15 quilos</span>
                </div>
                <div onClick={() => setSteps(3)} className='flex justify-center items-center h-12 bg-red-600 rounded-lg'>
                    <span className='text-xl font-bold'>15-50 quilos</span>
                </div>
            </section> */}


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