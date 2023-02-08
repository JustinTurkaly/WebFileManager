import React, { useState, useEffect } from 'react';
import FileTree from './FileTree'
import FilePreviewController from './FilePreviewController'
import Papa from 'papaparse';

const App = () => {

  const [selectedFile, setSelectedFile] = useState("");

  const explorer={
    name: "CustomerFiles",
    isFolder: true,
    items: [
      {
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
        },
        {
          name: "PathPlanning",
          isFolder: true,
          items: [
            {
              name: "buildfile.csv",
              isFolder: false,
              items: []
            },
            {
              name: "part_out_test2.csv",
              isFolder: false,
              items: []
            },
            {
              name: "part_test2.csv",
              isFolder: false,
              items: []
            },
            {
              name: "part.csv",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          name: "Scan",
          isFolder: true,
          items: [
            {
              name: "rsi1way_c1r1_state.log",
              isFolder: false,
              items: []
            },
            {
              name: "scan_mesh.ply",
              isFolder: false,
              items: []
            },
            {
              name: "scanner_c1r1.log",
              isFolder: false,
              items: []
            },
            {
              name: "zmetric.json",
              isFolder: false,
              items: []
            }
          ]
        }
        ]
      }
      ]
    },
    {
      name: "CustomerB",
      isFolder: true,
      items: [
        {
          name: "Stiffener",
          isFolder: true,
          items: [
            {
              name: "CAD",
              isFolder: true,
              items: [
                {
                  name: "CustomerB_CAD.stl",
                  isFolder: false,
                  items: []
                }
              ]
            },
            {
              name: "PathPlanning",
              isFolder: true,
              items: [
                {
                  name: "hat_out.csv",
                  isFolder: false,
                  items: []
                },
                {
                  name: "hat.csv",
                  isFolder: false,
                  items: []
                }
              ]
            },
            {
              name: "Scan",
              isFolder: true,
              items: []
            }
          ]
        }
      ]
    }
    ]
  }

  return (
    <div style={{display: 'flex'}}>
      <div style={{border: '1px solid black', width: '18vw', height: '95vh'}}>
    <FileTree explorer={explorer} setSelectedFile={setSelectedFile}/>
    </div>
    <FilePreviewController selectedFile={selectedFile}/>
    </div>
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