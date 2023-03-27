import DetailsLayout from "@com-layouts/DetailsLayout";
import HostInfo from "@com-pages/AdvertiseDetails/HostInfo";
import RoomMoreInfo from "@com-pages/AdvertiseDetails/RoomMoreInfo";
import RoomReviews from "@com-pages/AdvertiseDetails/RoomReviews";
import React from "react";
import RoomReservation from "@com-pages/AdvertiseDetails/RoomReservation";
import RoomInfo from "@com-pages/AdvertiseDetails/RoomInfo";

import dynamic from "next/dynamic";
const RoomLocation = dynamic(
  () => import("@com-pages/AdvertiseDetails/RoomLocation"),
  {
    ssr: false,
  }
);
function AdvertiseDetails() {
  return (
    <div className="container">
      <RoomInfo />
      <hr className="my-8 border-dashed" />
      <RoomReservation />
      <hr className="my-8" />
      <RoomReviews />
      <hr className="my-8" />
      <RoomLocation />
      <hr className="my-8" />
      <HostInfo />
      <hr className="my-8" />
      <RoomMoreInfo />
    </div>
  );
}

AdvertiseDetails.getLayout = function getLayout(page) {
  return <DetailsLayout>{page}</DetailsLayout>;
};
export default AdvertiseDetails;
