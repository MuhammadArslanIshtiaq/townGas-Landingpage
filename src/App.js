import FooterPrimary from "./components/footer/FooterPrimary";
import NavbarPrimary from "./components/navbar/NavbarPrimary";
import Paths from "./Paths";
import { Helmet } from "react-helmet";
import i18next from "i18next";

function App() {
  let cl = i18next.language;
  return (
    <>
      {cl === "ch" ? (
        <Helmet>
          <title>煤氣160周年智慧燃展未來NFT大抽獎</title>
          <meta
            name="description"
            content="踏入160周年, 煤氣公司貫徹「智慧燃展未來」的理念, 推出全港首個公用事業機構的免費NFT計劃, 發行10,000張紀念NFT並舉辦抽獎活動, 送出160份驚喜獎賞。"
          />
          <meta
            name="keywords"
            content="煤氣公司, TGC, 煤氣優惠, 爐具優惠, 煤氣160周年, 煤氣抽獎, 煤氣NFT, 買爐抽獎"
          />
          <meta property="og:site_name" content="煤氣160周年呈獻" />
          <meta
            property="og:title"
            content="煤氣160周年智慧燃展未來NFT大抽獎"
          />
          <meta
            property="og:description"
            content="踏入160周年, 煤氣公司貫徹以「智慧燃展未來」的理念, 推出全港首個公用事業機構的免費NFT計劃, 發行10,000張獨一無二的紀念NFT並舉辦抽獎活動, 送出160份驚喜獎賞, 以回饋市民多年來的支持。"
          />
        </Helmet>
      ) : (
        <Helmet>
          <title>Towngas 160th Anniversary NFT Lucky Draw</title>
          <meta
            name="description"
            content=" Towngas will be the first public utility to debut its free NFT project- “Towngas 160th Anniversary Smart Energy for a Brighter Future NFT Lucky Draw”. "
          />
          <meta
            name="keywords"
            content="Towngas, TGC, Towngas promotion, appliance promotion, Towngas 160, Towngas 160th, Towngas Lucky Draw, Towngas NFT"
          />
          <meta property="og:site_name" content="Towngas 160th Presents" />
          <meta
            property="og:title"
            content=" Towngas 160th Anniversary NFT Lucky Draw "
          />
          <meta
            property="og:description"
            content=" This year, Towngas reaches its 160th anniversary milestone; the company will keep abreast of the times and continue to thrive by the philosophy of 'Smart Energy for a Brighter Future'. In celebration of this significant year, Towngas will be the first public utility among the rest to debut its free NFT project "
          />
        </Helmet>
      )}

      <div className="overflow-hidden">
        <div className="bg-white text-black  mx-auto">
          <NavbarPrimary />
          <div className="flex-1">
            <Paths />
          </div>
          <FooterPrimary />
        </div>
      </div>
    </>
  );
}

export default App;
