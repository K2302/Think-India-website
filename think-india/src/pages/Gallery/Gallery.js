import React, { useRef } from 'react';
import './Gallery.css';
import Mycard from './Mycard.js';
import Landing from '../../components/Home/Landing/Landing1'
import Footer from '../../components/Home/Footer/Footer'

const Gallery = () => {
    const boxRef = useRef(null);

    const btnpressprev = () => {
        let box = boxRef.current;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width);
    };

    const btnpressnext = () => {
        let box = boxRef.current;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);
    };

    return (
        <div className='lol'>
            <div><Landing /></div>
            <div>
                <img className="think-item" alt="" src="/rectangle-709@2x.png" />
                <div className="image-78-parent">
                    <img className="image-78-icon" alt="" src="/image-78@2x.png" />
                    <img className="image-76-icon" alt="" src="/image-76@2x.png" />
                    <img className="image-83-icon" alt="" src="/image-83@2x.png" />
                    <img className="image-77-icon" alt="" src="/image-77@2x.png" />
                    <img className="image-79-icon" alt="" src="/image-79@2x.png" />
                    <img className="image-80-icon" alt="" src="/image-80@2x.png" />
                    <img className="image-81-icon" alt="" src="/image-81@2x.png" />
                    <img className="image-82-icon" alt="" src="/image-82@2x.png" />
                </div>
            </div>

            <div className="product-carousel">
                <div>2023</div>
                <button className="pre-btn" onClick={btnpressprev}>
                    <p>&lt;</p>
                </button>
                <button className="next-btn" onClick={btnpressnext}>
                    <p>&gt;</p>
                </button>

                <div className="product-container" ref={boxRef}>
                    <Mycard cardno="1" />
                    <Mycard cardno="2" />
                    <Mycard cardno="3" />
                    <Mycard cardno="4" />
                    <Mycard cardno="5" />
                    <Mycard cardno="6" />
                    <Mycard cardno="7" />
                    <Mycard cardno="8" />
                    <Mycard cardno="9" />
                    <Mycard cardno="10" />
                    <Mycard cardno="11" />
                    <Mycard cardno="12" />
                    <Mycard cardno="13" />
                </div>
            </div>
            <div className="product-carousel">
                <div>2022</div>
                <button className="pre-btn" onClick={btnpressprev}>
                    <p>&lt;</p>
                </button>
                <button className="next-btn" onClick={btnpressnext}>
                    <p>&gt;</p>
                </button>

                <div className="product-container" ref={boxRef}>
                    <Mycard cardno="1" />
                    <Mycard cardno="2" />
                    <Mycard cardno="3" />
                    <Mycard cardno="4" />
                    <Mycard cardno="5" />
                    <Mycard cardno="6" />
                    <Mycard cardno="7" />
                    <Mycard cardno="8" />
                    <Mycard cardno="9" />
                    <Mycard cardno="10" />
                    <Mycard cardno="11" />
                    <Mycard cardno="12" />
                    <Mycard cardno="13" />
                </div>
            </div>
            <div className="product-carousel">
                <div>2021</div>
                <button className="pre-btn" onClick={btnpressprev}>
                    <p>&lt;</p>
                </button>
                <button className="next-btn" onClick={btnpressnext}>
                    <p>&gt;</p>
                </button>

                <div className="product-container" ref={boxRef}>
                    <Mycard cardno="1" />
                    <Mycard cardno="2" />
                    <Mycard cardno="3" />
                    <Mycard cardno="4" />
                    <Mycard cardno="5" />
                    <Mycard cardno="6" />
                    <Mycard cardno="7" />
                    <Mycard cardno="8" />
                    <Mycard cardno="9" />
                    <Mycard cardno="10" />
                    <Mycard cardno="11" />
                    <Mycard cardno="12" />
                    <Mycard cardno="13" />
                </div>
            </div>
            <div> <Footer /></div>

        </div >
    );
};

export default Gallery;
