import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Layout from "../client/components/Layout";
import { LayoutAdmin } from "@src/admin/Layout";
import "../styles/reset.css";
import clietnStyles from "../client/styles/app.css";

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const adminPathRegex = /^\/admin\/*/;

  if (route.pathname == "/admin" || adminPathRegex.test(route.pathname)) {
    return (
      <LayoutAdmin>
        <Component {...pageProps} />
      </LayoutAdmin>
    );
  }

  return (
    <Layout>
      <style jsx>{clietnStyles}</style>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
