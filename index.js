const listItems = document.querySelectorAll('.list-item');
const containers = document.querySelectorAll('.container');
const resetButton = document.getElementById("reset")

resetButton.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';

let draggedItem = null;

// For each list item drag and drop APIs are used
for (let i = 0; i < listItems.length; i++) {
	const item = listItems[i];

    // Triggers when the dragging of an item is started
	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

    // Triggers when the dragging of an item is ended
	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

    // Dragged item can be placed in either of the containers
	for (let j = 0; j < containers.length; j ++) {
		const container = containers[j];

        // Triggers when the item is dragged over an container
		container.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
        // Triggers when the item entered the container in which it will be dropped
		container.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'green';
		});

        // Triggers when the item left the container in which it was there before
		container.addEventListener('dragleave', function (e) {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

        // Triggers when the item is dropped in a container
		container.addEventListener('drop', function (e) {
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}

//Triggers when the reset button is clicked. The items will be transfered to the first container and second container will be empty.
resetButton.addEventListener('click', function(){
    listItems.forEach(listItem => containers[0].append(listItem))
    resetButton.style.backgroundColor = 'blue';
    setTimeout(function () {
        resetButton.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    }, 200)
})
