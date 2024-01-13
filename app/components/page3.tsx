import { Info, ShoppingCart, UserPlus } from "react-feather";

export default function Page3() {
    return <div className="page modern" style={{ background: "#f9f9f9" }}>
        <p className="largetypography helvetica bold">MODERN</p>
        <div className="hero" style={{ backgroundImage: "url(" + "/heroimg3.jpg" + ")" }}>
            <div className="container">
                <button className="modern-btn-1">ᠰᠠᠭᠰᠤᠯᠬᠤ <ShoppingCart size={14} strokeWidth={3} /></button>
                <button className="modern-btn-2"><UserPlus size={18}/>ᠪᠦᠷᠢᠳᠬᠡᠭᠦᠯᠬᠦ</button>
                <button className="modern-btn-3">ᠨᠡᠪᠲᠡᠷᠡᠬᠦ</button>
                <button className="modern-btn-4">ᠪᠦᠷᠢᠳᠬᠡᠭᠦᠯᠬᠦ</button>
            </div>
        </div>
        <div className="text">
            <p>ᠮᠣᠩᠭᠤᠯ ᠰᠣᠶᠤᠯ</p>
            <p>ᠮᠠᠨᠳᠤᠨ ᠪᠠᠳᠠᠷᠠᠭ</p>
        </div>
    </div>
}