import React, { useState, useEffect } from 'react';
import FileTree from './FileTree'
import FilePreviewController from './FilePreviewController'
import DownloadController from './DownloadController'
import explorer from './FileExplorer'


const App = () => {

  const [selectedFile, setSelectedFile] = useState("");



  return (
    <div style={{ display: 'flex' }}>
      <div style={{ border: '1px solid black', width: '18vw', height: '95vh' }}>
        <FileTree explorer={explorer}
          setSelectedFile={setSelectedFile} />
        <div style={{ textAlign: 'center', marginTop: '1em' }}>
          <DownloadController selectedFile={selectedFile} />
        </div>
      </div>
      <FilePreviewController selectedFile={selectedFile} />
    </div>
  );
};


export default App;