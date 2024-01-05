import { Navbar } from "../Navbar/Navbar";
import Link from "next/link";
const About = () =>{
 
    return(
        
        <div>
            <Navbar h1 ="About Thredle" />

<div className="flex justify-center p-6 shadow-lg">
            <h1 className="text-2xl justify-center">About</h1>
            
            </div>

            <div className="mt-10 py-2  ml-5 w-[90%] h-[400px] rounded-lg shadow-lg">
               <div>
                <p className=" about-description tracking-wide flex justify-center pt-4">
                Welcome to Thredle,
                where your thought take center stage! We're your go-to app for 
                 collecting and showcasing your ideas effortlessly. 
                 With Thredle, inputting and displaying your moments is
                  as simple as a Facebook post. Join us in weaving the threads 
                  of your life's stories!
                </p>
            </div>

         <Link href="/">
            <div className="ml-[3rem] flex">
            <button className=" p-3  mt-8 rounded-lg w-[250px] h-[50px] bg-[#3f37c9] text-white ">Explore</button>
            </div>
</Link>

</div>

        </div>
    )
}

export default About;