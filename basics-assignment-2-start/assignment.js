const task3Element = document.getElementById('task-3');

function fWithoutParam() {
    alert('What a beautiful & glory day it is!');
}
function fWithOneParam(val) {
    alert(val);
}
function fWithThreeParam(val1, val2, val3) {
    alert(`${val1} ${val2} ${val3}`);
}

fWithoutParam();
fWithOneParam('Look at that rainbow over there!');
fWithThreeParam('Hello', 'my', 'Darling!');
task3Element.addEventListener('click', fWithoutParam);