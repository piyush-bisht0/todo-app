export function Header(props){
    const { todos } = props
    const todosLength = todos.length
    const taskortasks = todosLength != 1? 'tasks' : 'task'

    return(
        <header>
            <h1 className="text-gradient" >You have {todosLength} open {taskortasks}.</h1>
        </header>
    )
}