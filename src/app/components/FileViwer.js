"use client";

import React, { useState, useEffect } from 'react';

const FileViewer = () => {
  const [fileData, setFileData] = useState('');

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const response = await fetch("/api/fileReader");
        const data = await response.text();
        setFileData(data);
      } catch (error) {
        console.error('Erro ao obter dados do arquivo:', error);
      }
    };

    fetchFileData();
  }, []);

  return (
    <div>
      <pre>{fileData}</pre>
    </div>
  );
};

export default FileViewer;