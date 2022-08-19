let toDoList = {
    'to run': 'in progress',
    'to buy bread': 'in progress',
    'to drink a cup of coffee': 'done',
};


function addTask(list, task, status) {
    return list[task] = status;
}

function changeStatus(list, task, status) {
    return list[task] = status;
}

function showList(list) {
    return console.log(list);;
}

function deleteTask(list ,task) {
    delete list[task];
}

showList(toDoList);
addTask(toDoList, 'to make a bed', 'in progress');
showList(toDoList);
changeStatus(toDoList, 'to run', 'done');
showList(toDoList);
deleteTask(toDoList, 'to drink a cup of coffee');
showList(toDoList);