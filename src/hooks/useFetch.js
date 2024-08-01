import { useEffect, useState } from "react"
import axios from "axios"

const useFetch=(endpint)=>{
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)

  const fetchData = async()=>{
    try {
      setLoading(true)
      const response = await axios.get(endpint)
      setLoading(false)
      setData(response.data.results)
      console.log("response", response.data.results);
    } catch (error) {
      console.log("error", error);
      
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

  return {data, loading}
}

export default useFetch;