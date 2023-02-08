import React, { useState, useEffect } from 'react';
import FileTree from './FileTree'
import Papa from 'papaparse';

const App = () => {
  const [data, setData] = useState([]);
  let url = "https://storage.googleapis.com/file-manager-hw/web_hw_files/CustomerA/Flange/PathPlanning/buildfile.csv"
  useEffect(() => {
    Papa.parse(url, {
      download: true,
      header: true,
          complete: results => {
            console.log(results.data)
            setData(results.data.slice(0, 41))

          }
      // rest of config ...
    })
  }, []);

  const explorer={
    name: "CustomerA",
    isFolder: true,
    items: [{
      name: "Flange",
      isFolder: true,
      items: [
        {
        name: "CAD",
        isFolder: true,
        items: [
          {
            name: "original_CAD.stl",
            isFolder: false,
            items: []
          },
          {
            name: "Prepped_CAD.step",
            isFolder: false,
            items: []
          }
        ]
      }
      ]
    }
    ]
  }

  return (
    <FileTree explorer={explorer}/>
    // data.length &&
    // <div>
    // <div>{JSON.stringify(Object.keys(data[0]))}</div>
    // <div>{JSON.stringify(Object.values(data[1]))}</div>
    // </div>
  //   data.length ?
  //   (<table style={{borderCollapse: 'collapse'}}>
  //     <thead>
  //     <tr>
  //     {Object.keys(data[0]).map((heading, i) => {
  //       return (
  //         <th key={i} style={{border: '1px solid black', padding: 0}}>
  //         <div>{heading}</div>
  //         </th>
  //       )
  //     })}
  //     </tr>
  //     </thead>
  //     <tbody>
  //   {data.map((row, i) => {
  //     return (
  //       <tr key={i}>
  //         {Object.values(data[i]).map((value, i) => {
  //           return (
  //           <td style={{border: '1px solid black', padding: 0}}>{value}</td>
  //           )
  //         })}
  //       </tr>
  //     )
  //   })}
  // </tbody>
  //   </table>)
  //   : null
  );
};


export default App;