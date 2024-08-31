import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const Footer = () => {


  return (

    <div>

    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

    <div>

     <Link to='/'> <img src={assets.logo} className="mb-5 w-32" alt="" /> </Link> 
     <p className="w-full md:w-2/3 text-gray-600">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, doloribus? Officia corrupti odit aliquam praesentium.
     </p>

    </div>  

    <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
        </ul>
    </div>

    <div>

        <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">

        <li>+88017*******5</li>
        <li>example@gmail.com</li>

        </ul>


    </div>


      
    </div>

    <div>

     <hr />

     <p className="py-5 text-sm text-center">© Copyright @murad00. All Rights Reserved 2024</p>

    </div>

    </div>
  )
}

export default Footer
