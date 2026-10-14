export const CV_PATH = "/documents/Somaan_Mirza_CV.pdf";
export const CV_FILENAME = "Somaan_Mirza_CV.pdf";

// Open a URL in a new tab without giving it access to this window.
export const openExternal = (url) => {
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};
