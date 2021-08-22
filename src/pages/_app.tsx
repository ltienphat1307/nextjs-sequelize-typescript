import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Layout } from "@src/components/client/Layout";
import { LayoutAdmin } from "@src/components/admin/Layout";

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
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
