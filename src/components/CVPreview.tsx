import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CVPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload?: () => void;
}

export default function CVPreview({ isOpen, onClose }: CVPreviewProps) {
  const docId = '1pub0f8Quntb2KP_oh9UQRYRE2ivn1ARDVd33c4OUW8s';

  if (!docId) return null;

  const previewUrl = `https://docs.google.com/document/d/${docId}/preview?rm=minimal`;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-6xl h-[90vh] p-0 overflow-hidden bg-black/90">

        {/* Preview Container */}
        <div className="flex justify-center items-start h-full overflow-auto bg-neutral-800">
          <iframe
            src={previewUrl}
            title="Resume Preview"
            className="border-none"
            style={{
              width: "820px",            // A4 width
              height: "100%",
              transform: "scale(1.25)",  // 🔑 this makes it readable
              transformOrigin: "top center"
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}