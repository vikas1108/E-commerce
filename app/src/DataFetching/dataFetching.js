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
const ProductData = funnnydata();
export default ProductData;