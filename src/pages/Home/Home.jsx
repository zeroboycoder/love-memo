import { useState, useEffect } from "react";
import moment from "moment";
import { Favorite } from "@mui/icons-material";
import momentDuration from "moment-duration-format";
import style from "./Home.module.css";

const Home = () => {
  let [date, setDate] = useState();
  let [time, setTime] = useState();
  let [totalWidth, setTotalWidth] = useState();
  momentDuration(moment);

  useEffect(() => {
    const addTime = () => {
      const startDate = "2023-10-11";
      const currentDate = moment();
      const diff = currentDate.diff(startDate);
      const duration = moment.duration(diff).format("M[Months] d[Days]");
      const timeDuration = moment
        .duration(diff)
        .format("d[days] HH:mm:ss")
        .split(" ")[1];
      const tDate = moment.duration(diff).format("d");
      setTotalWidth((tDate * 100) / 365);
      setDate(duration);
      setTime(timeDuration);
    };
    addTime();
    setInterval(() => {
      addTime();
    }, 1000);
  }, []);

  return (
    <div className={`relative w-full h-screen ${style.homeContainer}`}>
      {/* <div className="absolute top-0 w-full h-screen bg-[#c2c2c23a]"></div> */}
      <div className="text-center pt-24 text-[#934273] space-y-3">
        <p className="">Been Together</p>
        <div className="space-y-1">
          <h2 className="text-xl">{date}</h2>
          <p className="text-sm">({time})</p>
        </div>
        <p>has come</p>
        <div className="flex justify-between items-center w-10/12 h-10 m-auto space-x-2">
          <p className="text-sm">0</p>
          <div className="w-9/12 relative" style={{ top: "-10px" }}>
            <div className="text-left" style={{ marginLeft: `${totalWidth}%` }}>
              <Favorite
                style={{
                  marginLeft: "-6px",
                  color: "#ef9291",
                  fontSize: "12px",
                }}
              />
            </div>
            <div className="relative w-full">
              <div>
                <div
                  className={style.countingLine}
                  style={{ width: `${totalWidth}%` }}
                ></div>
                <div className={style.baseLine}></div>
              </div>
            </div>
          </div>
          <p className="text-sm">1 year</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
