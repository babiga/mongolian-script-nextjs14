import Link from "next/link";
import { GitHub, Globe } from "react-feather";

export default function Header() {
    return <div className="header">
        <div>
            <button className="btn" disabled>
                ᠨᠡᠪᠲᠡᠷᠡᠬᠦ
            </button>
            <button className="btn dark" disabled>
                ᠪᠦᠷᠢᠳᠬᠡᠭᠦᠯᠬᠦ
            </button>
        </div>
        <div>
            <GitHub href="https://github.com/babiga/mongolian-script-nextjs14" size={28} color="white" />
            <Link href="https://www.mogulic.com"><Globe size={28} color="white" /></Link>
        </div>
    </div>
}