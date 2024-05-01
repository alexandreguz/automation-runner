"use client";
import React from 'react';

const Output = ({ output, testStatus }) => {
  return ( <>
          {testStatus === "success" ?
            <div>
                <div>{output.message}</div>
                <div>{output.result}</div>
                <div>{output.number}</div>
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