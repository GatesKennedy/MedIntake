import type { AppProps } from 'next/app';
import Layout from './layout';
import Provider from '../components/utils/Provider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
