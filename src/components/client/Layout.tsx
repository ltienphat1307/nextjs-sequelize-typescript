import React from "react";
import { Helmet } from "react-helmet";
import Link from "next/link";
import Head from "next/head";

import Navigation from "./components/Navigation";
import config from "./config/siteConfig";

const coverImage = "/images/blog-cover.jpeg";
const logoImage = "/images/logo.png";

export const Layout = ({ children, bodyClass }: any) => {
  const site = {
    lang: "vn",
    title: "Code3x",
    description: "Coding, Keep Coding & Coding Forever",
    navigation: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about" },
      { label: "Contact", url: "/contact" },
    ],
  };

  const twitterUrl = `https://twitter.com/`;
  const facebookUrl = `https://www.facebook.com/`;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/client/reset.css" />
        <link rel="stylesheet" href="/styles/client/app.css" />
      </Head>
      <Helmet>
        <html lang={site.lang} />
        <body className={bodyClass} />
      </Helmet>

      <div className="viewport">
        <div className="viewport-top">
          <header
            className="site-head"
            style={{
              backgroundImage: `url(${coverImage})`,
            }}
          >
            <div className="container">
              <div className="site-mast">
                <div className="site-mast-left">
                  <Link href="/">
                    <>
                      <img
                        className="site-logo"
                        src={logoImage}
                        alt={site.title}
                      />
                      {site.title}
                    </>
                  </Link>
                </div>
                <div className="site-mast-right">
                  <a
                    href={twitterUrl}
                    className="site-nav-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="site-nav-icon"
                      src="/images/icons/twitter.svg"
                      alt="Twitter"
                    />
                  </a>
                  <a
                    href={facebookUrl}
                    className="site-nav-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="site-nav-icon"
                      src="/images/icons/facebook.svg"
                      alt="Facebook"
                    />
                  </a>
                  <a
                    className="site-nav-item"
                    href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="site-nav-icon"
                      src="/images/icons/rss.svg"
                      alt="RSS Feed"
                    />
                  </a>
                </div>
              </div>

              <div className="site-banner">
                <h1 className="site-banner-title">{site.title}</h1>
                <p className="site-banner-desc">{site.description}</p>
              </div>
              <nav className="site-nav">
                <div className="site-nav-left">
                  <Navigation data={site.navigation} navClass="site-nav-item" />
                </div>
                <div className="site-nav-right">
                  <Link href="/about">
                    <a className="site-nav-button">About</a>
                  </Link>
                </div>
              </nav>
            </div>
          </header>

          <main className="site-main">{children}</main>
        </div>

        <div className="viewport-bottom">
          {/* The footer at the very bottom of the screen */}
          <footer className="site-foot">
            <div className="site-foot-nav container">
              <div className="site-foot-nav-left">
                <Link href="/">{site.title}</Link> © 2021 &mdash; Published with{" "}
                <a
                  className="site-foot-nav-item"
                  href="https://ghost.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ghost
                </a>
              </div>
              <div className="site-foot-nav-right">
                <Navigation
                  data={site.navigation}
                  navClass="site-foot-nav-item"
                />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
