function Button({
    text,
    type="button",
    onclick,
}){
    return <button type={type} onClick={onclick}>{text}</button>
}

export default Button;