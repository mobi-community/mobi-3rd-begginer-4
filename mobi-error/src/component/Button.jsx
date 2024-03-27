const Button = ({themeColor, children, ...rest}) => {
	return (
		<button
			style={{...$Button, color: themeColor, borderColor: themeColor}}
			{...rest}
		>
			{children}
		</button>
	)
}
export default Button

const $Button = {
	width: '12rem',
	height: '8rem',
	backgroundColor: 'transparent',
	borderRadius: '3rem',
	borderWidth: '0.1rem',
	borderStyle: 'solid',
	textShadow: '0rem 0rem 0.5rem black',
	boxShadow: '0rem 0rem 0.5rem black',
}
