export default function InputForm(props) {
    return(
        <input type={props.tipo} placeholder={props.dica}
        className={`p-2 m-2 rounded-2xl ${props.className}`}
        />
    )
}