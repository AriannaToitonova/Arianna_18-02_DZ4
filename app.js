const btn = document.querySelector('button')
btn.addEventListener('click',() => {
    const request = new XMLHttpRequest(); //создание запроса
    request.open('GET','data.json'); //указываем метод запроса и указываем путь запроса 
    request.setRequestHeader('Content-type','application/json'); //добавляем тип данных 
    request.send(); //отправка запроса
    request.addEventListener('load',() => {
        console.log(JSON.parse(request.response));
        const data =(JSON.parse(request.response));
        document.querySelector('.definition').innerHTML = data.definition;
        document.querySelector('.types').innerHTML = data.types;
        document.querySelector('.ways').innerHTML = data.ways;
        document.querySelector('.courses').innerHTML = data.courses;
    })
})
