import React, { useState, useEffect, useRef } from 'react';
import FilePreview from './FilePreview';
import Urls from './UrlStorage'
import DownloadController from './DownloadController'
import Papa from 'papaparse';



const FilePreviewController = ({ selectedFile }) => {
  const [data, setData] = useState([]);
  const [json, setJson] = useState(null);
  const [log, setLog] = useState('');
  const [rows, setRows] = useState([]);
  const containerRef = useRef(null);

  const fileTypeDecider = (file) => {

    let fileType = file.split(".")[1]
    switch (fileType) {
      case "csv":
        return handleCsvPreview()
        break;
      case "json":
        return handleJsonPreview()
        break;
      case "log":
        return handleLogPreview()
        break;
      default:
        return handleUnsupportedPreview();
        break;
    }
  }

  const handleCsvPreview = () => {

    if (!selectedFile.includes("hat")) {
      let url = Urls[selectedFile] || ""
      Papa.parse(url, {
        download: true,
        header: true,
        complete: results => {
          setData(results.data.slice(0, 41))
        }
      })

      return (
        data.length > 39 ?
          (<table style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {Object.keys(data[0]).map((heading, i) => {
                  return (
                    <th key={i} style={{ border: '1px solid black', padding: 0 }}>
                      <div>{heading}</div>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => {
                return (
                  <tr key={i}>
                    {Object.values(data[i]).map((value, i) => {
                      return (
                        <td style={{ border: '1px solid black', padding: 0 }}>{value}</td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>)
          : null
      )
    } else {
      return (
        <div style={{ textAlign: 'center', marginTop: '1em' }}>
          <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
            Cannot preview image (file size too large)
          </p>
          <DownloadController selectedFile={selectedFile} />
        </div>
      );
    }
  }

  const handleJsonPreview = () => {
    let url = Urls[selectedFile]
    fetch(url)
      .then(response => response.json())
      .then(data => setJson(data))
      .catch(error => console.error(error));

    return (
      <div>
        {json ? JSON.stringify(json) : 'Loading...'}
      </div>
    );
  }

  const handleLogPreview = () => {
    let url = Urls[selectedFile]
    fetch(url)
      .then(response => response.text())
      .then(log => {
        const rows = log.split('\n').slice(1, 41).map(row => row.split(',').map(cell => cell.trim()));
        setRows(rows);
      })
      .catch(error => console.error(error));
    if (!rows) {
      return (<div>...loading</div>)
    } else if (selectedFile === 'scanner_c1r1.log') {
      return (
        <div>File size too big to preview</div>
      )
    } else {
      return (
        <table>
          <thead>
            <tr>
              <th>t</th>
              <th>act_x</th>
              <th>act_y</th>
              <th>act_z</th>
              <th>act_a</th>
              <th>act_b</th>
              <th>act_c</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );

    }
  }

  const handleUnsupportedPreview = () => {
    return (
      <div style={{ textAlign: 'center', marginTop: '1em' }}>
        <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
          Unsupported preview type, download to view
        </p>
        <DownloadController selectedFile={selectedFile} />
      </div>
    );
  }

  const handle3d = () => {

    return (
      <StlPreview link={Urls[selectedFile]} />
    )
  }

  return (
    <FilePreview selectedFile={selectedFile} view={fileTypeDecider} />
  )
};


export default FilePreviewController;