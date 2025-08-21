function LoginPage() {
  return (
    <>
        <div className= "flex h-screen w-screen items-center justify-center bg-[#B4B4B8]">
            <div className="w-3xl h-120 bg-[#597445] rounded-2xl text-center p-7 shadow-2xl">
                <span className="text-3xl text-[#B4B4B8] font-bold">Sign up</span>
                <div className="flex flex-col items-start m-10">
                    <div className="flex felx-col justify-center mb-10 h-10">
                        <input type="text" className="bg-gray-400 rounded-sm w-60 p-1" />
                        <span className="ml-10 text-[#B4B4B8] text-xl">Username</span>
                    </div>
                    <div className="flex felx-col justify-center h-10">
                        <input type="text" className="bg-gray-400 rounded-sm w-60 p-1" />
                        <span className="ml-10 text-[#B4B4B8] text-xl">Password</span>
                    </div>
                    
                </div>
                
            </div> 
        </div>
    </>
    );
}

export default LoginPage;