import DetailsLayout from "@com-layouts/DetailsLayout";
import HostInfo from "@com-pages/AdvertiseDetails/HostInfo";
import RoomLocation from "@com-pages/AdvertiseDetails/RoomLocation";
import RoomMoreInfo from "@com-pages/AdvertiseDetails/RoomMoreInfo";
import RoomReviews from "@com-pages/AdvertiseDetails/RoomReviews";
import React from "react";
import RoomReservation from "@com-pages/AdvertiseDetails/RoomReservation";
import RoomInfo from "@com-pages/AdvertiseDetails/RoomInfo";

function AdvertiseDetails() {
  return (
    <div className="container">
      <RoomInfo />
      <hr className="my-8 border-dashed" />
      <RoomReservation />
      <RoomReviews />
      <RoomLocation />
      <HostInfo />
      <RoomMoreInfo />
    </div>
  );
}

AdvertiseDetails.getLayout = function getLayout(page) {
  return <DetailsLayout>{page}</DetailsLayout>;
};
export default AdvertiseDetails;
