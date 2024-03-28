import { useEffect } from "react";
import axios from 'axios';

const Batch = () => {
   
    useEffect (()=> {
        axios.get('/api/admin/batches')
        .then(res=> console.log(res.data.data[0].trainees))
        .catch(console.log("Error in fetching "));
    }, [])

    return (

        <>
          <div className="flex-1 m-10" >
          <h1 className="pt-5 pl-5 pr-10 font-extrabold text-3xl font-serif">This is Batch Details</h1>

          </div>
        </>
      );
  };
  
  export default Batch;
  