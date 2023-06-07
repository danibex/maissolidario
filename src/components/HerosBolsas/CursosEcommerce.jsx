export default function CursosEcommerce(props){
return(
<div className="
w-full justify-center justify-items-center bg-slate-100 p-4 
grid md:grid-cols-3 sm:grid-cols-2 gap-4">
    {props.children}
</div>
)
}