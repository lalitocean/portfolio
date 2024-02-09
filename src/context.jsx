import React, { createContext, useEffect, useState } from 'react'

const Appcontext = createContext();


// const API = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";
const AppProvider = ({ children }) => {

    // const [users, setUsers] = useState([]);

    // to get the api data 
    // const getServices = async (url) => {
    //     try {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         setUsers(data);
    //         console.log(data);

    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // useEffect(() => {
    //        getServices(API);
    // }, [])

    return <Appcontext.Provider value="lalit sagar">
        {children}
    </Appcontext.Provider>
};
export { Appcontext, AppProvider };