"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeDuplicates(response) {
    const cleanedResponse = Object.assign({}, response);
    const objectDuplicates = [];
    const sceneDuplicates = [];
    // Remove duplicate objects
    const objectKeys = new Set();
    cleanedResponse.versions.forEach((version) => {
        const uniqueObjects = [];
        const duplicateObjects = [];
        version.objects.forEach((object) => {
            if (!objectKeys.has(object.key)) {
                objectKeys.add(object.key);
                uniqueObjects.push(object);
            }
            else {
                duplicateObjects.push(object);
            }
        });
        version.objects = uniqueObjects;
        objectDuplicates.push(...duplicateObjects);
    });
    // Remove duplicate scenes
    const sceneKeys = new Set();
    cleanedResponse.versions.forEach((version) => {
        const uniqueScenes = [];
        const duplicateScenes = [];
        version.scenes.forEach((scene) => {
            if (!sceneKeys.has(scene.key)) {
                sceneKeys.add(scene.key);
                uniqueScenes.push(scene);
            }
            else {
                duplicateScenes.push(scene);
            }
        });
        version.scenes = uniqueScenes;
        sceneDuplicates.push(...duplicateScenes);
    });
    return { cleanedResponse, objectDuplicates, sceneDuplicates };
}
exports.default = removeDuplicates;
