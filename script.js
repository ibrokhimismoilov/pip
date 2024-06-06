"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const videoElement = document.querySelector("video");
const pipButton = document.getElementById("pipButton");
//checking whether browser support pip
if (videoElement && "pictureInPictureEnabled" in document) {
  pipButton === null || pipButton === void 0
    ? void 0
    : pipButton.addEventListener("click", enterToPip);
  function enterToPip() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        // requesting for pip
        yield videoElement === null || videoElement === void 0
          ? void 0
          : videoElement.requestPictureInPicture();
      } catch (error) {
        console.error("Error PiP:", error);
      }
    });
  }
} else {
  console.error("PiP is not supported in this browser.");
  pipButton.style.display = "none";
}
