import React from "react";
import SignaturePad from "../components/signature/signature-pad";
import { MaxWidthWrapper } from "@/ui/max-width-wrapper";
import { TypographyH1 } from "@/ui/typo-h1";

export default function MainContent() {
  return (
    <MaxWidthWrapper className={`max-w-screen-xl h-screen`}>
      <div className={`mt-4 h-[75%] md:h-[87%] flex flex-col`}>
        <div className={`text-center mb-3 mt-3 md:mb-0 md:mt-0`}>
          <TypographyH1>{`Draw Your Signature`}</TypographyH1>
        </div>
        <SignaturePad />
      </div>
    </MaxWidthWrapper>
  );
}
