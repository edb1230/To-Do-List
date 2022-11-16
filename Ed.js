let i = 0;

    document.addEventListener('click', (e) => {
        let elementId = e.target.id;
        let num = elementId.charAt(elementId.length-1);
        if (e.target.innerHTML === 'Confirm'){
            const buttonChange = document.getElementById("cb"+num);
            buttonChange.classList.replace('btn-success', 'btn-primary');
            buttonChange.innerHTML = 'Edit';
            const textChange = document.getElementById("it"+num);
            textChange.setAttribute('readonly',"");
            const buttonEnable = document.querySelector(".btn-dark");
            buttonEnable.removeAttribute('disabled',"");
            document.querySelectorAll('button.btn-primary').forEach(elem => {
               let editButtonId = elem.id;
               let num = editButtonId.charAt(editButtonId.length-1);
               if(document.getElementById("cbb"+num).checked === false) {
                elem.disabled = false;
               }
               else{
                elem.disabled = true;
               }
            });
            document.querySelectorAll('.form-check-input').forEach(elem => {
                elem.disabled = false;
             });
        }
        else if (e.target.innerHTML === 'Edit') {
            let buttonId = "cb"+num;
            let inputTextId = "it"+num;
            const buttonChange2 = document.getElementById(buttonId);
            buttonChange2.classList.replace('btn-primary', 'btn-success');
            buttonChange2.innerHTML = 'Confirm';
            const textChange2 = document.getElementById(inputTextId);
            textChange2.removeAttribute('readonly',"");
            document.querySelectorAll('button.btn-primary').forEach(elem => {
                elem.disabled = true;
            });
            document.querySelectorAll('.form-check-input').forEach(elem => {
                elem.disabled = true;
            });
            const buttonDisable = document.querySelector(".btn-dark");
            buttonDisable.setAttribute('disabled',"");
        }
        else if (e.target.innerHTML === 'Delete') {
            const deleteTask = document.getElementById(num);
            deleteTask.remove();
            const buttonEnable2 = document.querySelector(".btn-dark");
            buttonEnable2.removeAttribute('disabled',"");
        }
        else if (e.target.innerHTML === 'Add Task') {
            i++;
            const newTask = document.createElement('div');
            newTask.classList.add('row');
            newTask.setAttribute('id', i);
            
            const checkBoxArea = document.createElement('div');
            checkBoxArea.classList.add('col-1');
            checkBoxArea.classList.add('form-check');
            checkBoxArea.setAttribute('id', 'cBA'+i);

            const inputArea = document.createElement('div');
            inputArea.classList.add('form-group');
            inputArea.classList.add('col-10');
            inputArea.classList.add('col-sm-11');
            inputArea.classList.add('col-md-8');
            inputArea.classList.add('col-lg-8');
            inputArea.setAttribute('id', 'iA'+i);

            const inputText = document.createElement('textarea');
            inputText.classList.add("form-control");
            inputText.setAttribute('type', 'text');
            inputText.setAttribute('placeholder', "New Task");
            inputText.setAttribute('id', 'it'+i);
            inputText.classList.add('text-wrap');
            inputText.classList.add("rows","1");

            const buttonArea = document.createElement('div');
            buttonArea.classList.add('col-xl-3');
            buttonArea.classList.add('col-lg-3');
            buttonArea.classList.add('col-md-3');
            buttonArea.classList.add('col-sm-4');
            buttonArea.classList.add('col-6');
            buttonArea.classList.add('buttons');
            buttonArea.setAttribute('id', 'bA'+i);

            const confirmButton = document.createElement('button');
            confirmButton.classList.add("btn");
            confirmButton.classList.add("btn-success");
            confirmButton.innerHTML = "Confirm";
            confirmButton.setAttribute('type','button');
            confirmButton.setAttribute('id', 'cb'+i);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn');
            deleteButton.classList.add('btn-danger');
            deleteButton.innerHTML = "Delete";
            deleteButton.setAttribute('type','button');
            deleteButton.setAttribute('id', 'db'+i);

            const checkButton = document.createElement('input')
            checkButton.classList.add('form-check-input');
            checkButton.setAttribute('type', 'checkbox');
            checkButton.setAttribute('id', 'cbb'+i);
            checkButton.setAttribute('value', "");
            checkButton.setAttribute('disabled', "");

            const buttonDisable = document.querySelector(".btn-dark");
            buttonDisable.setAttribute('disabled',"");

            checkBoxArea.appendChild(checkButton);
            inputArea.appendChild(inputText);
            buttonArea.appendChild(confirmButton);
            buttonArea.appendChild(deleteButton);
            newTask.appendChild(checkBoxArea);
            newTask.appendChild(inputArea);
            newTask.appendChild(buttonArea);
            document.getElementById('tasks').appendChild(newTask);

            document.querySelectorAll('button.btn-secondary').forEach(elem => {
                elem.disabled = true;
            });
            document.querySelectorAll('.form-check-input').forEach(elem => {
                elem.disabled = true;
             });
        }
        else if (e.target.type === "checkbox") {
            const textChange = document.getElementById("it"+num);
            const firstButton = document.getElementById("cb"+num);
            if (e.target.checked) {
                textChange.style.textDecoration = "line-through";
                textChange.style.fontStyle = "italic";
                firstButton.setAttribute('disabled',"");
                textChange.style.color = "grey";
                textChange.style.opacity = 0.7;
            }
            else{
                textChange.style.fontStyle = "normal";
                textChange.style.textDecoration = "none";
                firstButton.removeAttribute('disabled',"");
                textChange.style.color = "black";
                textChange.style.opacity = 1;
            }
        }
    });

    

