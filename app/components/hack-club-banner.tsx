import Link from "next/link";

export default function Banner() {
  return (
    <Link href={"hackclub.com"}>
      <img
        className="absolute top-5 left-[-1px] w-[256px] z-[999]"
        src="/banner.svg"
      ></img>
    </Link>
  );
}
