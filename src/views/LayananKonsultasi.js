import React, { useEffect, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import "../App.css";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import "semantic-ui-css/semantic.min.css";

import { useHistory } from "react-router";
// import { data } from "autoprefixer";

export default function LKform() {
  let history = useHistory();
  // const [tahun, setTahun] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [konsultasi, setKonsultasi] = useState("");
  const [uraian_masalah, setUraian] = useState("");
  const [rekomendasi, setRekomendasi] = useState("");
  const [showAlert, setShowAlert] = React.useState(true);

  useEffect(() => {
    setShowAlert(false);
  }, [0]);

  const sendDataToAPI = () => {
    axios
      .post(
        `https://simwas.inspektorat.banjarkota.go.id/inspektorat_api/api/add/t_laporan_konsultasi`,
        {
          // tahun,
          tanggal,
          nama,
          alamat,
          jabatan,
          konsultasi,
          uraian_masalah,
          rekomendasi,
          // penerima_konsultasi,
          // dokumen,
          // wilayah,
        }
      )
      .then(() => {
        history.push("/LayananKonsultasi");
        setShowAlert(true);
      });
  };

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
                className="text-white fill-current "
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
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
                      <h4 className="text-2xl font-semibold">
                        Layanan Konsultasi
                      </h4>

                      <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                        Layanan Konsultasi Masyarakat
                      </p>
                    </center>

                    {showAlert ? (
                      <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-lightBlue-500">
                        <span className="text-xl inline-block mr-5 align-middle">
                          <i className="fas fa-bell" />
                        </span>
                        <span className="inline-block align-middle mr-8">
                          <b className="capitalize">Berhasil!</b>
                        </span>
                        <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                          <a href="PelayananPublik">Kembali</a>
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="nama"
                          >
                            Nama Lengkap
                          </label>
                          <input
                            type="nama"
                            required
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Nama Lengkap"
                            name="nama"
                            onChange={(e) => setNama(e.target.value)}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="alamat"
                          >
                            Alamat
                          </label>
                          <input
                            type="alamat"
                            required
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Alamat"
                            name="alamat"
                            onChange={(e) => setAlamat(e.target.value)}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="jabatan"
                          >
                            Jabatan
                          </label>
                          <input
                            type="jabatan"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Jabatan"
                            name="konsultasi"
                            onChange={(e) => setJabatan(e.target.value)}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="konsultasi"
                          >
                            Konsultasi
                          </label>
                          <input
                            type="konsultasi"
                            required
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Konsultasi"
                            name="konsultasi"
                            onChange={(e) => setKonsultasi(e.target.value)}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="message"
                          >
                            Uraian Masalah
                          </label>
                          <textarea
                            rows="4"
                            cols="80"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Uraian masalah..."
                            name="uraian"
                            onChange={(e) => setUraian(e.target.value)}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="message"
                          >
                            Rekomendasi
                          </label>
                          <textarea
                            rows="4"
                            cols="80"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Rekomendasi.."
                            name="uraian"
                            onChange={(e) => setRekomendasi(e.target.value)}
                          />
                        </div>

                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="full-name"
                          >
                            Tanggal
                          </label>
                          <input
                            type="date"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Tanggal"
                            name="tanggal"
                            onChange={(e) => setTanggal(e.target.value)}
                          />
                        </div>

                        <div className="text-center mt-6">
                          <button
                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            onClick={sendDataToAPI}
                          >
                            Kirim
                          </button>
                        </div>
                      </div>
                    )}
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
