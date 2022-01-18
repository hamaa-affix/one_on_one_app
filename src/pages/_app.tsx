import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import React from "react";
import { RecoilRoot } from "recoil";

import { Layout } from "@/components/layouts/Layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp
