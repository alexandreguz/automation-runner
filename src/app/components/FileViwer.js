"use client";

import React, { useState, useEffect } from 'react';

const FileViewer = () => {
  const [fileData, setFileData] = useState('OIOIOI');

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const response = await fetch("/api/fileReader");
        const data = await response.text();
        // console.log(data)
        setFileData(data);
        // console.log(fileData)
      } catch (error) {
        console.error('Erro ao obter dados do arquivo:', error);
      }
    };

    fetchFileData();
  }, []);

  return (
    <div>
      <h2>File Viewer</h2>
      <pre>{fileData}</pre>
    </div>
  );
};

export default FileViewer;