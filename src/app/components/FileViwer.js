"use client";

import React, { useState, useEffect } from 'react';
import Output from './Output';

const FileViewer = () => {
  const [fileData, setFileData] = useState('');
  const [testStatus, setTestStatus] = useState("");

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const response = await fetch("/api/fileReader");
        const data = await response.json();
        setFileData(data)
        setTestStatus("success");

      } catch (error) {
        console.error('Error Getting Data From File:', error);
      }
    };

    fetchFileData();
  }, []);

  return (
    <div>
      {<Output output={fileData}  testStatus={testStatus}/>}
    </div>
  );
};

export default FileViewer;