import FinalCheckout from "@/components/sections/Checkout/FinalCheckout"
import MainImage from "@/components/sections/Checkout/MainImage"
import Pros from "@/layouts/Pros"
const page = () => {
    return (
      <div className="main__container">
        <MainImage/>
        <FinalCheckout/>
        <Pros/>
      </div>
    )
  }
  
  export default page