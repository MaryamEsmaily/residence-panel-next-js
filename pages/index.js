import MapIcon from "@com-icons/MapIcon";
import LandingLayout from "@com-layouts/LandingLayout";
import AdvertisesSection from "@com-pages/Home/AdvertisesSection";
import FiltersSection from "@com-pages/Home/FiltersSection";

function Home() {
  return (
    <div className="mt-4 relative">
      <FiltersSection />
      <AdvertisesSection />
      <div className="sticky bottom-9 text-center z-20">
        <button className="bg-black text-white px-6 py-4 rounded-full text-sm transition ease-in hover:scale-105 duration-150">
          <div className="flex gap-1">
            <MapIcon />
            <div>نمایش نقشه</div>
          </div>
        </button>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
