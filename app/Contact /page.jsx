"use client"
import { Navbar } from "../Navbar/Navbar"
import { useState } from "react"

const Contact = () =>{

    

    const [name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[body, setBody] = useState("")

    const handleChange = (event) =>{
setName(event.target.value);
    }
    
    return(
        <div>
            
            <form className="">
                <input 
                type="text"
                onChange={handleChange}
                value ={name}
                >

                </input>

            </form>
            
        </div>
    )
}

export default Contact;