import React from "react";
import { Link } from "react-router-dom";

const previewDemo = [
  {
    img: "dark",
    title: "Dark Demo (Professional Portfolio)",
    routerPath: "/home-dark",
    delayAnimation: "50",
  },
  {
    img: "light",
    title: "Light Demo (Classic Portfolio)",
    routerPath: "/home-light",
    delayAnimation: "",
  },
];

const Preview = () => {
  return (
    <div>
      <section className="banner text-center">
        <div className="content">
          <h1>Tunis</h1>
          <h2>Personal Portfolio React Template</h2>
        </div>
      </section>
      {/* End .banner */}

      <section className="demo dark">
        <div className="container">
          <div className="row">
            {previewDemo.map((val, i) => (
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="content text-center">
                  <div className="bg_container">
                    <Link to={val.routerPath} target="_blank" rel="noreferrer">
                      <img
                        src={`img/intro/${val.img}.jpg`}
                        alt="demo"
                        className="img-responsive screenshot"
                      />
                    </Link>
                  </div>
                  <h2>{val.title}</h2>
                  <div className="anchor">
                    <h6>
                      <Link
                        className="btn"
                        to={val.routerPath}
                        target="_blank"
                        rel="noreferrer"
                      >
                        view demo
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End .Demo */}
    </div>
  );
};

export default Preview;
