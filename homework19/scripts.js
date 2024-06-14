// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
function task1() {
    let findPlaceForParagraphs = document.querySelector(".numbers");
    for (let i = 100; i >= 50; i -= 10) {
        let createParagraphs = document.createElement("p");
        createParagraphs.innerText = i;
        findPlaceForParagraphs.append(createParagraphs);
    }
}
task1();

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
function task2() {
    let stringsArray = ["Илья", "не соблюдает", "дедлайны", "и", "ему", "стыдно"];
    let findPlaceForStrings = document.querySelector(".strings_container");
    for (let i = 0; i < stringsArray.length; i++) {
        const addParagraph = document.createElement("p");
        addParagraph.innerText = stringsArray[i];
        findPlaceForStrings.append(addParagraph);
    }
}
task2();

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

function task3() {
    const people = [
        {
            first_name: "Илья",
            last_name: "Иванов",
            age: 25
        },
        {
            first_name: "Мария",
            last_name: "Смирнова",
            age: 30
        },
        {
            first_name: "Анна",
            last_name: "Кузнецова",
            age: 15
        },
        {
            first_name: "Петр",
            last_name: "Соколов",
            age: 28
        },
        {
            first_name: "Елена",
            last_name: "Попова",
            age: 35
        },
        {
            first_name: "Алексей",
            last_name: "Лебедев",
            age: 40
        },
        {
            first_name: "Ольга",
            last_name: "Петрова",
            age: 17
        },
        {
            first_name: "Дмитрий",
            last_name: "Сидоров",
            age: 16
        },
        {
            first_name: "Наталья",
            last_name: "Морозова",
            age: 15
        },
        {
            first_name: "Сергей",
            last_name: "Васильев",
            age: 14
        }
    ];
    for (let i = 0; i < people.length; i++) {
        if (people[i].age>=18) {
            const container = document.querySelector(".users_container")
            const card = document.createElement("div")
            card.classList.add("user_card")
            
            const paragraph1 = document.createElement("p")
            const paragraph2 = document.createElement("p")
            const paragraph3 = document.createElement("p")

            paragraph1.innerText = (`Имя: ${people[i].first_name}`)
            paragraph2.innerText = (`Фамилия: ${people[i].last_name}`)
            paragraph3.innerText = (`Возраст: ${people[i].first_name}`)

            
            card.appendChild(paragraph1)
            card.appendChild(paragraph2)
            card.appendChild(paragraph3)
            container.append(card)
        }
        
    }
}
task3();
