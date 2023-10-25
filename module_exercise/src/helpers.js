// Function to return a randomly selected item from an array
function choice(items) {
    if (items.length === 0) {
      return undefined; // Return undefined if the array is empty
    }
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }
  
  // Function to remove and return the first matching item from an array
  function remove(items, item) {
    const index = items.indexOf(item);
    if (index !== -1) {
      return items.splice(index, 1)[0];
    }
    return undefined; // Return undefined if the item is not found
  }


  export {choice, remove}