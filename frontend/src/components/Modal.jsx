import { useState } from "react";
import calendar from "../assets/images/calendar.png";
import clock from "../assets/images/clock.png";
import fire from "../assets/images/fire.png";
import config from "../assets/images/config-black.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const fullData = [
  { date: "2024-01-01", value: 10 },
  { date: "2024-01-02", value: 20 },
  { date: "2024-01-03", value: 15 },
  { date: "2024-01-10", value: 25 },
  { date: "2024-02-01", value: 30 },
];

export const data = {
  labels: fullData.map((data) => data.date),
  datasets: [
    {
      label: "No Project",
      data: fullData.map((data) => data.value),
      backgroundColor: "rgba(255, 218, 226, 0.5)",
      borderColor: "rgba(216, 131, 148, 1)",
      borderWidth: 1.5,
    },
  ],
};

export default function Modal({ toggleModal, modalRef }) {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] fixed size-full top-0 pt-12 pb-14.5 z-10 overflow-x-hidden overflow-scroll">
      <div
        ref={modalRef}
        className="max-w-150 w-full bg-white p-5 relative m-auto shadow-sm rounded-lg z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-6 opacity-30 cursor-pointer absolute right-3 top-2.5 hover:opacity-50"
          onClick={toggleModal}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
        <ReportFunction />
      </div>
    </div>
  );
}

function ReportFunction() {
  const activeElement = "bg-secondary-red text-white";

  return (
    <div className="font-primary">
      <div className="border-solid border-2 border-secondary-red text-secondary-red font-bold rounded-lg flex leading-none my-10">
        <div
          className={`flex-1 text-center py-2 border-r border-r-2 cursor-pointer ${activeElement}`}
        >
          Summary
        </div>
        <div className="flex-1 text-center py-2 border-r border-r-2 cursor-pointer">
          Detail
        </div>
        <div className="flex-1 text-center py-2 cursor-pointer">Ranking</div>
      </div>
      <div className="flex items-center gap-3 my-7">
        <h2 className="text-[#575757] text-lg font-bold text-lg">
          Activity Summary
        </h2>
        <div className="h-px bg-[rgb(240,240,240)] flex-1"></div>
      </div>
      <span className="text-base text-[rgb(163,163,163)] mb-7 block">
        * This report will be available when you are logged in
      </span>
      <div className="flex gap-3">
        <div className="text-[rgb(213,117,114)] leading-none bg-[rgb(248,232,231)] rounded-lg text-right relative mb-3.5 px-3.5 py-4.5 min-w-[120px] box-content">
          <img
            src={clock}
            className="absolute top-[12px] left-[18px] opacity-50 w-7"
          />
          <div className="text-3xl font-bold mb-1.5 block">--</div>
          <div className="text-sm font-bold block">hours focused</div>
        </div>
        <div className="text-[rgb(213,117,114)] leading-none bg-[rgb(248,232,231)] rounded-lg text-right relative mb-3.5 px-3.5 py-4.5 min-w-[120px] box-content">
          <img
            src={calendar}
            className="absolute top-[12px] left-[18px] opacity-50 w-7"
          />
          <span className="text-3xl font-bold mb-1.5 block">--</span>
          <span className="text-sm font-bold block">hours focused</span>
        </div>
        <div className="text-[rgb(213,117,114)] leading-none bg-[rgb(248,232,231)] rounded-lg text-right relative mb-3.5 px-3.5 py-4.5 min-w-[120px] box-content">
          <img
            src={fire}
            className="absolute top-[12px] left-[18px] opacity-50 w-7"
          />
          <span className="text-3xl font-bold mb-1.5 block">--</span>
          <span className="text-sm font-bold block">hours focused</span>
        </div>
      </div>
      <div className="flex items-center gap-3 my-7">
        <h2 className="text-[#575757] text-lg font-bold text-lg">
          Focus Hours
        </h2>
        <div className="h-px bg-[rgb(240,240,240)] flex-1"></div>
      </div>
      <div className="flex flex-col items-end">
        <div className="border-solid border-2 border-secondary-red text-secondary-red font-bold rounded-lg w-[300px] mb-4.5 leading-none flex text-sm">
          <div
            className={`flex-1 text-center py-1.5 border-r border-r-2 cursor-pointer ${activeElement}`}
          >
            Week
          </div>
          <div className={`flex-1 text-center py-1.5 cursor-pointer`}>
            Month
          </div>
        </div>
        <div className="flex border-solid border-2 border-secondary-red text-secondary-red font-bold rounded-lg w-[230px] text-xs text-center mb-4.5">
          <div className="flex-1 border-r border-r-2 cursor-pointer py-1 hover:opacity-80 active:opacity-60">
            {"<"}
          </div>
          <div className="flex-3 border-r border-r-2 cursor-pointer py-1 hover:opacity-80 active:opacity-60">
            This Week
          </div>
          <div className="flex-1 py-1 cursor-pointer hover:opacity-80 active:opacity-60">
            {">"}
          </div>
        </div>
      </div>
      <span className="text-base text-[rgb(163,163,163)] mb-7 mt-3.5 block">
        * This report will be available when you are logged in
      </span>
      <div className="h-[550px] w-[560px]">
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false, // Disable aspect ratio to allow fixed height
            responsive: true, // Make the chart responsive to the parent container
          }}
          className="w-full h-full" // Ensure the chart takes full width and height of its parent
          style={{ height: "100%", width: "100%" }} // Use percentage to fill the parent container
        />
      </div>
      <div className="hover:opacity-100 px-2 py-1 border-solid border-2 border-[rgba(0,0,0,0.4)] font-bold text-sm text-[rgba(0,0,0,0.4)] flex items-center min-w-[70px] cursor-pointer rounded-sm w-fit opacity-90 leading-none tracking-[0.02em] justify-self-end mt-3 mb-7 pr-[7px]">
        <img src={config} className="opacity-30 w-[12px] h-[12px] mr-1" />
        Edit
      </div>
      <table className="w-full table-auto">
        <thead className="border-solid border-b border-[rgb(240,240,240)]">
          <tr className="text-xs text-[rgb(163,163,163)]">
            <th className="text-left pb-2 pl-3.5">PROJECT</th>
            <th className="text-right pb-2">TIME(HH:MM)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-solid border-b border-[rgb(240,240,240)]">
            <td className="text-left cursor-pointer hover:opacity-80 text-[rgb(61,61,61)] text-lg py-2 pl-5">
              <div className="flex items-center">
                <div className="bg-[rgba(255,71,108,0.2)] border-1 border-solid border-[rgba(173,0,35,0.8)] h-4 w-4 mr-3 inline-block"></div>
                No Project
              </div>
            </td>
            <td className="text-right font-bold text-[rgb(87,87,87)] text-xl py-3">
              00:01
            </td>
          </tr>
          <tr className="border-solid border-b border-[rgb(240,240,240)]">
            <td className="text-left py-2 pl-5 text-lg text-[rgb(163,163,163)] cursor-pointer">
              Total
            </td>
            <td className="text-right py-2 font-bold text-xl text-[rgb(163,163,163)]">
              00:01
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
