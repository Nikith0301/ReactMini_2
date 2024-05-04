import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";



export const FeatureFlagsContext=createContext(null);

export default function FeatureFlagGlobalState({ children }) {

const[loading,setLoading]=useState(true)
const[enabledFlags,setenabledFlags]=useState({})

async function fetchFeatureFlag(){
   try{ setLoading(true)
    const response= await featureFlagsDataServiceCall()
    setenabledFlags(response)
    setLoading(false)}
    catch(error){
        console.log(error);
      setLoading(false);
      throw new Error(error);
    }
} 
 
useEffect(()=>{fetchFeatureFlag()},[])

  return (
  <FeatureFlagsContext.Provider value={{enabledFlags,loading}}>
    {children}
    </FeatureFlagsContext.Provider>
  );
}