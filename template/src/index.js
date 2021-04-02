import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import './style'

/* eslint-disable import/no-webpack-loader-syntax */
import MD from '!babel-loader!@mdx-js/loader!./content/simple.md'
import Mixed from '!babel-loader!@mdx-js/loader!./content/mixed.mdx'

const Header = () => (
<nav>
	<header >
		<h1>Preact & MDX</h1>
		<nav>
			<Link activeClassName="active" href="/">Home</Link>&nbsp;|&nbsp; 
			<Link activeClassName="active" href="/md">Markdown</Link>&nbsp;|&nbsp;
			<Link activeClassName="active" href="/mixed">Mixed</Link>
		</nav>
	</header>
</nav>
)

const Home = () => (
	<div><p>Hello, World !</p></div>
)

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<MD path="/md/" />
			<Mixed path="/mixed/" />
		</Router>
	</div>
)

export default App