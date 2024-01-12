'use client';
import { useEffect } from "react";
import Header from "./components/header";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";

export default function () {
  useEffect(() => {
    const body = document.body;
    body.addEventListener("wheel", function (e) {
      e.preventDefault();
      body.scrollLeft += e.deltaY;
    }, { passive: false });
  }, [])
  return <>
    <Header />
    <Page1 />
    <Page2 />
    <Page3 />
  </>
}