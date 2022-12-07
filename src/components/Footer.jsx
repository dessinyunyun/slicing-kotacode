import React from "react";
import "./footer.css";

const FooterComponents = () => {
  const [upButton, setupButton] = React.useState(false);

  window.addEventListener("scroll", function () {
    this.window.scrollY > 680 ? setupButton(true) : setupButton(false);
  });

  return (
    <footer>
      <div className="contain-footer-first">
        <div className="first gap-3 d-flex flex-row">
          <div className="left">
            <h2>BAGIAN DARI :</h2>
            <img src="footer/block.svg" alt="" />
          </div>
          <div className="right">
            <div className="image">
              <img src="footer/GoogleStartup.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="second">
          <h2>PRODUK</h2>
          <ul>
            <li>Pertnyaan</li>
            <li>Blog</li>
            <li>Pengguna</li>
            <li>Events</li>
            <li>Partnership</li>
          </ul>
        </div>
        <div className="tree">
          <h2>PERUSAHAAN</h2>
          <ul>
            <li>About</li>
            <li>FAQ</li>
            <li>Rules</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="four">
          {" "}
          <h2>HUBUNGI KAMI</h2>
          <ul>
            <li className="mb-3">petertanugraha@kotakode.com</li>
            <li className="d-flex gap-2 text-white">
              <i className="fi fi-brands-linkedin"></i>
              <i className="fi fi-brands-instagram"></i>
              <i className="fi fi-brands-twitter"></i>
              <i className="fi fi-brands-facebook"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="contain-footer desc text-center">
        <p>PT. Kota Digital Nusantara</p>
        <p>Copyright 2020 Kotakode. All rights reserved</p>
        <p className="m-0">Made with ❤️ in 🇮🇩 </p>
      </div>

      {upButton ? (
        <div className="button-up">
          <a href="#" className="d-flex align-items-center">
            <i className="fi fi-rs-angle-double-small-up"></i> Kembali ke Atas
          </a>
        </div>
      ) : (
        ""
      )}
    </footer>
  );
};

export default FooterComponents;
