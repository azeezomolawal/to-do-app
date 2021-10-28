let addTask = document.getElementById('addTask');
let pending = document.getElementById('pending');
let progress = document.getElementById('progress');
let completed = document.getElementById('completed');
let task = document.getElementById('task');
let date = document.getElementById('date');
let priority = document.getElementById('priority');



addTask.addEventListener('click', function () {

    if (task.value !== "" && date.value !== "" && priority.value !== "") {
        let division = document.createElement('div');
        let division2 = document.createElement('div');
        let division3 = document.createElement('div');
        let paragraph = document.createElement('p');
        let paragraph2 = document.createElement('p');
        let paragraph3 = document.createElement('p');
        let pick = document.createElement('button');
        let remove = document.createElement('button');



        division.classList.add('create-task');
        division2.classList.add('created-tasks');
        paragraph.classList.add('created-tasks');
        paragraph2.classList.add('created-tasks');
        paragraph3.classList.add('created-tasks');
        pick.classList.add('pick');
        remove.classList.add('pick');

        pending.appendChild(division);
        division.appendChild(division2);

        division2.appendChild(paragraph);
        paragraph.innerText = task.value;
        task.value = "";

        division2.appendChild(paragraph2);
        paragraph2.innerText = date.value;
        date.value = "";

        division2.appendChild(paragraph3);
        paragraph3.innerText = priority.value;
        priority.value = "";

        division.appendChild(division3);
        division3.appendChild(pick);
        division3.appendChild(remove);

        pick.innerText = "Start Task";
        remove.innerText = "Remove Task";

        pick.addEventListener('click', function () {
            pending.removeChild(division);
            progress.appendChild(division);
        
            pick.innerText = "Complete";


            pick.addEventListener('click', function () {
                progress.removeChild(division);
                completed.appendChild(division);
                pick.innerText = "Back to Pending";
        
            })
        })

        
        remove.addEventListener('click', function () {
            pending.removeChild(division);
        })
    
        remove.addEventListener('click', function () {
            pending.removeChild(division);
        })

        remove.addEventListener('click', function () {
            pending.removeChild(division);
        })

    }

})


