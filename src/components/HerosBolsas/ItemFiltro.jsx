export default function ItemFiltro(props) {
return(
<div className="flex flex-col justify-center items-center">
    <p className="mb-2 text-lg font-semibold">{props.titulo}</p>
    <select name={props.selectNome} className="w-auto h-[35px] rounded-2xl text-center">
        {props.children}
    </select>
</div>
)
}