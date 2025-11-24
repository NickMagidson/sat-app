'use client';

import TLEInput from "@/components/tle-input";
import { useState } from "react";

interface SingleTleProcessProps {
  tleLines: string[] | null;
  setTleLines: (lines: string[] | null) => void;
}


export default function SingleTleProcess(FC: SingleTleProcessProps) {
  const [tleLines, setTleLines] = useState<string[] | null>(null);
  const [sgp4Result, setSgp4Result] = useState<any>(null);


  return (
    <>
      <div className="w-3/4 mx-auto">
        <TLEInput 
          // tleLines={tleLines} 
          setTleLines={setTleLines} 
          setSgp4Result={setSgp4Result} 
        />
      </div>
    

      <div>
          {tleLines && sgp4Result ? (
            <>
              <strong>Processed TLE Lines:</strong>
              <br />
              Line 1: {tleLines[0]}
              <br />
              Line 2: {tleLines[1]}
              <br /><br />
              <strong>SGP4 Result:</strong>
              {/* <p>{JSON.stringify(sgp4Result)}</p> */}
            </>
          ) : (
            'No TLE lines processed yet.'
          )}
      </div>


    </>
  )
  
}