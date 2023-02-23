let tbody = document.querySelector('tbody')
let tableBtn = document.querySelectorAll('.section__btn')
let isPlite = false
let table = document.createElement('table')
let cont = document.querySelector('.container__plite')
let plite = document.querySelector('.plite')
let form = document.forms.task
let openMOdal = document.querySelector('.open-btn')
let closeMOdal = document.querySelector('.close-btn')
let modal = document.querySelector('.modal')
let modalBg = document.querySelector('.modal__bg')

let dashboard = [
    {
        id: Math.random(),
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: new Date().toLocaleDateString("de-DE"),
        time: new Date().toLocaleTimeString("de-DE"),
        completed: 'Не выполнено'
    },
    {
        id: Math.random(),
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: new Date().toLocaleDateString("de-DE"),
        time: new Date().toLocaleTimeString("de-DE"),
        completed: 'Не выполнено'
    },
    {
        id: Math.random(),
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: new Date().toLocaleDateString("de-DE"),
        time: new Date().toLocaleTimeString("de-DE"),
        completed: 'Не выполнено'
    },
    {
        id: Math.random(),
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: new Date().toLocaleDateString("de-DE"),
        time: new Date().toLocaleTimeString("de-DE"),
        completed: 'Не выполнено'
    },
    {
        id: Math.random(),
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: new Date().toLocaleDateString("de-DE"),
        time: new Date().toLocaleTimeString("de-DE"),
        completed: 'Не выполнено'
    },
]

openMOdal.onclick = () => {
    modal.style.display = 'block'
    modalBg.style.display = 'block'
}

closeMOdal.onclick = () => {
    modal.style.display = 'none'
    modalBg.style.display = 'none'
}

form.onsubmit = (event) => {
    event.preventDefault();

    let todo = {
        id: Math.random(),
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: new Date().toLocaleDateString("de-DE"),
        time: new Date().toLocaleTimeString("de-DE"),
        completed: 'Не выполнено'
    }

    let fm = new FormData(form);

    fm.forEach((value, key) => {
        todo[key] = value;
    });


    dashboard.push(todo)
    createTr(dashboard)

    console.log(dashboard);;
};



tableBtn.forEach((btn) => {
    btn.onclick = () => {
        tableBtn.forEach(el => el.classList.remove('active'))
        btn.classList.add('active')
    }
})

const reload = (arr) => {
    table.innerHTML = '';
    cont.innerHTML = '';

    for (let item of arr) {
        if (isPlite) {
            createBox(item)
        } else {
            createTr()
        }
    }
};

plite.onclick = () => {
    isPlite = !isPlite
    reload(dashboard)
}



function createTr() {
    tbody.innerHTML = '';

    for (let item of dashboard) {
        let tr = document.createElement('tr')
        let titleTd = document.createElement('td')
        let descTd = document.createElement('td')
        let dateTd = document.createElement('td')
        let timeTd = document.createElement('td')
        let completesTd = document.createElement('td')

        titleTd.innerHTML = item.title
        descTd.innerHTML = item.description
        dateTd.innerHTML = item.date
        timeTd.innerHTML = item.time
        completesTd.innerHTML = item.completed

        tbody.append(tr)
        tr.append(titleTd, descTd, dateTd, timeTd, completesTd)
    }
}

createTr()
function createBox(item) {
    let box = document.createElement('div')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let div = document.createElement('div')
    let spanOne = document.createElement('span')
    let spanTwo = document.createElement('span')
    let spanThree = document.createElement('span')

    box.classList.add('box')

    h2.innerHTML = item.title
    p.innerHTML = item.description
    spanOne.innerHTML = item.date
    spanTwo.innerHTML = item.time
    spanThree.innerHTML = item.completed

    div.append(spanOne, spanTwo)
    box.append(h2, p, div, spanThree)
    cont.append(box)
}