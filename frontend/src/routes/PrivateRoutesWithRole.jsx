import AuthContext from '../context/AuthProvider';
import { useContext } from 'react';
import { Forbidden } from '../pages/Forbidden';


export default function PrivateRouteWithRole({ children }) {
    const { auth } = useContext(AuthContext)

    if ("administrador" === auth.rol) {
        return <Forbidden/>
    } else {
        return children
    }
}