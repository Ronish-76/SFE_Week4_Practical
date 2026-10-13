// ==========================================
// ACTIVITY 2 & 4: Basic Event Handling & Error Handling
// ==========================================
const submitBtn = document.getElementById('submitBtn');
const inputField = document.getElementById('inputField');
const output = document.getElementById('output');

submitBtn.addEventListener('click', function() {
    let input = inputField.value.trim();
    if (input === "") {
        output.innerText = "Error: Input cannot be empty!";
        output.style.color = "red";
    } else {
        output.innerText = "You entered: " + input;
        output.style.color = "#10b981";
    }
});

// ==========================================
// ACTIVITY 3: Event Delegation
// ==========================================
const addBtn = document.getElementById('addBtn');
const buttonContainer = document.getElementById('buttonContainer');
let buttonCount = 0;

if (addBtn && buttonContainer) {
    addBtn.addEventListener('click', function() {
        buttonCount++;
        let newButton = document.createElement('button');
        newButton.innerText = "Dynamic Button " + buttonCount;
        buttonContainer.appendChild(newButton);
    });

    // Event delegation: attaching single listener to container
    buttonContainer.addEventListener('click', function(e) {
        if (e.target && e.target.tagName === 'BUTTON') {
            alert('You clicked ' + e.target.innerText);
        }
    });
}

// ==========================================
// ACTIVITY 5: Observer Pattern
// ==========================================
let observers = [];

function addObserver(observer) {
    observers.push(observer);
}

inputField.addEventListener('input', function() {
    let value = this.value;
    observers.forEach(function(observer) {
        observer.innerText = "Updated with: " + (value || "(empty)");
    });
});

if (buttonContainer) {
    // Adding observer buttons
    let btn1 = document.createElement('button');
    btn1.innerText = "Observer 1";
    buttonContainer.appendChild(btn1);
    addObserver(btn1);

    let btn2 = document.createElement('button');
    btn2.innerText = "Observer 2";
    buttonContainer.appendChild(btn2);
    addObserver(btn2);
}

// ==========================================
// ADDITIONAL TASK: Preventing Content Copying
// ==========================================
// Prevent text selection
document.addEventListener('selectstart', function(e) {
    // Allow text selection inside the input field so users can type and edit
    if (e.target.tagName !== 'INPUT') {
        e.preventDefault();
    }
});

// Prevent copying content
document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert("Copying is disabled on this page.");
});
