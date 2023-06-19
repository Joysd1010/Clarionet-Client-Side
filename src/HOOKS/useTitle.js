import { useEffect } from "react"

const useTitle =(title)=>{
    useEffect(()=>{
        document.title=`${title} | Clarionet`
    },[title])
}
export default useTitle