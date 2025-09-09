import axios from "axios";
const placeOrder=async(updatedBody)=>{
   await axios.post("http://localhost:5000/api/order/orderRoutes/create",updatedBody);
}

const createPayment=async(req,res)=>{
    try{
        let paymentId="1234455"
         const updatedBody = {
            ...req.body,
            paymentId
        };
await placeOrder(updatedBody)
console.log(updatedBody,"KGJOIGJ")

res.status(200).json({
    message:"Payment done !"
})
    }catch(error){
        console.log(error);
        return res.status(500).json({message: error.message});  
    }
}

export default{
    createPayment
}