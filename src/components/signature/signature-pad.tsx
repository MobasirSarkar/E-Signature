"use client";
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { toPng } from "html-to-image";
import { FigmaOutline, InvertIt } from "@/ui/Button";
import { styles } from "../../styles/styles";
import { MaxWidthWrapper } from "@/ui/max-width-wrapper";
import { DownloadIcon } from "@/ui/download-icon";
import { CleanButton } from "@/ui/Clean-Button";

export default function SignaturePad() {
  const signatureRef = useRef<SignatureCanvas>(null);

  const clearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
  };
  const downloadSignature = () => {
    if (!signatureRef.current?.isEmpty()) {
      const canvas = signatureRef.current?.getCanvas();
      if (canvas) {
        toPng(canvas, { cacheBust: true })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "my-signature.png";
            link.href = dataUrl;
            link.click();
            link.parentNode?.removeChild(link);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      alert("Please draw first");
    }
  };
  return (
    <MaxWidthWrapper className={`max-w-screen-xl`}>
      <div className={`${styles.signPadDiv}`}>
        <div className={`${styles.canvasContainer}`}>
          <SignatureCanvas
            ref={signatureRef}
            canvasProps={{
              className: styles.canvas,
            }}
          />
        </div>
        <div className={`${styles.canvasButton}`}>
          <CleanButton onClick={clearSignature}>{`Clear`}</CleanButton>
          <DownloadIcon onClick={downloadSignature}>{`Save`}</DownloadIcon>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
