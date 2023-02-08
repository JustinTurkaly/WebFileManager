const explorer = {
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


export default explorer;