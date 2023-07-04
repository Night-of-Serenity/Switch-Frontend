import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div className="flex flex-row items-center justify-center  ">
            <div className="w-full h-screen background-custom2  bg-[url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWppbDdrZzZsa3JiNGt6a3ZvNGQ2bTFuYW1lZmdlbGhrdXFlcHl5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/xT9IgIRD08lu3XX5D2/giphy.gif')] ">
                <div className="bg-[url('/public/bghome.png')] background-custom h-screen">
                    <div className="grid-cols-6 grid">
                        <div></div>
                        <div></div>
                        <div className="col-span-2">
                            <div className="flex  flex-col h-screen">
                                <div className="flex flex-col justify-center items-center ">
                                    <p className="gradiant-bg pt-6">SWITCH</p>
                                    <p className="text-4xl text-pink-600 font-normal ">
                                        Personality
                                    </p>
                                    <p className="text-xl text-center font-light pt-4 ">
                                        Unleash Your Inner Self, Embrace
                                        Anonymity. Where Personality Flourishes,
                                        Unburdened by Identity. Connect
                                        Authentically, Express Freely, and
                                        Discover the True Power of
                                        Self-Expression.
                                    </p>
                                </div>

                                <div>
                                    <div class="wrapper">
                                        <div class="link_wrapper">
                                            <Link to="/guest">
                                                <span
                                                    href="#"
                                                    className="link rounded-full text-center h-20 justify-center text-2xl items-center flex"
                                                >
                                                    Let's enjoy!
                                                </span>

                                                <div class="icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 268.832 268.832"
                                                    >
                                                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
