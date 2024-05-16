import React from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'

export default function App() {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <section className="effaclar-section">
        <div className="tieude2">
          <h3>EFFACLAR</h3>
        </div>
        <div className="all-section2">
          <div className="product">
            <div className="photo">
              <img src="./public/ip12trang.webp" alt="photo11111" />
            </div>
            <h4 className="h4-product">
              KEM DƯỠNG <br />
              EFFACLAR DUO+ 15ML
            </h4>
            <p className="value">₫ 150,000</p>
            <div className="tong">
              <div className="icons icon-heart">
                <i className="fa-regular fa-heart" />
              </div>
              <button className="timhieuthem">Tìm hiểu thêm</button>

            </div>
          </div>
          <div className="product">
            <div className="photo">
              <img src="/img/3337875826594 2.png" alt="photo" />
            </div>
            <h4 className="h4-product">
              GEL RỬA MẶT
              <br />
              EFFACLAR 400ML
            </h4>
            <p className="value">₫ 539,000</p>
            <div className="tong">
              <div className="icons icon-heart">
                <i className="fa-regular fa-heart" />
              </div>
              <button className="timhieuthem">Tìm hiểu thêm</button>

            </div>
          </div>
          <div className="product">
            <div className="photo">
              <img src="/img/3337875826594 3.png" alt="photo" />
            </div>
            <h4 className="h4-product">
              NƯỚC CÂN BẰNG <br />
              EFFACLAR 200ML
            </h4>
            <p className="value">₫ 389,000</p>
            <div className="tong">
              <div className="icons icon-heart">
                <i className="fa-regular fa-heart" />
              </div>
              <button className="timhieuthem">Tìm hiểu thêm</button>

            </div>
          </div>
        </div>
        <div className="product2">
          <div className="photo2">
            <img src="/img/3337875826594 1 (1).png" alt="photo" />
          </div>
          <h4 className="h4-product2">
            SỮA RỬA MẶT <br />
            EFFACLAR 125ML
          </h4>
          <p className="value2">₫ 379,000</p>
          <div className="tong2">
            <div className="icons icon-heart">
              <i className="fa-regular fa-heart" />
            </div>
            <button className="timhieuthem">Tìm hiểu thêm</button>

          </div>
        </div>
      </section>

    </>

  )
}
