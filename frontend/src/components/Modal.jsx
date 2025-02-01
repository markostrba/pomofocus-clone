import { useState } from "react";

export default function Modal({ toggleModal, modalRef }) {
  const activeElement = "bg-secondary-red text-white";

  return (
    <div className="bg-[rgba(0,0,0,0.4)] fixed size-full top-0 pt-12 pb-14.5 flex justify-center z-10">
      <div
        ref={modalRef}
        className="max-w-150 w-full bg-white p-5 relative shadow-sm rounded-lg"
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
        <div className="border-solid border-2 flex border-secondary-red text-secondary-red font-bold rounded-lg flex leading-none my-10">
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
      </div>
    </div>
  );
}
