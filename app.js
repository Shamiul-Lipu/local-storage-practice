let obj = {};

const sendInput = function (e) {
    const elementText = document.getElementById(e).value;
    if (e === `${e}`) {
        localStorage.setItem(`${e}`, elementText);
        obj[`${e}`] = elementText
    }
    // console.log(e, elementText);
    // if (e === 'name') {
    //     localStorage.setItem('name', elementText);
    //     obj['neme'] = elementText;
    //     // JSON.stringify(obj);
    // }
    // else if (e === 'email') {
    //     localStorage.setItem('email', elementText);
    //     obj['email'] = elementText;
    //     // JSON.stringify(obj);
    // }
    // else if (e === 'text') {
    //     localStorage.setItem('text', elementText);
    //     obj['text'] = elementText;
    //     // JSON.stringify(obj);
    // }
    // console.log(obj);
}

// delete
const deleteInput = function (e) {
    if (e === `${e}`) {
        localStorage.removeItem(`${e}`);
    }
    // const elementText = document.getElementById(e).value;
    // console.log(e, elementText);
}

const sendAll = () => {
    const objStringify = JSON.stringify(obj);
    localStorage.setItem('obj', objStringify);
}

// display-div
const display = () => {
    let div = document.getElementById('display-div');
    div.innerHTML = '';
    div.classList.remove('hidden');
    const getObj = localStorage.getItem('obj');
    let displayObj;
    getObj ? displayObj = JSON.parse(getObj) : '-----';
    // console.log(getObj, displayObj);
    for (const key in displayObj) {
        div.innerHTML += `<p><span class="uppercase font-semibold">${key}:</span> ${displayObj[key] ? displayObj[key] : 'no input'}</p>`;
    }
}

document.getElementById('btn-reset').addEventListener('click', function () {
    localStorage.clear();
    const div = document.getElementById('display-div');
    div.classList.add('hidden')
})