export default function BotaoFiltro(props) {
    return (
      <button
        className={`
          hover:bg-blue-400 hover:text-white hover:underline 
          active:shadow-none text-green-700 flex justify-center 
          items-center whitespace-nowrap w-[200px] font-semibold 
          text-xl py-2 px-20 bg-white my-2 rounded-3xl shadow-xl
          ${props.active ? `bg-blue-600 text-white shadow-none` : ""}
        `}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
  