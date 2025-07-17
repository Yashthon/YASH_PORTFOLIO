import { useEffect, useState } from 'react';
import CVPreview from './CVPreview';
import { useToast } from '@/hooks/use-toast';

export default function CVManager() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleCVPreview = () => {
      setIsPreviewOpen(true);
    };

    const handleCVDownload = () => {
      // In a real implementation, this would generate and download a PDF
      // For now, we'll show a toast notification
      toast({
        title: "CV Download",
        description: "CV download functionality would be implemented here with PDF generation library like jsPDF or Puppeteer.",
      });
    };

    window.addEventListener('openCVPreview', handleCVPreview);
    window.addEventListener('downloadCV', handleCVDownload);

    return () => {
      window.removeEventListener('openCVPreview', handleCVPreview);
      window.removeEventListener('downloadCV', handleCVDownload);
    };
  }, [toast]);

  const handleDownload = () => {
    // Simulate PDF generation and download
    const element = document.querySelector('.cv-content');
    if (element) {
      // In a real implementation, you would use a library like html2pdf.js or jsPDF
      // For demonstration, we'll show a toast
      toast({
        title: "Downloading CV",
        description: "Your CV is being prepared for download. In a real implementation, this would generate a PDF file.",
      });
    }
  };

  return (
    <CVPreview 
      isOpen={isPreviewOpen} 
      onClose={() => setIsPreviewOpen(false)}
      onDownload={handleDownload}
    />
  );
}