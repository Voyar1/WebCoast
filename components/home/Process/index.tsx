import Block from "@/components/home/Process/Block";

const Process = () => {
  return (
    <div className="mt-20 flex w-full justify-center px-[160px]">
      <div className="flex">
        <Block
          title="Wykonamy ponadczasowy projekt"
          technologies="UX / UI"
          description="Wygląd strony będzie zachwycajacy zarówno dla Ciebie jak i Twoich klientów. Łącząc Twoją wizję oraz najnowsze standardy stworzymy wysokiej jakości witrynę cieszący oko na każdym urządzeniu."
        />
        <Block
          title="Stworzymy niezawodną stronę"
          technologies="NEXT.JS | DJANGO | WORDPRESS"
          description="Wykorzystanie nowoczesnych technologii jest niezbędne, aby zapewnić najwyższy poziom wydajności oraz bezpieczeństwa strony. Korzystając z naszego repertuaru narzędzi, Twoja strona posiądzie każdą z tych cech."
        />
        <Block
          title="Zrealizujemy kampanię, która przyniesie wyniki"
          technologies="META ADS & SEO"
          description="W dzisiejszych czasach social media kreują kto tak naprawdę jest rozpoznawalny w biznesie. Z nami osiągniesz ponadprzeciętne wyniki i uzyskasz dostęp do nowych klientów."
        />
      </div>
    </div>
  );
};

export default Process;
