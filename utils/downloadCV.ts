export function downloadCV() {
    const docId = import.meta.env.VITE_GOOGLE_DOC_ID;
  
    if (!docId) {
      console.error("VITE_GOOGLE_DOC_ID is missing");
      return;
    }
  
    const pdfUrl = `https://docs.google.com/document/d/${docId}/export?format=pdf`;
  
    window.open(pdfUrl, "_blank");
  }