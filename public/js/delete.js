const deleteList = async (event) => {

    event.preventDefault();

    const response = await fetch('/api/lists/list/:id', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/userinput');
    } else {
      alert('Failed to delete list');
    }
  };
  
const deleteBtn = document.getElementById('deleteList');
 deleteBtn.addEventListener('click', deleteList);



