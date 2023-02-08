import React, { useState, useEffect } from 'react';
import Urls from './UrlStorage'

const DownloadController = ({ selectedFile }) => {
  const [downloadURL, setDownloadURL] = useState('');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadURL;
    link.download = selectedFile;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  useEffect(() => {
    if (selectedFile.length > 1) {
      let url = Urls[selectedFile]
      fetch(url)
        .then(response => {
          setDownloadURL(response.url);
        })
        .catch(error => console.error(error));
    }
  }, [selectedFile]);

  return (
    <div>
      <button onClick={handleDownload} disabled={selectedFile.length === 0}>
        {selectedFile.length === 0 ? "No file selected" : "Download"}
      </button>
    </div>
  );
};


export default DownloadController;