import { Image } from "@heroui/react";
import BannerMain from "./components/banner/banner_main";
import Header from "./components/header/header";

export default function Home() {


  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <BannerMain />
      <section className="flex flex-col gap-2 items-center bg-transparent min-h-[600px]">
        <h2 className="text-3xl text-white my-8">
          O mais populares
        </h2>
      </section>
    </div>
  );
}
