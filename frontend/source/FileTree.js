import React, { useState, useEffect } from 'react';
function FileTree({ explorer, setSelectedFile }) {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand)
    if (explorer.name.includes(".")) {
      setSelectedFile(explorer.name)
    }
  }

  return (
    <div style={{ margin: '8px' }}>
      <span onClick={handleClick} style={{ cursor: 'pointer', border: '1px solid black', borderRadius: '3px' }}>{explorer.name}
      </span>
      <br />
      <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
        {explorer.items.map((explore) => (
          <FileTree key={explore.name} explorer={explore} setSelectedFile={setSelectedFile} />
        ))}
      </div>
    </div>
  );
}

export default FileTree;