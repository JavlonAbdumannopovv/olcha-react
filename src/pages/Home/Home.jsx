import React from "react";
import {
  Triple,
  Popular,
  CatalogVideo,
  CatalogBig,
  CatalogOffers,
} from "../../components/index";
import { useSelector } from "react-redux";
function Home() {
  const data = useSelector((state) => state.home);
  return (
    <main id="Home">
      <Triple data={data.triple.tripleOne} />
      <div id="Popular" className="container">
        <Popular data={data.data[2]} width="288" />
      </div>
      <CatalogVideo />
      <Triple data={data.triple.tripleTwo} />
      {/* Mavsumiy */}
      <CatalogBig data={data.data[12]} />
      {/* Maishiy texnika */}
      <CatalogOffers data={data.data[3]} />
      {/* Go`zallik va salomatlik */}
      <CatalogBig data={data.data[6]} />
      {/* Geymerlar */}
      <CatalogOffers data={data.data[11]} />
      {/* NOTE - Special offers */}
      {/* Kiyimlar 9*/}
      <CatalogBig data={data.data[9]} />
      {/* Kitoblar 10*/}
      <CatalogOffers data={data.data[10]} />
      {/* TV 0*/}
      <CatalogBig data={data.data[0]} />
      {/* Sport 5*/}
      <CatalogOffers data={data.data[5]} />
      {/* Oshxona 4*/}
      <CatalogBig data={data.data[4]} />
      {/* Avto 7*/}
      <CatalogOffers data={data.data[7]} />
      {/* Qurilish 8*/}
      <CatalogBig data={data.data[8]} />
    </main>
  );
}

export default Home;
