import Link from "next/link";
import { siteConfig } from "../const/site.config";

const Footer = () => {
  return (
    <footer className="text-black w-screen block"
      style={{ backgroundColor: "#fff",fontFamily:"Yu Gothic UI" }}>
      <div className="container px-6 flex flex-col items-center max-w-6xl w-full mx-auto">
        <div className=" text-center"style={{ color: "#004673" }}>
          <h3 className="footh3 text-3xl font-semibold" >NakanoWeb制作Portfolio</h3>
          <p className="text-lg">MAIL : kei.nakanotoku@gmail.com</p>
        </div>
        <a href="/contact">
        <button className="footbutton">
          <h2 className="footh2">お気軽にお問い合わせください</h2>
          <hr className="h-px my-2 bg-white border-0 " />
            <p className="footp">CLICK</p>
          </button>
          </a>
        
      </div>
      
      {/* copyright */}
      <div className="text-center p-2 "
      style={{ backgroundColor: "#2f4f4f",fontFamily:"Yu Gothic UI" }}>
          <Link href="/" className="text-white text-xs">
            Copyright © {siteConfig.title}
          </Link>
        </div>
    </footer>
  );
}

export default Footer