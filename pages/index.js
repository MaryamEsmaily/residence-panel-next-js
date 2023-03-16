import LandingLayout from "@com-layouts/LandingLayout";
import AdvertisesSection from "@com-pages/Home/AdvertisesSection";
import FiltersSection from "@com-pages/Home/FiltersSection";

function Home() {
  return (
    <div className="pt-4">
      <FiltersSection />
      <AdvertisesSection />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
