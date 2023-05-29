import { JSONResponse } from '../types/types';
function removeDuplicates(response: JSONResponse): JSONResponse {
  const cleanedResponse: JSONResponse = { ...response };

  // Remove duplicate objects
  const objectKeys: Set<string> = new Set();
  cleanedResponse.versions.forEach((version) => {
    version.objects = version.objects.filter((object) => {
      if (!objectKeys.has(object.key)) {
        objectKeys.add(object.key);
        return true;
      }
      return false;
    });
  });

  // Remove duplicate scenes
  const sceneKeys: Set<string> = new Set();
  cleanedResponse.versions.forEach((version) => {
    version.scenes = version.scenes.filter((scene) => {
      if (!sceneKeys.has(scene.key)) {
        sceneKeys.add(scene.key);
        return true;
      }
      return false;
    });
  });

  return cleanedResponse;
}

export default removeDuplicates;