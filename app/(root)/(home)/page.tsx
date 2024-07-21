import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  console.log(time);
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);
  return (
    <section className="flex flex-col gap-10 size-full text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex flex-col h-full justify-between max-md:py-8 max-md:px-5 lg:py-11">
          <h2 className=" ml-4 glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming meeting at : 12:30 PM
          </h2>
          <div className="flex flex-col gap-2 ml-4">
            <h1 className="font-extrabold text-4xl lg:7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl ">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
