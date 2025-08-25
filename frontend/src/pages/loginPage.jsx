import { useState } from "react";

function LoginPage() {

    const [loginScreen, setLoginScreen] = useState(false);
    
    if (!loginScreen) {
        return (
    <>
        <div className= "flex h-screen w-screen items-center justify-center bg-[#B4B4B8]">
            <div className="w-3xl h-120 bg-[#597445] rounded-2xl text-center p-7 shadow-2xl border-4 border-gray-700">
                <span className="text-3xl text-[#B4B4B8] font-bold">Sign up</span>
                <div className="flex flex-col items-start m-10">
                    <div className="flex felx-col justify-center mb-10 h-10">
                        <input type="text" className="bg-gray-400 rounded-sm w-70 p-1 " />
                        <span className="ml-10 text-[#B4B4B8] text-xl">Username</span>
                    </div>
                    <div className="flex felx-col justify-center h-10">
                        <input type="text" className="bg-gray-400 rounded-sm w-70 p-1" />
                        <span className="ml-10 text-[#B4B4B8] text-xl">Password</span>
                    </div>
                    
                </div>
                <div className="flex flex-row justify-around mt-20">
                    <button className="w-50 h-25 bg-[#B4B4B8] rounded-2xl hover:bg-gray-500 ease-in duration-100">Sign up</button>
                    <button className="w-50 h-25 bg-[#B4B4B8] rounded-2xl hover:bg-gray-500 ease-in duration-100" onClick={() => {
                        setLoginScreen(true);
                    }}>Log in</button>
                </div>
                
            </div> 
        </div>
    </>
    );
    } else {
        return (
    <>
        <div className= "flex h-screen w-screen items-center justify-center bg-[#B4B4B8]">
            <div className="w-3xl h-120 bg-[#597445] rounded-2xl text-center p-7 shadow-2xl border-4 border-gray-700">
                <span className="text-3xl text-[#B4B4B8] font-bold">Log in</span>
                <div className="flex flex-col items-start m-10">
                    <div className="flex felx-col justify-center mb-10 h-10">
                        <input type="text" className="bg-gray-400 rounded-sm w-70 p-1 " />
                        <span className="ml-10 text-[#B4B4B8] text-xl">Username</span>
                    </div>
                    <div className="flex felx-col justify-center h-10">
                        <input type="text" className="bg-gray-400 rounded-sm w-70 p-1" />
                        <span className="ml-10 text-[#B4B4B8] text-xl">Password</span>
                    </div>
                    
                </div>
                <div className="flex flex-row justify-around mt-20">
                    <button className="w-50 h-25 bg-[#B4B4B8] rounded-2xl hover:bg-gray-500 ease-in duration-100" onClick={() => {
                        setLoginScreen(false);
                    }}>Sign up</button>
                    <button className="w-50 h-25 bg-[#B4B4B8] rounded-2xl hover:bg-gray-500 ease-in duration-100">Log in</button>
                </div>
                
            </div> 
        </div>
    </>
    );
    }
  
}

export default LoginPage;