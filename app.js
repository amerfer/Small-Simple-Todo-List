function submit() {
    let alertText = document.getElementById('alertText');
    let task = document.getElementById("addItem").value;

    // if text field is empty, red alert text and print message 
    if(task == ""){
        alertText.innerHTML = "Please enter a task";
        alert('Please enter a Task');
    }

    //if text field is written 
    else{
        // grey alert text and print message
        alertText.style.color = 'grey';
        alertText.innerHTML = "Task added";

        //adds task
        document.getElementById('tasks').innerHTML += 
        `
        <div class="task">
            <span id="taskName">
            . ${task}
            </span>

            <button class="deleteButton" type="button">Delete</button>
        </div>

        `

    }
}