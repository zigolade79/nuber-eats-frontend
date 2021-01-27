import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../components/header";
import { useMe } from "../hooks/useMe";
import { Restaurants } from "../pages/client/restaurants";

const ClientRoutes =[ 
    <Route path="/" exact>
        <Restaurants/>
    </Route>,
];


export const LoggedInRouter = () => {
    const {data, error, loading} = useMe();
    console.log(data);
    if(!data || loading || error){
        return <div className="h-screen flex justify-center items-center ">
            <span className="font-medium text-xl tracking-wide">Loding...</span></div>
    }
    return (
        <BrowserRouter>
           <Header/>
           <Switch>
            {data.me.role === "Client" && ClientRoutes}
            <Redirect to="/"></Redirect>
           </Switch>
        </BrowserRouter>
    );

} 