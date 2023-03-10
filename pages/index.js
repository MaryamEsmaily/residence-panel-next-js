import LandingLayout from "@com-layouts/LandingLayout";

function Home() {
  return <div>صفحه نخست</div>;
}

Home.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
