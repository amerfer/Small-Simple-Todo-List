//Function when submit
function submit() {
    let alertText = document.getElementById('alertText');
    let taskValue = document.getElementById("addItem");

    // if text field is empty
    if(taskValue.value == ""){
        
        //red alert text and print message
        alertText.style.color = 'red';
        alertText.innerHTML = "Please enter a task";
    }

    //if text field is written 
    else{

        // grey alert text and print message
        alertText.style.color = 'grey';
        alertText.innerHTML = "Task added";

        //adds task
        document.getElementById('tasks').innerHTML += 
        `
        <div id="task">
            <li id="taskName">
            ${taskValue.value}
            </li>

            <button class="deleteButton" onclick="deleteThis()" >Delete</button>
        </div>
        `
        //clears the input field
        taskValue.value = '';


    };
}

function deleteThis(){
    document.getElementById('task').remove();
};


