import DetailsLayout from "@com-layouts/DetailsLayout";
import HostInfo from "@com-pages/AdvertiseDetails/HostInfo";
import RoomImages from "@com-pages/AdvertiseDetails/RoomImages";
import RoomLocation from "@com-pages/AdvertiseDetails/RoomLocation";
import RoomMoreInfo from "@com-pages/AdvertiseDetails/RoomMoreInfo";
import RoomReviews from "@com-pages/AdvertiseDetails/RoomReviews";
import RoomTotalInfo from "@com-pages/AdvertiseDetails/RoomTotalInfo";
import React from "react";

function AdvertiseDetails() {
  return (
    <div className="container px-[80px]">
      <RoomImages />
      <RoomTotalInfo />
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
