import React, { useEffect, useRef } from "react";
import * as BABYLON from "@babylonjs/core";
import { Engine, Scene, ArcRotateCamera, Mesh, HemisphericLight } from "@babylonjs/core";


const StlPreview = ({ link }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera(
      "Camera",
      Math.PI / 2,
      Math.PI / 2,
      2,
      Mesh.CreateSphere("sphere1", 16, 2, scene),
      scene
    );
    camera.attachControl(canvasRef.current, true);

    const light = new HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);

    BABYLON.SceneLoader.ImportMesh(
      "",
      link,
      "",
      scene,
      (meshes) => {
        scene.createDefaultEnvironment();
        scene.activeCamera = camera;
        engine.runRenderLoop(() => {
          scene.render();
        });
      }
    );

    return () => {
      engine.dispose();
    };
  }, [link]);

  return <canvas ref={canvasRef} />;
};

export default StlPreview;