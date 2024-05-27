import { useSetRecoilState } from "recoil";
import { todoListState } from "../states/todos";
import { useState } from "react";

function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                name: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };

    const onChange = ({ target: { value } }) => {
        setInputValue(value);
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <input type="text" value={inputValue} onChange={onChange} placeholder="Add todo" />
            <button onClick={addItem}>+</button>
        </div>
    );
}

export default TodoItemCreator;

// utility for creating unique Id
let id = 0;
function getId() {
    return id++;
}