import logo from "../assets/images/logo.png";
import graph from "../assets/images/graph.png";
import settings from "../assets/images/settings.png";
import user from "../assets/images/user.png";
import threedots from "../assets/images/threedots.png";
import { useState, useRef, useEffect } from "react";
import Modal from "./modal";
export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <nav className="flex px-3 w-155 m-auto pt-[14px] font-primary justify-between">
        <a
          href="/"
          className="flex gap-1 text-white font-bold text-xl items-center"
        >
          <img src={logo} className="size-[20px]" />
          Pomofocus
        </a>
        <div className="flex gap-3">
          <button
            className="text-white flex items-center cursor-pointer leading-none bg-[rgba(255,255,255,0.2)] text-[13px] rounded-sm px-3 py-2 opacity-90 hover:opacity-100 active:translate-y-[2px]"
            onClick={toggleModal}
          >
            <img src={graph} className="w-4 mr-1" />
            <div>Report</div>
          </button>
          <button className="text-white flex items-center cursor-pointer leading-none bg-[rgba(255,255,255,0.2)] text-[13px] rounded-sm px-3 py-2 opacity-90 hover:opacity-100 active:translate-y-[2px]">
            <img src={settings} className="w-4 mr-1" />
            <div>Setting</div>
          </button>
          <button className="text-white flex items-center cursor-pointer leading-none bg-[rgba(255,255,255,0.2)] text-[13px] rounded-sm px-3 py-2 opacity-90 hover:opacity-100 active:translate-y-[2px]">
            <img src={user} className="w-4 mr-1" />
            <div>Sign in</div>
          </button>
          <button className="text-white flex items-center cursor-pointer leading-none bg-[rgba(255,255,255,0.2)] text-[13px] rounded-sm px-[9px] py-2 opacity-90 hover:opacity-100 active:translate-y-[2px] ">
            <img src={threedots} className="w-4" />
          </button>
        </div>
      </nav>
      {isModalOpen && <Modal toggleModal={toggleModal} modalRef={modalRef} />}
    </>
  );
}
