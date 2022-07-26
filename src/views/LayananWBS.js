import React from "react";
//import { Link } from "react-router-dom";
// import Axios from 'axios';

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Router } from "react-router";
// import { data } from "autoprefixer";

export default function PelayananPublic() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://drive.google.com/uc?export=view&id=1WeIQcIEB6Tclb8_A7RZ30a1YVjhLWYkF')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
            <svg
              className="absolute bottom-0 overflow-hidden "
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-current "
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl"></h1>
                  <h2 className="mt-4 text-white font-semibold text-4xl">
                    Layanan Pengaduan Masyarakat
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <section className="relative block py-24 lg:pt-0">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <center>
                      <h4 className="text-2xl font-semibold">WBS</h4>

                      <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                        Whistleblowing System
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                        DEFINISI WHISTLEBLOWING SYSTEM adalah mekanisme
                        penyampaian pengaduan dugaan tindak pidana tertentu yang
                        telah terjadi atau akan terjadi yang melibatkan pegawai
                        dan orang lain yang yang dilakukan dalam organisasi
                        tempatnya bekerja, dimana pelapor bukan merupakan bagian
                        dari pelaku kejahatan yang dilaporkannya.
                      </p>
                    </center>
                    <div className="text-center mt-6">
                      <a
                        href="./LayananWBSform"
                        className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                        type="button"
                      >
                        Kirim Laporan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
