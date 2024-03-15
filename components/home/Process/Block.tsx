const Block = ({
  title,
  technologies,
  description,
}: {
  title: string;
  technologies: string;
  description: string;
}) => {
  return (
    <div className="ml-[20px] h-[450px] w-[360px] rounded-[15px] bg-red-500 bg-[linear-gradient(133deg,_#FE68DE,_#FE68DE_45%,_#B18CFD)] px-[25px] font-sairaCondensed shadow-[0px_3px_8px_rgba(0,0,0,0.24)] last:mr-0">
      <div className="text-center text-[20px] font-bold text-white">
        {title}
      </div>
      <div className="mt-[30px] text-center text-[24px] font-bold text-white">
        {technologies}
      </div>
      <div className="mt-[30px] text-justify text-[20px] text-white">
        {description}
      </div>
    </div>
  );
};

export default Block;
