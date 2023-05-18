import {useRouter} from 'next/router'
export default function ProductDetail(){
    //React hooks
    const router=useRouter()
    console.log(router)
    return (
        <div>
            ProductDetail
            {router.query.id}
        </div>
    )
}