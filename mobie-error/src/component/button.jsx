const Button = ({ children, ...rest }) => {
  return (
    <button className=" w-60 bg-THEME-0 rounded-2xl p-3 hover:bg-THEME-300" {...rest}>
      {children}
    </button>
  )
}
export default Button
