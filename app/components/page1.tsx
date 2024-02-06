import Image from "next/image";

export default function Page1() {
  return (
    <div className="page">
      <p className="largetypography helvetica bold">EXPERIMENTS</p>
      <div className="hero">
        <div className="container">
          <p>
            ᠥᠰᢈᠦ ᠡᠴᠡ ᠰᠤᠷᠤᠭᠰᠠᠨ ᠦᠨᠳᠦᠰᠦᠨ ᠦ᠋ ᢈᠡᠯᠡ ᠮᠠᠷᠲᠠᠵᠤ ᠪᠣᠯᠤᠰᠢ ᠦ᠋ᢉᠡᠢ ᠰᠣᠶᠤᠯ
            ᠦᢈᠦᠲᠡᠯ᠎ᠡ ᠣᠷᠤᠰᠢᠬᠤ ᠲᠥᠷᠦᠯᢈᠢ ᠨᠤᠲᠤᠭ ᠰᠠᠯᠵᠤ ᠪᠣᠯᠤᠰᠢ ᠦ᠋ᢉᠡᠢ ᠣᠷᠤᠨ᠃
          </p>
          <br />
          <div className="profile">
            <Image
              src={"/avatar.png"}
              width={60}
              height={60}
              alt={""}
              priority={true}
            />
            <p> ᠳᠤ᠃ ᠨᠠᠴᠣᠭᠳᠣᠷᠵᠢ</p>
          </div>
        </div>
      </div>
      <div className="text">
        <p>ᠮᠣᠩᠭᠤᠯ ᠬᠡᠯᠡ</p>
        <p>ᠪᠢᠴᠢᠭ ᠰᠣᠶᠤᠯ</p>
      </div>
    </div>
  );
}
