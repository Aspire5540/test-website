export default function LoginPage(){
    return (
        <div className="h-full bg-gray-500 flex justify-center items-center">
            <div className="bg-white shadow-2xl p-4 rounded-2xl w-1/2">
                {/* <div > */}
                    <div className="mb-4">
                        <div>Email</div>
                        <div>
                            <input className="bg-gray-300 border border-gray-500 w-full p-2 rounded-lg mt-4"/>
                        </div>
                    </div>
                    <div>
                        <div>Password</div>
                        <div>
                            <input type="password" className="bg-gray-300 border border-gray-500 w-full p-2 rounded-lg mt-4"/>
                        </div>
                    </div> 
                    <div className="mt-8">
                        <button className="bg-gray-800 text-white font-bold w-full py-4 rounded-lg  shodow-lg">Login</button>
                    </div>
            
                {/* </div> */}
            </div>
        </div>
        
    )
}