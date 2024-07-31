import {Navigate, Outlet} from "react-router-dom";

const Auth = () => {
    return (
    <main className="min-h-screen flex justify-center w-full" >
        <Outlet />
    </main>)
}
export default Auth;
