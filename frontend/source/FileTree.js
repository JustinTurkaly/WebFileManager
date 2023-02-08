import React, { useState, useEffect } from 'react';
function FileTree({ explorer }) {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <span onClick={() => setExpand(!expand)}>{explorer.name}</span>
      <br />
      <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
        {explorer.items.map((explore) => (
          <FileTree key={explore.name} explorer={explore} />
        ))}
      </div>
    </div>
  );
}

export default FileTree;