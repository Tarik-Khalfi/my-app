"use client";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const [finalDate, setFinalDate] = useState({
    days: 0,
    months: 0,
    years: 0,
  });
  function calc(e) {
    e.preventDefault();
    let yearslived = new Date().getFullYear() - year;
    let daysLived = yearslived * 356;
    let monthsLived = yearslived * 12;
    setFinalDate({ days: daysLived, months: monthsLived, years: yearslived });
  }

  return (
    <main className=" h-[100vh] flex justify-center items-center mx-auto px-10 bg-[##716F6F]">
      <div classname="bg-[#FFF] h-fit w-fit  shadow-2xl rounded-br-3xl ">
        <div className=" flex flex-col space-y-4 ">
          <div className=" flex flex-row justify-between">
            <p>day</p>
            <p>month</p>
            <p>Year</p>
          </div>
          <div className=" flex flex-row border-b-sky-200 border-b-2">
            <input
              type="number"
              placeholder="DD"
              onChange={(e) => {
                setDay(e.target.value);
              }}
              className="border border-[#DCDCDC] px-4 py-2"
            />
            <input
              type="number"
              placeholder="MM"
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              className="border border-[#DCDCDC] px-4 py-2"
            />
            <input
              type="number"
              placeholder="YYYY"
              onChange={(e) => {
                setYear(e.target.value);
              }}
              className="border border-[#DCDCDC] px-4 py-2"
            />
          </div>
          <div className=" flex flex-row container ">
            <div className="w-full relative h-[1px]  flex justify-center items-center">
              <Image
                src="/Rectangle 6.png"
                fill
                alt="line"
                classname="w-[100%] h-[1px] absolute"
              />
            </div>
            <button
              onClick={(e) => {
                calc(e);
              }}
            >
              <Image src="/Frame 30.png" height={96} width={96} alt="button" />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[#151515] font-[880] text-[104px]">
            <span className="text-[#854DFF] ">
              {" "}
              {finalDate.years === 0 ? "--" : finalDate.years}
            </span>
            Years
          </p>
          <p className="text-[#151515] font-[880] text-[104px]">
            <span className="text-[#854DFF] ">
              {finalDate.months === 0 ? "--" : finalDate.months}
            </span>
            Month
          </p>
          <p className="text-[#151515] font-[880] text-[104px]">
            <span className="text-[#854DFF] ">
              {finalDate.days === 0 ? "--" : finalDate.days}
            </span>
            days
          </p>
        </div>
      </div>
    </main>
  );
}
