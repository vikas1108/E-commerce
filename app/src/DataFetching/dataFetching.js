 import axios from "axios";
const funnnydata = async () => {
    let data;
     await axios.get('https://dummyjson.com/products/categories').then((res) => {
        
       console.log(res)
       data = res
      }).catch((err) => {
      console.log(err,"during fetching data through axios")
      })
     console.log(data, "data...")
     

    return data;
     
     
    
}


const shoesData = async () => {
  let sneakerData;
  await axios.get("https://dummyjson.com/products/category/mens-shoes").then((res) => {
    console.log(res, "response of shoes category")
    sneakerData = res;
  }).catch((err) => {
    console.log(err,"error")
  })
  return sneakerData;
  
}
   
const MensShoes = shoesData();
const ProductData = funnnydata();
export default {ProductData,MensShoes}