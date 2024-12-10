import React from "react";
import ReactPlayer from "react-player";
const OverView = () => {
  return (
    <div>
      <div className="my-heading text-center text-amber-600">
        Our Beautiful Country:
      </div>
      <p className=" my-work text-justify text-slate-900 p-2">
        Bangladesh is a land of stunning natural beauty, where emerald green
        landscapes, winding rivers, and golden beaches come together in harmony.
        Rich in culture and history, it offers a captivating blend of ancient
        traditions and warm hospitality. From the mystical Sundarbans to the
        world’s longest sea beach at Cox’s Bazar, every corner invites you to
        explore and be amazed.
      </p>
      <div className="aspect-video grid lg:grid-cols-3 gap-2">
        <ReactPlayer
          controls
          className="react-player"
          url="https://youtu.be/4FrPZoofdBQ?si=uyT5jHVJ24MDfmDB"
          width="100%"
          height="100%"
        />
        <ReactPlayer
          controls
          className="react-player"
          url="https://youtu.be/vueBUA2wpFw?si=MaDAjd9nz0PoRM1t"
          width="100%"
          height="100%"
        />
        <ReactPlayer
          controls
          className="react-player"
          url="https://youtu.be/JLjvEYMBGzQ?si=F2ozjnyvkncJRX2M"
          width="100%"
          height="100%"
        />
        <ReactPlayer
          controls
          className="react-player"
          url="https://youtu.be/fN21oOdni_c?si=k2PXe_GH0JFnrl82"
          width="100%"
          height="100%"
        />
        <ReactPlayer
          controls
          className="react-player"
          url="https://youtu.be/1hfrHd3_MMs?si=KieCGKhqFzMHPXvz"
          width="100%"
          height="100%"
        />
        <ReactPlayer
          controls
          className="react-player"
          url="https://youtu.be/rDYdeq3JW_E?si=Ip9EdVgbMYLqtn6h"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default OverView;
