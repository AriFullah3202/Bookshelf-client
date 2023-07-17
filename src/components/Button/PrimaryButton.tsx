/* eslint-disable @typescript-eslint/no-unsafe-assignment */


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrimaryButton = ({ children , classes, handler } : any) => {
  return (
    <button
      onClick={handler}
      className={`hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white ${classes}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton