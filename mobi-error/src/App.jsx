import Button from './component/Button'
const App = () => {
	return (
		<main style={$Main}>
			<p>💀 놀라움과 신비로움이 가득한 🐒</p>
			<h2>[제목] 웹사이트 🌈</h2>
			<div style={{...$Spacer, height: '15rem'}} />
			<div style={$ButtonWrapper}>
				<Button themeColor='red'>401</Button>
				<Button themeColor='yellow'>402</Button>
				<Button themeColor='blue'>403</Button>
				<Button themeColor='green'>404</Button>
				<Button themeColor='violet'>401</Button>
				<Button themeColor='orange'>402</Button>
				<Button themeColor='gray'>403</Button>
				<Button themeColor='skyBlue'>404</Button>
			</div>
		</main>
	)
}

export default App

const $Main = {
	width: '100dvw',
	minWidth: '100dvw',
	maxWidth: '100dvw',
	height: '100dwh',
	minHeight: '100dvh',
	maxHeight: '100dvh',

	background: '#ededed',
	color: '#0a0a0a',
	fontWeight: '100',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
}
const $Spacer = {
	display: 'inline-block',
}
const $ButtonWrapper = {
	width: '100%',
	height: '5rem',
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	flexWrap: 'wrap',
	gap: '0.1rem',
}
const $Button = {
	backgroundColor: 'transparent',
	color: '#000',
}
