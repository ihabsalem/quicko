import React from "react";
import { ContainerFluid, SSRProvider } from "react-bootstrap";
import styles from "@styles/Home.module.scss";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

export const Layout = ({ children }: any) => (
  <main className={styles.main}>
    <div className={styles.container}>
      <SSRProvider>
        <Head>
          <title>Quicko</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>

        <Header />
        <div className="px-4 pb-5">
          <div className={styles.grid}>{children}</div>
        </div>
        <Footer />
      </SSRProvider>
    </div>
  </main>
);
