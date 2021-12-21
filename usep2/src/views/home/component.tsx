import { FC } from "react";
import "./styles.css";
import images from "../../assets";

const Home: FC = () => {
  const { } = images;

  return (
    <div className="home-container">
        <div className="section-1">
            <div className="section-1-content">
                <p className="section-title">Trámites Univ Resumen</p>
            </div>
        </div>
        <div className="info-section-1">
          <div className="info-section-1-content-1">
            info-section-1-content-1
          </div>
          <div className="info-section-1-content-2">
            <p>info-section-1-content-2 P</p>
            <p>info-section-1-content-2 P</p>
          </div>
        </div>
        <div className="section-2">
            <div className="section-2-content">
                <p className="section-title">Trámites Sep Resumen</p>
            </div>
        </div>
        <div className="info-section-2">
          <div className="info-section-2-content-1">
            info-section-2-content-1
          </div>
          <div className="info-section-2-content-2">
            <p>info-section-2-content-2 P</p>
            <p>info-section-2-content-2 P</p>
          </div>
        </div>
    </div>
  )
};

export default Home;
