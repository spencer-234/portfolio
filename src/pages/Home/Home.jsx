import "./home.scss";
import Title from "../../components/Title/Title"
import KUTE from "kute.js";
import devImage from "/assets/avatars/avatar2.jpg";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        const tween = KUTE.fromTo(
            '#blob1',
            { path: '#blob1' },
            { path: '#blob2' },
            { repeat: 999, duration: 3000, yoyo: true }
        );

        tween.start();
    }, [])



    return (
        <main className="home">
            <Title />
            <section className="intro">
                <div>
                    <svg id="visual" viewBox="0 0 1024 1024" width="500" height="500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                        <clipPath id="path" transform="translate(463.197822174091 468.69797823922045)">
                            <use xlinkHref="#blob1" />
                        </clipPath>
                        <g transform="translate(463.197822174091 468.69797823922045)">
                            <path id="blob1" d="M341.1 -205.4C445.1 -141.7 534.5 0.4 507.7 114.9C480.8 229.5 337.6 316.6 202.2 358C66.8 399.4 -60.7 395.2 -158.3 342.8C-255.9 290.4 -323.4 189.8 -369.5 62.8C-415.7 -64.2 -440.4 -217.6 -375.3 -272.4C-310.1 -327.3 -155.1 -283.7 -18.2 -269.1C118.6 -254.6 237.2 -269.1 341.1 -205.4" fill="none" stroke="#d717bd" strokeWidth="15">
                            </path>
                        </g>
                        <g transform="translate(435.45573294597074 474.7459205527764)" style={{ visibility: "hidden" }}>
                            <path id="blob2" d="M419.5 -323.6C505.5 -226.8 510.6 -54.5 473.4 107.9C436.2 270.4 356.7 423.1 236.7 474.2C116.7 525.3 -43.8 474.8 -159.3 394.7C-274.7 314.5 -345 204.6 -342.2 109C-339.4 13.3 -263.5 -68.2 -194.3 -161.1C-125.1 -254.1 -62.5 -358.5 52.1 -400.1C166.8 -441.7 333.6 -420.4 419.5 -323.6" fill="none" stroke="#d717bd" strokeWidth="15">
                            </path>
                        </g>
                        <image
                            width="1024"
                            height="1024"
                            xlinkHref={devImage}
                            clipPath="url(#path)"
                            className="dev-image"
                        />
                    </svg>
                </div>
            </section>
        </main>
    )
}

export default Home