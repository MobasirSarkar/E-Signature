import Image from "next/image";
import signlogo from "../images/signlogonew.png";

const Logo = () => {
  const logo = signlogo;
  return (
    <div className={`md:w-[200px] md:h-[200px] relative w-[150px] h-[150px]`}>
      <Image src={logo} alt="text" fill />
    </div>
  );
};

export default Logo;
