// Mock database
const students = {
    '1001': { name: 'Alice Johnson', assignments: [ { title: 'Math Homework', grade: 'A' }, { title: 'Science Project', grade: 'B+' } ] },
    '1002': { name: 'Bob Smith', assignments: [ { title: 'Math Homework', grade: 'B' }, { title: 'Science Project', grade: 'A-' } ] },
    '1003': { name: 'Charlie Lee', assignments: [ { title: 'Math Homework', grade: 'C+' }, { title: 'Science Project', grade: 'B' } ] }
};

const loginForm = document.getElementById('login-form');
const loginContainer = document.getElementById('login-container');
const portalContainer = document.getElementById('portal-container');
const loginError = document.getElementById('login-error');
const studentName = document.getElementById('student-name');
const assignmentsTable = document.getElementById('assignments-table');
const logoutBtn = document.getElementById('logout-btn');

document.addEventListener('DOMContentLoaded', function() {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const uid = document.getElementById('uid').value.trim();
        if (students[uid]) {
            showPortal(uid);
        } else {
            loginError.textContent = 'Invalid UID. Please try again.';
            loginError.style.display = 'block';
        }
    });

    logoutBtn.addEventListener('click', function() {
        portalContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        loginForm.reset();
    });
});

function showPortal(uid) {
    loginContainer.style.display = 'none';
    portalContainer.style.display = 'block';
    loginError.style.display = 'none';
    const student = students[uid];
    studentName.textContent = student.name;
    assignmentsTable.innerHTML = '';
    student.assignments.forEach(a => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${a.title}</td><td>${a.grade}</td>`;
        assignmentsTable.appendChild(row);
    });
}
