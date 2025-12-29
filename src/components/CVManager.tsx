import { useEffect, useState } from 'react';
import CVPreview from './CVPreview';
import { useToast } from '@/hooks/use-toast';
import { downloadCV } from '@/utils/downloadCV'; // ✅ ADD THIS

export default function CVManager() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleCVPreview = () => {
      setIsPreviewOpen(true);
    };

    const handleCVDownload = () => {
      toast({
        title: "CV Download",
        description: "CV download functionality would be implemented here with PDF generation library like jsPDF or Puppeteer.",
      });
    };

    window.addEventListener('openCVPreview', handleCVPreview);
    //window.addEventListener('downloadCV', handleCVDownload);
    window.removeEventListener('downloadCV', handleCVDownload);

    return () => {
      window.removeEventListener('openCVPreview', handleCVPreview);
      window.removeEventListener('downloadCV', handleCVDownload);
    };
  }, [toast]);

  // ✅ FIXED: now actually downloads PDF
  const handleDownload = () => {
    downloadCV();
  };

  return (
    <CVPreview 
      isOpen={isPreviewOpen} 
      onClose={() => setIsPreviewOpen(false)}
      onDownload={handleDownload}
    />
  );
}