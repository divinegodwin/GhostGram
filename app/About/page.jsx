import { Navbar } from "../Navbar/Navbar";
import Link from "next/link";
const About = () =>{
 
    return(
        
        <div>
            <Navbar h1 ="About" />

<div className="about-heading flex justify-center pt-[5rem] py-4 shadow-lg">
            <h1 className="text-2xl justify-center">About</h1>
            
            </div>

            <div className=" about-container py-2  ml-5 w-[90%] h-[480px] rounded-lg shadow-lg">
               <div>
                <p className=" about-description tracking-wide flex justify-center pt-4">
                "Introducing GhostGram – Embrace the freedom of expression without the weight of identity. 
                GhostGram is your sanctuary for anonymous posting, where every word is heard, and every secret
                 finds a voice. Share your thoughts, tell your stories, and connect with others in a realm where
                  anonymity reigns supreme. Join GhostGram and let your words echo in the haunting beauty of the 
                  anonymous realm."
              
                </p>
            </div>

         <Link href="/Posts">
            <div className="ml-[3rem] flex">
            <button className="explore-btn p-3  mt-8 rounded-lg w-[250px] h-[50px] bg-[#3f37c9] text-white ">Explore</button>
            </div>
</Link>

</div>

        </div>
    )
}

export default About;