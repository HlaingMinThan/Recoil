import { atom, selector } from 'recoil';

const todoListState = atom({
    key: 'TodoList',
    default: [
        // {
        //     id : 1,
        //     name : 'drink water'
        // }
    ],
});

const todoListFilterState = atom({
    key: 'TodoListFilter',
    default: 'Show All',
  });

const filteredTodoListState = selector({
    key: 'FilteredTodoList',
    get: ({get}) => {
      const filter = get(todoListFilterState);
      const list = get(todoListState);
  
      switch (filter) {
        case 'Show Completed':
          return list.filter((item) => item.isComplete);
        case 'Show Uncompleted':
          return list.filter((item) => !item.isComplete);
        default:
          return list;
      }
    },
  });
const todoListStatsState = selector({
    key: 'TodoListStatsState',
    get: ({get}) => {
      const todoList = get(todoListState);
      const totalNum = todoList.length;
      const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
      const totalUncompletedNum = totalNum - totalCompletedNum;
      const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;
      return {
        totalNum,totalCompletedNum,totalUncompletedNum,percentCompleted
      }
    },
  });

export  {todoListState,todoListFilterState,filteredTodoListState,todoListStatsState};