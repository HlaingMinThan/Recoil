import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../states/todos";

function TodoListStats() {
    let {
        totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted
    } = useRecoilValue(todoListStatsState);
    return (
        <>
            <div>Completed todos - {totalCompletedNum}</div>
            <div>InCompleted todos - {totalUncompletedNum}</div>
            <div>All todos - {totalNum}</div>
            <div>Done Percent todos - {percentCompleted}%</div>
        </>
    )
}

export default TodoListStats;