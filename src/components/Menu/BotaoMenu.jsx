export default function BotaoMenu(props) {
    return(
        <button className={`${props.className} md:w-auto w-[50%] my-2 md:my-0 bg-[#147BA7] hover:bg-blue-800 active:bg-blue-900 p-2 rounded-lg text-white font-medium mx-1 flex flex-row justify-center items-center`}>{props.children}</button>
    )
}