import React from "react";
import curve2 from "../assets/images/curve2.png";
import flower from "../assets/images/flower.png";

export default function HomeBackground() {
  return (
    <div>
      <div className="-z-40 relative">
        <img
          src={flower}
          className="-z-20 bg-black fixed top-16 md:top-0 right-0 w-[50%] md:w-[35%] xl:w-[30%]"
          alt=""
        />
        <img
          src={curve2}
          className="-z-30 bg-black fixed right-0 w-[60%] bottom-0"
          alt=""
        />
      </div>
      <div className="-z-50 fixed bg-black h-screen w-screen" />
    </div>
  );
}
