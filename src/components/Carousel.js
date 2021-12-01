import React from "react";
import img1 from "../assets/image/bg1.png";
import img2 from "../assets/image/bg2.png";
import img3 from "../assets/image/bg3.png";

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-mdb-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide-to="0"
                    className="carousel-btn active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide-to="1"
                    className="carousel-btn"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-mdb-target="#carouselExampleCaptions"
                    data-mdb-slide-to="2"
                    className="carousel-btn"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner carousel-inner-custom">
                <div className="carousel-item h-100" data-mdb-interval="5000">
                    <img src={img3} className="d-block carousel-img w-100 h-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block text-dark mb-3">
                        <h5 className="text-secondary">Trại nghiệm tốt</h5>
                        <p>Giải quyết công việc cùng nhau hiệu quả</p>
                    </div>
                </div>
                <div className="carousel-item h-100" data-mdb-interval="5000">
                    <img src={img2} className="d-block  carousel-img w-100 h-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block text-dark mb-3">
                        <h5 className="text-secondary">Giải quyết vấn đề hiệu quả</h5>
                        <p>Trao đổi thông tin mọi lúc</p>
                    </div>
                </div>
                <div className="carousel-item h-100 active" data-mdb-interval="5000">
                    <img src={img1} className="d-block carousel-img w-100 h-100  " alt="..." />
                    <div className="carousel-caption d-none d-md-block text-dark mb-3">
                        <h5 className="text-secondary">Chat nhóm với đồng nghiệp</h5>
                        <p>Tiện dụng hơn trong làm việc nhóm </p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev "
                type="button"
                data-mdb-target="#carouselExampleCaptions"
                data-mdb-slide="prev"
            >
                <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-mdb-target="#carouselExampleCaptions"
                data-mdb-slide="next"
            >
                <span className="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
