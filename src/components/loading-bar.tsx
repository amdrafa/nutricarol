import { useState, useEffect } from 'react';

function LoadingBar() {
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (loadingProgress < 100) {
                setLoadingProgress(loadingProgress + 1);
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [loadingProgress]);

    return (
        <div className="w-full">
            <div className="bg-gray-200 rounded-lg p-4 shadow-md">
                <p className="text-gray-600 mb-2">Calculando informações...</p>
                <div className="relative w-full h-4 bg-gray-300 rounded">
                    <div
                        className={`h-full bg-green-500 rounded animate-width ${loadingProgress === 100 ? 'animate-fade-out' : 'animate-fade-in'}`}
                        style={{ width: `${loadingProgress}%` }}
                    ></div>
                    <div className="absolute top-0 left-0 text-xs text-white h-full w-full flex items-center justify-center">
                        {loadingProgress}%
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadingBar;
