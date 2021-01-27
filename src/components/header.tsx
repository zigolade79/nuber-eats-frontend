import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useMe } from "../hooks/useMe";
import nuberLogo from "../images/logo.svg";


export const Header:React.FC = ()=>{
    const {data} = useMe();
    return (
    <header className=" py-4">
        <div className="w-full px-5 xlg:px-0 max-w-screen-xl bg-yellow-500 mx-auto flex justify-between items-center">
        <img src={nuberLogo} className="w-25 " /> 
        <span className="text-xs">
            <Link to="/my-profile">
                <FontAwesomeIcon icon ={faUser} className="text-xl"/>
            </Link>
        </span>
        </div>
        </header>);
}