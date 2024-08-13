import AuthContext from '../context/AuthProvider';
import { useContext } from 'react';
import { Forbidden } from '../pages/Forbidden';


export default function PrivateRouteWithCRole({ children }) {
    const { auth } = useContext(AuthContext)

    if (auth.rol !== "ciudadano") {
        return <Forbidden/>
    } else {
        return children
    }
}