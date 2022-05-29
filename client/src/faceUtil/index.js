import * as faceapi from 'face-api.js';
import { model } from 'mongoose';

export async function loadModels(
  setLoadingMessage,
  setLoadingMessageError
) {
  const MODEL_URL = process.env.PUBLIC_URL + '/models';

  try {
    setLoadingMessage('Loading Face Detector');
    await faceapi.loadSsdMobilenetv1Model(MODEL_URL);

    setLoadingMessage('Loading 68 Facial Landmark Detector');
    await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);

    setLoadingMessage('Loading Feature Extractor');
    await faceapi.loadFaceRecognitionModel(MODEL_URL);
  } catch (err) {
    setLoadingMessageError(
      "Couldn't load model."
    );
  }
}

export async function getFullFaceDescription(blob, inputSize = 512) {
  // ssd_mobilenet_v1 options
  let scoreThreshold = 0.8;   //high threshold for strict detection results
  const OPTION = new faceapi.SsdMobilenetv1Options({
    inputSize,
    scoreThreshold,
  });
  const useTinyModel = true;

  // pass image onto api
  let img = await faceapi.fetchImage(blob);

  // detect all faces and generate :
  //--landmarks
  //--face descriptors
  let fullDesc = await faceapi
    .detectAllFaces(img, OPTION)
    .withFaceLandmarks(useTinyModel)
    .withFaceDescriptors();
  return fullDesc;
}

export async function createMatcher(faceProfile, maxDescriptorDistance) {
  // Create labeled descriptors of member from profile
  let labeledDescriptors = faceProfile.map(
    (profile) =>
      new faceapi.LabeledFaceDescriptors(
        profile.student._id,
        profile.facePhotos.map(
          (photo) => new Float32Array(photo.faceDescriptor.match(/-?\d+(?:\.\d+)?/g).map(Number))
        )
      )
  );

  // Create face matcher (maximum descriptor distance is 0.5)
  let faceMatcher = new faceapi.FaceMatcher(
    labeledDescriptors,
    maxDescriptorDistance
  );

  return faceMatcher;
}

export function isFaceDetectionModelLoaded() {
  return !!faceapi.nets.ssdMobilenetv1.params;
}

export function isFeatureExtractionModelLoaded() {
  return !!faceapi.nets.faceRecognitionNet.params;
}

export function isFacialLandmarkDetectionModelLoaded() {
  return !!faceapi.nets.faceLandmark68TinyNet.params;
}