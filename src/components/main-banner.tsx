import React, { useRef, useEffect } from 'react';
// import drCarol from '../assets/drcarol-p.png';
import provaSocial1 from '../assets/prova-social-01.jfif';
import provaSocial2 from '../assets/prova-social-02.jfif';
import provaSocial3 from '../assets/prova-social-03.png';
import provaSocial4 from '../assets/prova-social-04.png';
import provaSocial5 from '../assets/prova-social-05.png';
import provaSocial6 from '../assets/prova-social-06.png';
// import uruguai from '../assets/uruguai.png';
// import certificate from '../assets/certificate-2.jpg';
// import google from '../assets/goog.png';
// import anvisa from '../assets/anvisa.png';

interface IMainBannerProps {
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

export function MainBanner({ setSteps }: IMainBannerProps) {
    const imageContainerRef = useRef<HTMLDivElement | null>(null);

    const scrollToTop = () => {
        window.scrollTo(0, 0); // Defina a posição do scroll para o topo da página
    };

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
            <div className="mb-6">
                <h2 className="text-white text-3xl text-center  font-bold">
                    GARANTIMOS NO <span className="text-yellow-300 ">MÍNIMO -12 KILOS</span> EM{' '}
                    <span className="text-green-500 font-bold">21 DIAS OU MENOS </span>
                </h2>

            </div>
            <h1 className="text-white text-2xl text-center mb-4">
                Você ganhou uma <span className="text-white bg-lime-600 font-bold p-0.5">CONSULTORIA GRÁTIS!</span>
            </h1>
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

            <div className="mb-10">
                <button onClick={() => {
                    setSteps(2)
                    scrollToTop()
                }} className="bg-green-600 w-full text-xl font-bold animate-pulse-scale">
                    CALCULAR <span className='text-yellow-200'>PRAZO</span> DE EMAGRECIMENTO
                </button>
            </div>

            {/* <div className='flex items-center space-x-6 mb-6'>
                <img width={120} src={google} alt="goog" />
                <img width={55} src={anvisa} alt="anvi" />
            </div> */}

            {/* <div className='flex items-center justify-between mt-4 space-x-2 mb-8'>
                <div className='flex flex-col items-center space-y-2'>
                    <img width={90} src={drCarol} alt="dr Carol" />
                    <span className='text-xl font-bold'>Dr. Carol</span>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className="text-white text-2xl text-center">
                        MÉDICA PREMIADA
                        <span className="text-blue-400 font-bold"><div className='flex items-center space-x-1 justify-center'>
                            <span>NO URUGUAI</span> <img width={40} src={uruguai} alt="Uruguai flag" /></div></span>
                    </h2>
                    <div className='flex items-center p-2'>

                        <img width={120} src={certificate} alt="Certificado" />

                    </div>
                </div>
            </div> */}

            {/* 
            <div className="my-4 mb-10 space-y-1 flex flex-col justify-center">
                <div className='text-xl font-semibold'><span className='text-blue-300'>+ (bônus)</span> COACH</div>
                <div className='text-xl font-semibold'><span className='text-blue-400'>+ (bônus)</span> PSICÓLOGA</div>
                <div className='text-xl font-semibold'><span className='text-blue-500'>+ (bônus)</span> NUTRICIONISTA</div>
            </div> */}



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
    );
}
