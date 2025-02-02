import Image from "next/image";
import Link from "next/link";
import logo from "./logo.webp";

export default function Navbar() {
    return (
        <nav className="bg-slate-100 text-slate-800 p-12">
            <div className="flex justify-between items-center px-12 mx-auto">
                {/* Left Section: Logo */}
                <Link href={"/"}>
                    <Image className="rounded-full " src={logo} width={100} height={100} alt="Logo" />
                </Link>

                {/* Right Section: Menu */}
                <div className="space-x-6">
                    <Link className="border-b-2 border-transparent hover:border-slate-800 transition-all duration-300 ease-in-out" href={"/projektai"}>
                        Projektai
                    </Link>
                    <Link className="border-b-2 border-transparent hover:border-slate-800 transition-all duration-300 ease-in-out" href={"/paslaugos"}>
                        Paslaugos
                    </Link>
                    <Link className="border-b-2 border-transparent hover:border-slate-800 transition-all duration-300 ease-in-out" href={"/kontaktai"}>
                        Kontaktai
                    </Link>
                </div>
            </div>
        </nav>
    );
}
