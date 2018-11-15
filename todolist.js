  // get all the buttons to find the button without an id getElementsByTagName
  var buttons = document.getElementsByTagName('button');
  //get our info for later use
  let txtNewItemToAdd = document.getElementById("new-task");
  // declare our add item button here so it's not out of scope
  let addItemButton;
  // search through all buttons for the one were looking for
  for (var index = 0, len = buttons.length; index < len; ++index) {
    // assume the first "add" innerHTML is the correct button
    if (buttons[index].innerHTML == "Add"){
        // get our button
        addItemButton = buttons[index];
        /// set upt the function to handle the click event
        addItemButton.onclick = function() { addNewItem(); };
      }
  }

  // get all the "edit" buttons from the class
  let editButtons = document.getElementsByClassName("edit");

  // loop thrugh all the buttons and link them to the swapEditMode function
  for (var iIndex = 0; iIndex < editButtons.length; iIndex++) {
    editButtons[iIndex].addEventListener("click", swapEditMode);
  }
  // get all the "delete" buttons from the class
  let deleteButtons = document.getElementsByClassName("delete");

  // loop thrugh all the buttons and link them to the delete functions
  for (var iIndex = 0; iIndex < deleteButtons.length; iIndex++) {
    //alert("iIndex = " + iIndex);
    if (iIndex < 2){
      deleteButtons[iIndex].addEventListener("click", deleteItemFromToDo);
    }else{
      // index 2 is a special case because it's already in the completed items list
      deleteButtons[iIndex].addEventListener("click", itemRemovedFromCompleted);
    }
  }
    // get all the checkboxes (we'll only need the first two)
    let checkboxes = document.getElementsByTagName('input');
    // create a counter so we know how many checkboxes we've connected
    let iCounter = 0;
    // loop thrugh all the buttons and link them to the delete functions
    for (var iIndex = 0; iIndex < checkboxes.length; iIndex++) {
    //  alert("iIndex = " + iIndex);
      if( checkboxes[iIndex].getAttribute('type')=='checkbox' && iCounter < 2){
        // increment the counter
        iCounter ++
        // connect the check box to the completed task function
        checkboxes[iIndex].addEventListener("click", itemCompleted);
      }
    }


// function to handle the click event
function addNewItem(){
  // make sure we have valid text for the item
  if (txtNewItemToAdd.value == "")
  {
    // tell the user to try again
    alert("Item name can not be blank")
  }else{
    // get the list items
    let toDoListItems = document.getElementById("incomplete-tasks");
    // create the container for our new list item
    let toDoListNewItem = document.createElement("li");
    // get the index of the new item
    let newToDoItemIndex = toDoListItems.length + 1;
    // create all the elements to add to our new list item
    let newInput = document.createElement('input');
    let newLabel = document.createElement("Label");
    let newTextBox = document.createElement("input");
    let newEditButton  = document.createElement("button");
    let newDeleteButton = document.createElement("button");

    // set all the properties for our new items
    newInput.type = "checkbox";
    newInput.addEventListener("click", itemCompleted);
    newLabel.innerHTML = txtNewItemToAdd.value;
    newTextBox.type = "text";
    newTextBox.id = "to_do_text"
    newTextBox.innerHTML = txtNewItemToAdd.value;
    newEditButton.class ="edit";
    newEditButton.innerHTML = "Edit";
    newDeleteButton.class ="delete";
    newDeleteButton.innerHTML = "Delete";
    // link the edit button to the function to editMode
    newEditButton.addEventListener("click", swapEditMode);
    // link the delete button to the function to delete
    newDeleteButton.addEventListener("click", deleteItemFromToDo);
    // add all our new items to the new container
    toDoListNewItem.appendChild(newInput);
    toDoListNewItem.appendChild(newLabel);
    toDoListNewItem.appendChild(newTextBox);
    toDoListNewItem.appendChild(newEditButton);
    toDoListNewItem.appendChild(newDeleteButton);
    toDoListItems.appendChild(toDoListNewItem);

    // clear out the "ADD ITEM" text field
    txtNewItemToAdd.value   = "";
  }// end of else
}

function itemCompleted(e){
  // get the value of the check box
  let checkBox = e.target.parentElement.children[0];
  //alert(checkBox.checked);
  if (checkBox.checked == true){
    // get the target (the label that we need to strike through is item 1)
    let target = e.target.parentElement.children[1];
    // get the "delete" button, it is element 3
    let deleteButton = e.target.parentElement.children[4];
    // get the List Item from the target's parent
    let parentLI = e.target.parentElement;
    // get the Unsorted List object from th eparent of the List Item
    let parentUL = parentLI.parentElement;
    // get the Unsorted list of the completed tasks
    let completedItems = document.getElementById("completed-tasks");
    // append the (now) completed task to the completed task list
    completedItems.appendChild(parentLI);
    // link the delete button recursivly to this function to delete the list items
    deleteButton.addEventListener("click", itemRemovedFromCompleted);
    // remove the completed task from the incomplete task list
    parentUL.removeChild( parentLI );
    // set the text to strikthrough
    target.innerHTML = target.innerHTML.strike();
  }else{
    let ul = document.getElementById("incomplete-tasks");
    // get the List Item from the target's parent
    let parentLI = e.target.parentElement;
    // get the Unsorted List object from th eparent of the List Item
    let parentUL = parentLI.parentElement;
    // add our list item to the parent
    ul.appendChild(parentLI);
  }
}
function itemRemovedFromCompleted(e){
  // get the List Item from the target's parent
  let parentLI = e.target.parentElement;
  // get the Unsorted list of the completed tasks
  let completedItems = document.getElementById("completed-tasks");
  // append the (now) completed task to the completed task list
  completedItems.removeChild(parentLI);
}
function deleteItemFromToDo(e){
  // get the List Item from the target's parent
  let parentLI = e.target.parentElement;
  // get the Unsorted list of the completed tasks
  let completedItems = document.getElementById("incomplete-tasks");
  // append the (now) completed task to the completed task list
  completedItems.removeChild(parentLI);
}
function swapEditMode(e){
  // get the List Item from the target's parent
  let parentLI = e.target.parentElement;
  // swap edit modes
  if (parentLI.getAttribute("class") == "editMode"){
    // change the List Item's property to class=""
    parentLI.setAttribute("class", "");
    // copy our new text over to the label
    parentLI.children[1].innerHTML = parentLI.children[2].value;
    parentLI.children[3].innerHTML = "edit";
  }else{
    // change the List Item's property to class="editMode"
    parentLI.setAttribute("class", "editMode");
    // copy the old label over to the text field
    parentLI.children[2].value = parentLI.children[1].innerHTML;
    parentLI.children[3].innerHTML = "save";
  }
}
