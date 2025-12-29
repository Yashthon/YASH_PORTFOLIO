export function downloadCV() {
  const docId = '1pub0f8Quntb2KP_oh9UQRYRE2ivn1ARDVd33c4OUW8s';//import.meta.env.VITE_GOOGLE_DOC_ID;

  if (!docId) {
    alert("Google Doc ID is missing");
    return;
  }

  const pdfUrl = `https://docs.google.com/document/d/${docId}/export?format=pdf`;

  // Force browser download
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.target = "_blank";
  link.download = "Yash_Prajapati_CV.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}