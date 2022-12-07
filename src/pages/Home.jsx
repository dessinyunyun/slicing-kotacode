import React from "react";

const Home = () => {
  const [mobileMode, setmobileMode] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 840) {
      setmobileMode(true);
    }
  }, []);

  window.addEventListener("resize", function () {
    this.window.innerWidth < 840 ? setmobileMode(true) : setmobileMode(false);
  });
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="fw-bold">Jadilah Bagian dari komunitas Tech Terbesar di Indonesia</h1>
            <h5>Ikutan diskusi forum tanya jawab, tulis blog dan Membangun portofolio semua di Kotakode</h5>

            <div className="input-wrapper d-flex gap-3">
              <input type="text" placeholder="Masukkan Email Kamu" />
              <button className="fw-bold">Daftar</button>
            </div>

            <div className="total-wrapper d-flex gap-4 align-items-stretch">
              <div className="total-card">
                <h1>29436</h1>
                <p>User Bergabung</p>
              </div>
              <div className="total-card">
                <h1>1073</h1>
                <p>Blog Ditulis</p>
              </div>
              <div className="total-card">
                <h1>19595</h1>
                <p>
                  "total Pertanyaan" <br /> & Jawaban
                </p>
              </div>
            </div>
          </div>
          {mobileMode ? (
            ""
          ) : (
            <div className="col-sm-6 d-flex align-items-center">
              <img src="home-bg.gif" className="m-auto" alt="" width="100%" />
            </div>
          )}
        </div>
      </div>

      <div className="whycontainer">
        <div className="whycontain  row">
          <div className="col-sm-4 item-contain left header">
            <h1>Mengapa {mobileMode ? "" : <br />} perlu menggunakan Kotakode?</h1>
            <p>Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode memberikan fasilitas guna mensejahterakan kehidupan penduduknya.</p>
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-6 item-contain left">
                <div className="content-why d-flex gap-3">
                  <img src="1.png" alt="content-why" className="m-auto" />
                  <div className="text d-flex flex-column">
                    <h3>Jawaban Cepat, tepat & gratis</h3>
                    <p>
                      Dapatkan jawaban <br /> dalam hitungan menit dari ribuan programmer lainnya.
                    </p>
                  </div>
                </div>
                <div className="content-why d-flex gap-3 ">
                  <img src="2.png" alt="content-why" className="m-auto" />
                  <div className="text d-flex flex-column">
                    <h3>Konsep Gamifikasi</h3>
                    <p>Dapatkan badge menarik yang akan meningkatkan personal branding kamu sebagai seorang programmer.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 item-contain widder ">
                <div className="content-why widder d-flex flex-column align-items-center justify-content-center  mb-5">
                  <div className="image">
                    <img src="3.png" alt="" />
                  </div>
                  <div className="textwidder text-center mt-3">
                    <h3 className="text-center">Bangun Online Portofolio</h3>
                    <p>Portofolio ibaratkan sebuah aset yang berharga bagi setiap orang. Semakin kamu aktif di dalam forum, semakin membuktikan bahwa kamu adalah programmer yang berkualitas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-container whycontainer">
        <div className="row">
          <div className="col-sm-5 col-12 d-flex">
            <div className="contain-left m-auto">
              <h1>
                Satu Platform, <br /> Banyak Solusi
              </h1>
              <p>Kotakode memfasilitasi dengan memberikan berbagai fitur yang menarik dan terbaik untuk mengembangkan ekosistem IT anak bangsa.</p>
            </div>
          </div>
          <div className="col-sm-7 col-12 d-flex flex-column gap-5">
            <div className="card-contain">
              <div className="imgcontain">
                <img src="feature1.svg" alt="" />
              </div>
              <div className="deskripsi-feature">
                <h1 className="mb-3">Online Forum</h1>
                <p>Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas</p>
                <div className=" d-flex gap-3">
                  <button className="fw-bold">Tanya Sekarang</button>
                </div>
              </div>
            </div>
            <div className="card-contain second">
              <div className="imgcontain">
                <img src="feature2.svg" alt="" />
              </div>
              <div className="deskripsi-feature">
                <h1 className="mb-3">Microblogging</h1>
                <p>Kotakode menyediakan wadah bagi programmer untuk berbagi wawasan terkait info terkini di bidang IT</p>
                <div className=" d-flex gap-3">
                  <button className="fw-bold">Tanya Sekarang</button>
                </div>
              </div>
            </div>
            <div className="card-contain last">
              <div className="imgcontain">
                <img src="feature3.png" alt="" />
              </div>
              <div className="deskripsi-feature">
                <h1 className="mb-3">
                  Job Hiring <br /> (Coming Soon)
                </h1>
                <p>Kotakode membantu rekruiter dalam mencari talent terbaik yang memenuhi standar perusahaan</p>
                <div className=" d-flex gap-3">
                  <button className="fw-bold">Cari Kerja</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="community">
        <div className="imagecontainer mt-5">
          <img src="telegram.svg" alt="" />
        </div>
        <h1>Gabung Komunitas Telegram Kotakode</h1>
        <p> Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk bersama mencapai tujuan yang besar</p>
        <button>Ikutan Telegram</button>
      </div>

      <div className="partner">
        <h1>Dapatkan Bantuan dari Ribuan Ahli dan Professional Programmer di Seluruh Indonesia</h1>

        <p>Dari Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan Contoh Pengembangan Proyek</p>

        <div className="framework-container">
          <div className="card-framework">
            <div className="card">
              <img src="tool/android.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/bootstrap.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/codeigniter.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/css.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/firebase.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/git.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/html.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/java.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/jquery.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/kotlin.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/node.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/php.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/python.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/react.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/sql.svg" alt="" />
            </div>
          </div>
          <div className="card-framework">
            <div className="card">
              <img src="tool/swift.svg" alt="" />
            </div>
          </div>
        </div>

        <button>Ajukan Pertanyaan</button>

        <div className="partner-liputan">
          <h1>Diinput Oleh</h1>
          <div className="liputan-container gap-4">
            <a href="#">
              <img src="liputan/dailysocial.png" width="160px" alt="" />
            </a>
            <a href="#">
              {" "}
              <img src="liputan/liputan6.png" width="160px" alt="" />
            </a>
            <a href="#">
              <img src="liputan/yahoo_minified.png" width="160px" alt="" />
            </a>
            <a href="#">
              {" "}
              <img src="liputan/CNN.png" width="75px" alt="" />
            </a>
            <a href="#">
              <img src="liputan/merdeka.jpeg" width="160px" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
