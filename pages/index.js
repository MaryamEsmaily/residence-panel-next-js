import MapIcon from "@com-icons/MapIcon";
import LandingLayout from "@com-layouts/LandingLayout";
import AdvertisesMapSection from "@com-pages/Home/AdvertisesMapSection";
import AdvertisesSection from "@com-pages/Home/AdvertisesSection";
import FiltersSection from "@com-pages/Home/FiltersSection";
import { useSelector } from "react-redux";

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
