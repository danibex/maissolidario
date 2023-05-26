
export default function BotaoMenu(props) {
    return(
        <button className={`${props.className} bg-blue-400 hover:bg-blue-500 active:bg-blue-600 p-2 rounded-lg text-white font-medium mx-1 flex flex-row justify-center items-center`}>{props.children}</button>
    )
}