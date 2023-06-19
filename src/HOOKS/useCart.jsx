import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useCart = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('acces_token'),
        queryFn: async () => {
            const res = await axiosSecure(`/cart?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
        // enabled: !!localStorage.getItem('acces_token'),
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, { headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },
    })

    return [cart, refetch]

}
export default useCart;

