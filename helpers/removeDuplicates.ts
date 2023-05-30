import { JSONResponse, ObjectItem, Scene } from '../types/types';

function removeDuplicates(response: JSONResponse): { cleanedResponse: JSONResponse; objectDuplicates: ObjectItem[]; sceneDuplicates: Scene[] } {
  const cleanedResponse: JSONResponse = { ...response };
  const objectDuplicates: ObjectItem[] = [];
  const sceneDuplicates: Scene[] = [];

  // Remove duplicate objects
  const objectKeys: Set<string> = new Set();
  cleanedResponse.versions.forEach((version) => {
    const uniqueObjects: ObjectItem[] = [];
    const duplicateObjects: ObjectItem[] = [];
    version.objects.forEach((object) => {
      if (!objectKeys.has(object.key)) {
        objectKeys.add(object.key);
        uniqueObjects.push(object);
      } else {
        duplicateObjects.push(object);
      }
    });
    version.objects = uniqueObjects;
    objectDuplicates.push(...duplicateObjects);
  });

  // Remove duplicate scenes
  const sceneKeys: Set<string> = new Set();
  cleanedResponse.versions.forEach((version) => {
    const uniqueScenes: Scene[] = [];
    const duplicateScenes: Scene[] = [];
    version.scenes.forEach((scene) => {
      if (!sceneKeys.has(scene.key)) {
        sceneKeys.add(scene.key);
        uniqueScenes.push(scene);
      } else {
        duplicateScenes.push(scene);
      }
    });
    version.scenes = uniqueScenes;
    sceneDuplicates.push(...duplicateScenes);
  });

  return { cleanedResponse, objectDuplicates, sceneDuplicates };
}

export default removeDuplicates;