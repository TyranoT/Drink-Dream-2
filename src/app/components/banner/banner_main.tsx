'use client';
import { Carousel } from "antd";

export default function BannerMain() {
    return (
        <Carousel autoplay className="w-full h-[600px]">
            <div
                className="w-[105%] h-[600px] text-white bg-[url('/images/coquiteis_banner-1.webp')] bg-cover bg-center"
            >
                <div
                    className="h-full w-full flex flex-col justify-center text-5xl pl-10 drop-shadow-md gap-2 backdrop-blur-[1px]"
                >
                    <h2>
                        Drink Dream
                    </h2>
                    <p>
                        Seu sonho em uma bebida
                    </p>
                </div>
            </div>
            <div
                className="w-full h-[600px] text-white bg-[url('/images/coquiteis_banner-2.png')] bg-cover bg-center"
            >
                <div
                    className="h-full w-full flex flex-col justify-center text-5xl pl-10 drop-shadow-md gap-2 backdrop-blur-[1px]"
                >
                    <h2>
                        Drink Dream
                    </h2>
                    <p>
                        Seu sonho em uma bebida
                    </p>
                </div>
            </div>
            <div
                className="w-full h-[600px] text-white bg-[url('/images/coquiteis_banner-3.jpg')] bg-cover bg-top"
            >
                <div
                    className="h-full w-full flex flex-col justify-center text-5xl pl-10 drop-shadow-md gap-2 backdrop-blur-[1px]"
                >
                    <h2>
                        Drink Dream
                    </h2>
                    <p>
                        Seu sonho em uma bebida
                    </p>
                </div>
            </div>
        </Carousel>
    )
}