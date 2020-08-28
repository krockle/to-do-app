type TodoProps = {
    title: string
}

function Todo({title}: TodoProps) {
    return <div>{title}</div>;
}

export default Todo;