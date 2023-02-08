import React, { useState, useEffect } from 'react';
import FilePreview from './FilePreview';
import Papa from 'papaparse';



const FilePreviewController = ({selectedFile}) => {
  const [data, setData] = useState([]);

  let url = "https://storage.googleapis.com/file-manager-hw/web_hw_files/CustomerA/Flange/PathPlanning/buildfile.csv"
  useEffect(() => {
    Papa.parse(url, {
      download: true,
      header: true,
          complete: results => {
            // console.log(results.data)
            setData(results.data.slice(0, 41))
          }
    })
  }, []);

  // useEffect(() => {
  //   if (selectedFile.length > 1) {
  //     fileTypeDecider(selectedFile)

  //   }
  // }, [selectedFile])

  const fileTypeDecider = (file) => {
    let fileType = file.split(".")[1]
    // console.log(fileType)
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

    // console.log(fileFunctionObj[fileType])
  }

  const handleCsvPreview = () => {

    return (
      data.length ?
    (<table style={{borderCollapse: 'collapse'}}>
      <thead>
      <tr>
      {Object.keys(data[0]).map((heading, i) => {
        return (
          <th key={i} style={{border: '1px solid black', padding: 0}}>
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
            <td style={{border: '1px solid black', padding: 0}}>{value}</td>
            )
          })}
        </tr>
      )
    })}
  </tbody>
    </table>)
    : null
    )
  }

  const handleJsonPreview = () => {
    return (
      <div>in json func</div>
    )
    console.log('in json func' + selectedFile)
  }

  const handleLogPreview = () => {
    console.log('in log fung')
    return (
      <div>in log func</div>
    )
  }

  const handleUnsupportedPreview = () => {
    console.log('inside unsupportd')
    return (
      <div>in unsup func</div>
    )
  }

  return (
    <FilePreview selectedFile={selectedFile} view={fileTypeDecider}/>
  )
};


export default FilePreviewController;