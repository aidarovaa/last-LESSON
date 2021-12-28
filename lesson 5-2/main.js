const input = document.getElementById('task_input');
const button = document.getElementById('add_task');

const taskList = [];

function render(){
    for(let i = 0; i < taskList.length; i++){
        const task = document.createElement('div');
        task.setAttribute('class', 'task');
        task.setAttribute('id', i);

        const text = document.createElement('p');
        text.innerText = taskList[i].task;

        task.append(text);

        const div = document.createElement('div');
        const buttonDelete = document.createElement('button');
        buttonDelete.innerText = "Delete";
        buttonDelete.setAttribute('id', i);
        const buttonChange = document.createElement('button');
        buttonChange.innerText = "Change";
        buttonChange.setAttribute('id', i);
        div.append(buttonDelete, buttonChange);

        task.append(div);
        document.querySelector('.task_list').append(task)
    }
}

button.onclick = () => {

    if(input.value.length >= 10){
        const obj = {
            id: taskList.length,
            task: input.value
        };
        taskList.push(obj);
        render();
    }else{
        console.log("text min length 20!")
    }

}

//input.onchange = (e) => {
//    console.log(e.target.value)
//}