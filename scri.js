document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy login validation
    if (username === 'admin' && password === 'password') {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('bookManagementSection').style.display = 'block';
        document.getElementById('loginLink').style.display = 'none';
        document.getElementById('logoutLink').style.display = 'inline';
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('logoutLink').addEventListener('click', function() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('bookManagementSection').style.display = 'none';
    document.getElementById('loginLink').style.display = 'inline';
    document.getElementById('logoutLink').style.display = 'none';
});

function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const table = document.getElementById('bookTable').getElementsByTagName('tbody')[0];

    const row = table.insertRow();
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const actionsCell = row.insertCell(2);

    titleCell.textContent = title;
    authorCell.textContent = author;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        editBook(this);
    };
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        deleteBook(this);
    };
    actionsCell.appendChild(deleteButton);

    // Clear input fields
    document.getElementById('bookForm').reset();
}

function editBook(button) {
    const row = button.parentNode.parentNode;
    const title = row.cells[0].textContent;
    const author = row.cells[1].textContent;

    document.getElementById('bookTitle').value = title;
    document.getElementById('bookAuthor').value = author;

    deleteBook(button);
}

function deleteBook(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}