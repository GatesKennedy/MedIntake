import { Inter } from 'next/font/google';
import Provider from '../components/utils/Provider';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Dental Risk',
	description: 'Dental Assessment Intake Form',
};
export type ChildProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: ChildProps) {
	return (
		<html
			lang='en'
			className={inter.className}
		>
			<body style={{ height: '100vh', margin: 0, padding: 0 }}>
				<Provider>
					<Header />
					<main id={'main-root'}>{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
