import axios from "axios";
import { createContext, useState } from "react";

const ReportsContext = createContext();

const ReportsProvider = ({ children }) => {
    const [reports, setReports] = useState([]);
    const [alert, setAlert] = useState({});

    const handleGetReports = async () => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/reportes`;
            const token = localStorage.getItem('token');
            const options = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.get(url, options);
            setReports(response.data);
        } catch (error) {
            console.log(error.response.data);
            setAlert({ message: error.response.data.msg, exito: false });
        }
    }

    const handleDeleteReport = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/reporte/${id}`;
            const options = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.delete(url, options);
            setReports(
                reports.filter((report) => {
                    return report._id !== id;
                })
            );
            setAlert({ message: response.data.msg, exito: true });
            setTimeout(() => {
                setAlert({});
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateReport = async (id, form) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/reporte/${id}`;
            const token = localStorage.getItem('token');
            const options = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            await axios.put(url, form, options);
            handleGetReportsByCitizen(reports.ciudadano._id);
        } catch (error) {
            setAlert({ message: error.response.data.msg, exito: false });
        }
    }

    const handleGetReport = async (id) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/reporte/${id}`;
            const token = localStorage.getItem('token');
            const options = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.get(url, options);
            setReports(response.data);
        } catch (error) {
            setAlert({ message: error.response.data.msg, exito: false });
        }
    }

    const handleGetReportsByCitizen = async (id) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/reportes/${id}`;
            const token = localStorage.getItem('token');
            const options = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.get(url, options);
            setReports(response.data);
        } catch (error) {
            setAlert({ message: error.response.data.msg, exito: false });
        }
    }

    return (
        <ReportsContext.Provider
            value={{
                reports,
                alert,
                handleGetReports,
                handleDeleteReport,
                handleUpdateReport,
                handleGetReport,
                handleGetReportsByCitizen,
            }}
        >
            {children}
        </ReportsContext.Provider>
    )
};

export { ReportsProvider };
export default ReportsContext;