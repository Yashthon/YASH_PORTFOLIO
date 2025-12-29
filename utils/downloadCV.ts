export function downloadCV() {
    const docId = '1pub0f8Quntb2KP_oh9UQRYRE2ivn1ARDVd33c4OUW8s';//import.meta.env.VITE_GOOGLE_DOC_ID;
  
    if (!docId) {
      console.error("VITE_GOOGLE_DOC_ID is missing");
      return;
    }
  
    const pdfUrl = `https://docs.google.com/document/d/${docId}/export?format=pdf`;
  
    window.open(pdfUrl, "_blank");
  }