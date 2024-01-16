import Link from "next/link";
import { GitHub, Globe } from "react-feather";

export default function Header() {
    return <div className="header">
        <div>
            <button className="btn" disabled>
                <span>ᠨᠡᠪᠲᠡᠷᠡᠬᠦ</span>
            </button>
            <button className="btn dark" disabled>
                <span>ᠪᠦᠷᠢᠳᠬᠡᠭᠦᠯᠬᠦ</span>
            </button>
        </div>
        <div>
            <Link href="https://github.com/babiga/mongolian-script-nextjs14"><GitHub size={28} color="white" /></Link>
            <Link href="https://www.mogulic.com"><Globe size={28} color="white" /></Link>
        </div>
    </div>
}