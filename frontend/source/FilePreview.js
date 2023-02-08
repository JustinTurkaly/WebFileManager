import React, { useState, useEffect } from 'react';

const FilePreview = ({ selectedFile, view }) => {
  return (
    <div style={{ border: '1px solid black', width: '80vw', height: '95vh', marginLeft: '6px', overflowX: "hidden", overflowY: "auto" }}>
      {selectedFile.length ? view(selectedFile) : <div style={{ textAlign: 'center', marginTop: '1em' }}>
        <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
          Select a file to preview
        </p>
      </div>}
    </div>
  )
};


export default FilePreview;