import Head from 'next/head';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';

export default function Home() {
	return (
		<div>
			<Head>
				<title>HippoKite</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<SideNav />
				<TopNav />
				<main>
					<h1 className="title">
						Welcome to <a href="https://nextjs.org">Next.js!</a>
					</h1>
					<p className="description">
						Get started by editing <code>pages/index.js</code>
					</p>
				</main>
			</div>
		</div>
	);
}
