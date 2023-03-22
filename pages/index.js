import LandingLayout from "@com-layouts/LandingLayout";
import AdvertisesSection from "@com-pages/Home/AdvertisesSection";
import FiltersSection from "@com-pages/Home/FiltersSection";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
//
const AdvertisesMapSection = dynamic(
  () => import("@com-pages/Home/AdvertisesMapSection"),
  {
    ssr: false,
  }
);
function Home() {
  const isShowMap = useSelector((state) => state.landingMode.isShowMap);
  return (
    <div className="mt-4 relative">
      <FiltersSection />
      {!isShowMap ? <AdvertisesSection /> : <AdvertisesMapSection />}
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
