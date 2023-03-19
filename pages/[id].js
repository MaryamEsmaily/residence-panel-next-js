import DetailsLayout from "@com-layouts/DetailsLayout";
import React from "react";

function AdvertiseDetails() {
  return <div>AdvertiseDetails</div>;
}

AdvertiseDetails.getLayout = function getLayout(page) {
  return <DetailsLayout>{page}</DetailsLayout>;
};
export default AdvertiseDetails;
