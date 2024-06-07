import { useRouter } from "next/navigation";
import { Children, useEffect, useState } from "react"

const ProtectedRoute = ({children: any}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    useEffect(()=>{
        const accessToken = localStorage.getItem('accessToken');
        if(accessToken){
            setIsLoggedIn(true);

        }else{
            router.push('./signin')
        }
    },[]);

    if(!isLoggedIn){
        return null
    }

    return children
    }
export default ProtectedRoute