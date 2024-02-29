import { DragonIcon } from "@/ui/icons";
import { MaxWidthWrapper } from "@/ui/max-width-wrapper";
import { TypographyH3 } from "@/ui/typo-h1";
import Link from "next/link";

export function Footer() {
  return (
    <MaxWidthWrapper className={`max-w-screen-xl h-[12rem] md:h-16`}>
      <div
        className={`mt-3 logo flex flex-col md:flex-row items-center justify-between`}
      >
        <TypographyH3>Created By - Mobasir Sarkar</TypographyH3>
        <Link href="mailto:Mobasirsarkar3@gmail.com" target="_blank">
          <TypographyH3>Email - Mobasirsarkar3@gmail.com</TypographyH3>
        </Link>
        <div className={`md:hidden mt-2`}>
          <DragonIcon />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
