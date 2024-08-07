import AuthContext from '../context/AuthProvider';
import { useContext } from 'react';
import { Forbidden } from '../pages/Forbidden';


export default function PrivateRouteWithRole({ children }) {
    const { auth } = useContext(AuthContext)

    if (auth.rol !== "administrador") {
        return <Forbidden/>
    } else {
        return children
    }
}