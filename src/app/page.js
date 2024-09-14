import Image from "next/image";
import Navbar from "./components/Navbar";
import MenuBar from "./components/MenuBar";
import MainPage from "./components/MainPage";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col">

        <Navbar />
        <MainPage />
      </div>
    </>
  );
}
