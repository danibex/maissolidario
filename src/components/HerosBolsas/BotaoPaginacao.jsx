export default function BotaoPaginacao(props) {
    return(
        <button className={`${props.className} flex flex-row justify-center items-center m-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white hover:underline shadow-xl active:shadow-none`}>{props.children}</button>
    )
}