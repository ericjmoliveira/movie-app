import { useRef } from 'react';
import { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
