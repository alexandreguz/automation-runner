"use client";
import React from 'react';

const Output = ({ output, testStatus }) => {
  return ( <>
          {testStatus === "success" ?
            <div>
                <div>message: {output.message}</div>
                <div>result: {output.result}</div>
                <div>number: {output.number}</div>
            </div>
            :
            <div className="output-container">
              {output}
            </div>
          }
           </>
      );
}

export default Output;