const useClass = () => {
    const {user} = useContext(AuthContext)
    const {refetch,data: clas = [] } = useQuery({
        queryKey: [ 'class',user?.email],
        queryFn: async () => {
            const res = await fetch(`https://clarionet-server-side.vercel.app/class?email=${user?.email}`)
            return res.json()
        }
    })
return [clas,refetch]
}
export default useClass;
