import BannerMain from "./components/banner/banner_main";
import Header from "./components/header/header";

export default function Home() {


  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <BannerMain />
    </div>
  );
}
