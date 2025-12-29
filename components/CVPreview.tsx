import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

interface CVPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export default function CVPreview({
  isOpen,
  onClose,
  onDownload
}: CVPreviewProps) {
  const docId = import.meta.env.VITE_GOOGLE_DOC_ID;

  if (!docId) {
    console.error("VITE_GOOGLE_DOC_ID is missing");
    return null;
  }

  const previewUrl = `https://docs.google.com/document/d/${docId}/preview`;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="bg-transparent border-b">
          <div className="flex">
            <Button onClick={onClose} variant="ghost" size="sm">
              <X className="w-4 h-4" />
            </Button>
          </div>
          
        {/* Google Docs Preview */}
        <iframe
          src={previewUrl}
          title="Resume Preview"
          className="w-full h-full border-none"
        />
      </DialogContent>
    </Dialog>
  );
}