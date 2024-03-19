import Block from "@/components/home/Process/Blocks/Block";

import projectIcon from "@/assets/Project.svg";
import developerIcon from "@/assets/Developer.svg";
import adIcon from "@/assets/AD.svg";

const Process = () => {
  return (
    <div className="flex w-full justify-center">
      <div>
        <div className="mb-[30px]">
          <h1 className="text-[32px] font-bold text-black">
            Od zera do Twojej strony...
          </h1>
          <p className="text-[20px]">
            Jak będzie wyglądał proces wytwórczy? Bazujemy na trzech
            fundamentalnych krokach.
          </p>
        </div>
        <div className="mb-[30px] flex">
          <Block
            title="Wykonamy ponadczasowy projekt"
            technologies="UX / UI"
            description="Wygląd strony będzie zachwycajacy zarówno dla Ciebie jak i Twoich klientów. Łącząc Twoją wizję oraz najnowsze standardy stworzymy wysokiej jakości witrynę cieszący oko na każdym urządzeniu."
            icon={projectIcon}
          />
          <Block
            title="Stworzymy niezawodną stronę"
            technologies="NEXT.JS | DJANGO | WORDPRESS"
            description="Wykorzystanie nowoczesnych technologii jest niezbędne, aby zapewnić najwyższy poziom wydajności oraz bezpieczeństwa strony. Korzystając z naszego repertuaru narzędzi, Twoja strona posiądzie każdą z tych cech."
            icon={developerIcon}
          />
          <Block
            title="Zrealizujemy kampanię, która przyniesie wyniki"
            technologies="META ADS & SEO"
            description="W dzisiejszych czasach social media kreują kto tak naprawdę jest rozpoznawalny w biznesie. Z nami osiągniesz ponadprzeciętne wyniki i uzyskasz dostęp do nowych klientów."
            icon={adIcon}
          />
        </div>
        <p className="text-center text-[20px]">
          Jesteś zainteresowany? Potrzebujesz darmowych konsulatacji, aby omówić
          Twój projekt?
        </p>
        <div className="mt-[15px] flex justify-center">
          <span className="cursor-pointer rounded-[15px] bg-[#111111] px-[50px] py-[10px] text-white">
            Skontaktuj się z nami!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Process;
