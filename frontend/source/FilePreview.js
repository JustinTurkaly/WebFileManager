import React, { useState, useEffect } from 'react';
import CsvPreview from './CsvPreview'


const FilePreview = ({selectedFile, view}) => {
  return (
    <div style={{border: '1px solid black', width: '80vw', height: '95vh', marginLeft: '6px'}}>
      {selectedFile.length ? view(selectedFile) : "Select a file to preview"}
    </div>
  )
};


export default FilePreview;