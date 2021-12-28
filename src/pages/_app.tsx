import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import React from "react";

import { Layout } from "@/components/layouts/Layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
