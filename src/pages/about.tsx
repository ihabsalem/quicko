import type { NextPage } from "next";
import Image from "next/image";

const About: NextPage = () => (
  <footer>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{" "}
      <span>
        <Image src="/logo.png" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
);

export default About;
