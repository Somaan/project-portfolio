// The Download CV buttons in Hero and Contact are disabled until an updated
// CV is added; to re-enable them, turn them back into links to CV_PATH.
export const CV_PATH = "/documents/Somaan_Mirza_CV.pdf";
export const CV_FILENAME = "Somaan_Mirza_CV.pdf";

export const EMAIL = "somaanm02@gmail.com";
export const GITHUB_URL = "https://github.com/Somaan";
export const LINKEDIN_URL = "https://linkedin.com/in/somaan-mirza";

// Open a URL in a new tab without giving it access to this window.
export const openExternal = (url) => {
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};
