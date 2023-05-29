"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeDuplicates(response) {
    const cleanedResponse = Object.assign({}, response);
    // Remove duplicate objects
    const objectKeys = new Set();
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
    const sceneKeys = new Set();
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
exports.default = removeDuplicates;
//# sourceMappingURL=removeDuplicates.js.map