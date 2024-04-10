import React from 'react';
import img1 from '../../../public/client-1.png'
import img2 from '../../../public/client.png'
import img3 from '../../../public/client-3.png'

const Addition = () => {
    return (
        <div className=' py-5'>
            <div className="flex justify-center  bg-blue-300 p-4">
                <div className="flex flex-col justify-center items-center ">
                    <div className="text-white text-3xl font-medium">Our Successful Students</div>
                    <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">

                        <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">

                            <div className="flex flex-col md:flex-row items-center justify-center  ">
                                <div className="  items-center justify-center flex py-2">
                                    <div className="flex flex-col  items-center justify-center text-center">
                                        <img src={img1}  alt="" className="w-40 rounded-full"/>
                                        <div className="text-stone-600 font-medium m-2">
                                            Clarionet Provides most clear and step by step guideline to be a professional music artist</div>
                                        <div className="font-bold">Kabir Shing</div>
                                        <div className="text-cyan-600 italic">
                                            <a href="#">Aquastic artist, Khelaghor Band</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">

                            <div className="flex flex-col md:flex-row items-center justify-center  ">
                                <div className="  items-center justify-center flex py-2">
                                    <div className="flex flex-col  items-center justify-center text-center">
                                        <img src={img2} alt="" className="w-40 rounded-full"/>
                                        <div className="text-stone-600 font-medium m-2">
                                           Their guitar lessons are toooo good. It helps to grow from totally beginner to professional.</div>
                                        <div className="font-bold">Jessie</div>
                                        <div className="text-cyan-600 italic">
                                            <a href="#">Guitarist, ChainDrinker Band</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">

                            <div className="flex flex-col md:flex-row items-center justify-center  ">
                                <div className="  items-center justify-center flex py-2">
                                    <div className="flex flex-col  items-center justify-center text-center">
                                        <img src={img3} alt="" className="w-40 rounded-full"/>
                                        <div className="text-stone-600 font-medium m-2">
                                        Clarionet is an outstanding music training platform that offers exceptional lesson. </div>
                                        <div className="font-bold">Abul Vai</div>
                                        <div className="text-cyan-600 italic">
                                            <a href="#">Drummer , Pagla Band</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addition;
