import { useState } from "react";
import { MainBanner } from "../components/main-banner";
import { FirstQuestion } from "../components/first-question";
import { Problems } from "../components/problems";
import { WeightAndHeight } from "../components/weigh-and-height";
import { HasKids } from "../components/hasKids";
import { Calculating } from "../components/calculando";
import { Result } from "../components/result";

export function Home() {

    const [steps, setSteps] = useState(1);

    return (
        <div>
            {
                steps == 1 && (
                    <section className="bg-[url('assets/banner.jpg')] h-full bg-cover bg-center flex flex-col items-center p-6">
                        <MainBanner
                            setSteps={setSteps}
                        />
                    </section>
                )
            }

            {
                steps == 2 && (
                    <section className="bg-[url('assets/banner.jpg')] h-full bg-cover bg-center flex flex-col items-center p-6">
                        <FirstQuestion
                            setSteps={setSteps}
                        />
                    </section>
                )
            }

            {
                steps == 3 && (
                    <section className="bg-[url('assets/banner.jpg')] h-full bg-cover bg-center flex flex-col items-center p-6">
                        <Problems
                            setSteps={setSteps}
                        />
                    </section>
                )
            }

            {
                steps == 4 && (
                    <section className="bg-[url('assets/banner.jpg')] h-full bg-cover bg-center flex flex-col items-center p-6">
                        <HasKids setSteps={setSteps} />
                    </section>
                )
            }

            {
                steps == 5 && (
                    <section className="bg-[url('assets/banner.jpg')] h-full bg-cover bg-center flex flex-col items-center p-6">
                        <WeightAndHeight setSteps={setSteps} />
                    </section>
                )
            }

            {
                steps == 6 && (
                    <section className="bg-[url('assets/banner.jpg')] h-full bg-cover bg-center flex flex-col items-center p-6">
                        <Calculating setSteps={setSteps} />
                    </section>
                )
            }

            {
                steps == 7 && (
                    <section className="bg-[url('assets/banner.jpg')] h-full bg-cover bg-center flex flex-col items-center p-6">
                        <Result setSteps={setSteps} />
                    </section>
                )
            }
        </div>


    )
}