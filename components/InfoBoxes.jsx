import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {/* Renters */}
          <InfoBox
            attrs={{
              bgColor: "bg-gray-100",
              btnBgColor: "bg-black",
              btnHoverBgColor: "bg-gray-700",
              link: "/properties",
              btnText: "Browse Properties",
              type: "Renters",
              text: "Find your dream rental property. Bookmark properties and contact owners.",
            }}
          />
          {/* Property Owners */}
          <InfoBox
            attrs={{
              bgColor: "bg-blue-100",
              btnBgColor: "bg-blue-500",
              btnHoverBgColor: "bg-blue-600",
              btnText: "Add Properties",
              link: "/properties/add",
              type: "Owners",
              text: "List your properties and reach potential tenants. Rent as an airbnb or long term.",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
