import Logo from "@/ui/Logo";
import { GithubIcon } from "@/ui/icons";
import { MaxWidthWrapper } from "@/ui/max-width-wrapper";

export function Navbar() {
  return (
    <MaxWidthWrapper className={`max-w-screen-xl`}>
      <nav
        className={`mt-2 h-16 md:h-20 flex shadow items-center justify-between`}
      >
        <Logo />
        <div
          className={`mr-4 hover:-translate-y-1 delay-75 transition-all duration-100`}
        >
          <GithubIcon />
        </div>
      </nav>
    </MaxWidthWrapper>
  );
}
