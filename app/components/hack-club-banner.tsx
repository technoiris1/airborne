"use client";

import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@hackclub/banner"), {
  ssr: false,
});

export default function HackClubBanner() {
  return <Banner />;
}
