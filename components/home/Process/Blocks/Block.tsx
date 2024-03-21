import Image from "next/image";

const Block = ({
  title,
  technologies,
  description,
  icon,
}: {
  title: string;
  technologies: string;
  description: string;
  icon: any;
}) => {
  return (
    <div className="ml-[20px] h-[450px] w-[360px] rounded-[15px] bg-red-500 bg-[linear-gradient(133deg,_#FE68DE,_#FE68DE_45%,_#B18CFD)] p-[25px] font-sairaCondensed shadow-[0px_3px_8px_rgba(0,0,0,0.24)] first:ml-0">
      <div className="flex justify-center">
        <Image
          priority
          src={icon}
          alt="Follow us on Twitter"
          className="h-[100px] w-[100px]"
        />
      </div>
      <div className="text-center text-[20px] font-bold text-white">
        {title}
      </div>
      <div className="mt-[30px] text-center text-[24px] font-bold text-white">
        {technologies}
      </div>
      <div className="mt-[30px] text-justify text-[16px] text-white">
        {description}
      </div>
    </div>
  );
};

export default Block;
