const videoElement: HTMLVideoElement | null = document.querySelector("video");
const pipButton: HTMLElement | null = document.getElementById("pipButton");

//checking whether browser support pip
if (videoElement && "pictureInPictureEnabled" in document) {
  pipButton?.addEventListener("click", enterToPip);

  async function enterToPip() {
    try {
      // requesting for pip
      await videoElement?.requestPictureInPicture();
    } catch (error) {
      console.error("Error PiP:", error);
    }
  }
} else {
  console.error("PiP is not supported in this browser.");
  pipButton!.style.display = "none";
}
