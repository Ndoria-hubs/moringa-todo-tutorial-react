import React from "react";
import { Link } from "react-router-dom";


const SingleToDo = () => {
    // use Javascript's window.location.pathname to grab the ID
    const pathname = window.location.pathname
    //use split () method to extract the id from the pathname

    // handle a fetch request for the ID that is passed

    console.log(pathname);
    return (
        <div>
            SingleTodo
            <Link to="./">Go back to home</Link>
            <h1>title</h1>
            <p>description</p>
            <p>status: complete or incomplete</p>
            <p>date created</p>
            <>button for editing</>
            <>button for deleting</>
        </div>
    )
}