import React, { useEffect, useState } from 'react';

const TourPackages = () => {
    const [tourData,setTourData] = useState();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch("/tourPackages.json")
        .then((res)=> res.json())
        .then((data)=>{
            setTourData(data);
            setLoading(false);
        })
        .catch((error) => console.log("Error fetching data:", error));
    },[])
    console.log(tourData);
    if (loading) return <p>Loading tour packages...</p>;
    
    return (
        <div
        className="w-full sm:w-[80%] lg:w-[60%] h-[350px] relative overflow-hidden group cursor-pointer rounded-md">

        {/*  image  */}
        <img
            src="https://img.freepik.com/free-photo/close-up-adorable-kitten-couch_23-2150782439.jpg?t=st=1728056952~exp=1728060552~hmac=6c6249502066e36b15e7d040c623af0bc46dd1dbda0274440f8a8de2b85288ca&w=360"
            alt="animated_card"
            className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"/>

        {/*  text  */}
        <div
            className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
            <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">domestic
                cat</h1>
            <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry.</p>
            <button
                className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                Details
            </button>
        </div>

        {/*  bottom shadow  */}
        <div
            className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
    </div>
    );
};

export default TourPackages;