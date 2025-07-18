import Avatar from "../../../assets/images/AvatarMaker.png";


const Resume = () => {
    return (
        <>
            <div className="h-[500px] w-[100%] flex justify-center items-center border-b border-t border-[gray] ">
                <div className="h-[100%] w-[80%] flex">
                    <div className="h-[100%] w-[50%] flex justify-center items-center">
                        <div className="h-[350px] w-[350px] rounded-[50%] bg-[gray]  flex justify-center items-center  shadow-[10px_10px_20px_black]">
                            <img src={Avatar} alt="" className="h-[320px] w-[320px] rounded-[50%] " />
                        </div>
                    </div>
                    <div className="h-[100%] w-[50%] flex justify-center items-center text-white flex-col">
                        <div>
                            <h1 className="px-[30px] py-[10px] text-5xl font-bold  font-strait text-[rgba(210,210,210,1)]">
                                Piyush Kumar
                            </h1>
                            <div className="px-[30px] py-[10px] text-[rgba(160,160,160,1)]">
                                I’m a focused and motivated person who likes to get things done. I stay calm under pressure and enjoy solving problems. I work well with others and believe in always learning and improving. I like taking on challenges and doing my best in everything I do.
                            </div>
                        </div>
                        <div className="flex flex-row my-[20px]">
                            <a href="">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[purple] mx-[10px] cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.484 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </div>
                            </a>
                            <a href="">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[purple] mx-[10px] cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[500px] w-[100%]  mt-[20px] border-b border-[gray] ">
                <div className="px-[30px] py-[10px] text-5xl font-bold flex justify-center font-strait text-[rgba(210,210,210,1)]">Education</div>
                <div className="h-[100%] w-[100%] ">
                    <div className="h-[80%] w-[100%] mt-[20px] flex">
                        <div className="text-white text-3xl h-[90%] w-[50%] border-r border-[gray] flex flex-col ">
                            <div className=" self-end mt-[70px] mx-[10px]">
                                <div className="h-[40px] w-[250px] text-xl rounded-[50px] flex justify-center items-center px-[20px] border-[2px] border-[purple]">2022</div>
                            </div>
                            <div className="self-end mt-[70px] mx-[10px]">
                                <div className="h-[40px] w-[250px] text-xl rounded-[50px] flex justify-center items-center px-[20px] border-[2px] border-[purple]">2023 - Ongoing</div>
                            </div>

                        </div>
                        <div className="text-white text-3xl  h-[90%] w-[50%] border-l border-[gray]  flex flex-col ">

                            <div className="self-start mt-[50px] mx-[10px]">
                                <div>High School</div>
                                <div className="text-xl text-[gray]">Kendriya Vidayalaya Andrews Ganj </div>
                            </div>
                            <div className="self-start mt-[50px] mx-[10px]">
                                <div>Graduation</div>
                                <div className="text-xl text-[gray]">Bhagwaan Parshuram Institute of Technology</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[300px] w-[100%]  mt-[20px] border-b border-[gray] ">
                <div className="px-[30px] py-[10px] text-5xl font-bold flex justify-center font-strait text-[rgba(210,210,210,1)]">Skills</div>
                <div className="h-[70%] w-[100%] flex justify-center">
                    <div className="h-[100%] w-[60%] flex flex-wrap justify-center my-[20px]">
                        <div className=" mr-[10px] text-white bg-[purple] h-[40px] w-[120px] rounded-[25px] flex justify-center items-center text-xl">C/C++</div>
                        <div className=" mr-[10px] text-white bg-[purple] h-[40px] w-[120px] rounded-[25px] flex justify-center items-center text-xl">HTML</div>
                        <div className=" mr-[10px] text-white bg-[purple] h-[40px] w-[120px] rounded-[25px] flex justify-center items-center text-xl">CSS</div>
                        <div className=" mr-[10px] text-white bg-[purple] h-[40px] w-[120px] rounded-[25px] flex justify-center items-center text-xl">JavaScript</div>
                        <div className=" mr-[10px] text-white bg-[purple] h-[40px] w-[120px] rounded-[25px] flex justify-center items-center text-xl">ReactJS</div>
                        <div className=" mr-[10px] text-white bg-[purple] h-[40px] w-[120px] rounded-[25px] flex justify-center items-center text-xl">TypeScript</div>
                        <div className=" mr-[10px] text-white bg-[purple] h-[40px] w-[120px] rounded-[25px] flex justify-center items-center text-xl">ReactTS</div>
                        <div className=" mr-[10px] text-white bg-[purple] h-[40px] w-[120px] rounded-[25px] flex justify-center items-center text-xl">ShedCN</div>
                        <div className=" mr-[10px] text-white bg-[purple] h-[40px] w-[120px] rounded-[25px] flex justify-center items-center text-xl">Zod</div>
                        <div className=" mr-[10px] text-white bg-[purple] h-[40px] w-[120px] rounded-[25px] flex justify-center items-center text-xl">MongoDB</div>
                        <div className=" mr-[10px] text-white bg-[purple] h-[40px] w-[120px] rounded-[25px] flex justify-center items-center text-xl">MySQL</div>
                        <div className=" mr-[10px] text-white bg-[purple] h-[40px] w-[120px] rounded-[25px] flex justify-center items-center text-xl">TailWind</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resume;