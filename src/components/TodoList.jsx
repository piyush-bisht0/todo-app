import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const { todos, selectedTab } = props

    const tab = selectedTab

    const filterTodosList = 
        tab === 'All'? todos:
        tab === 'Completed'? todos.filter( val => val.complete):
        todos.filter( val => !val.complete)
    
    
    return(
        <>
            {filterTodosList.map((todo, todoIndex) => {
                return(
                    <TodoCard 
                        key={todoIndex} 
                        todoIndex={todos.findIndex( val => val.input == todo.input)}
                        todo={todo}
                        {...props}
                    />
                )
            })}

        </>
    )
}