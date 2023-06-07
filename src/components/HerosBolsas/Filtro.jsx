export default function Filtro(props){
return(
<div className="flex-row w-full h-[100px] rounded-b-xl flex justify-between items-center">
    <div className="flex flex-row justify-around w-[100%]">
        {props.children}
    </div>
</div>
)
}