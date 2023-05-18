import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Navbar(){
    const router = useRouter()
    const hello=()=>{
        // alert('hell')
        const action =confirm('go?')
        console.log(action)
        if(action){
            router.push('/login')
        }
        else{
            router.back()
        }
        // router.push('/login')
    }
    return(
        <nav className='bg-black text-white p-4 flex flex-row gap-5 fixed left-0 right-0'>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>
                <Link href="/login">Login</Link>
            </div>
            <div>
                <button className='bg-red-400 p-4'
                onClick={hello}>ok</button>
            </div>

      </nav>

    )

}