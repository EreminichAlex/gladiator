"use strict"

let playerName;

const submitPlayerName = document.querySelector("#name-submit");
let submitCreating;

let health;
let power;
let armor = 0;
start();
function start() {
    let playerNameTemplate = document.querySelector("input[name='warriorName']");
    submitPlayerName.addEventListener('click', () => {
        if (playerNameTemplate.value === "") {
            alert("Введите имя в поле!")
        }
        playerName = playerNameTemplate.value;

        const greetingsWindow = document.querySelector(".main-start-window");
        const greetingsTemplate = `
        <h2>Поприветствуйте - %name%!</h2>
        <p>Господин, под твое руководство попадает обычный боец с улиц по имени <u><i>%name%</i></u>, который 
        не смог найти себе место в жизни и решил стать лучшим воином 
        в мире. Мечтать не вредно, да? Так вот, вы, как богатый меценат находите 
        в нем искру, которая поможет ему пробиться в самые верха, а вам 
        обрести громкое имя - как спонсор самого великого бойца!</p>
        <button type="submit" id="after-creating-submit">Начинаем!</button>
        `

        setTimeout(() => { 
            const greetingFinalTemplate = greetingsTemplate.replace('%name%', playerName).replace('%name%', playerName);
            greetingsWindow.innerHTML = greetingFinalTemplate;
            submitCreating = document.querySelector('#after-creating-submit');
            submitCreating.addEventListener('click', ()=> {
                greetingsWindow.classList.add('block-hidden');
                const mainWindow = document.querySelector('.main-game-window');
                mainWindow.classList.remove("block-hidden");
                mainWindow.classList.add("main-game-window");
                return;
            });
        }, 500);

    });
    
}
playerSettings()
function playerSettings() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    health = getRandomInt(10,20);
    power = getRandomInt(3,6);

    const characterStataTemplate = `
    <img src="/profile-pic/user-profile.png" alt="боец">
    <p>Здоровье: %health%</p>
    <p>Сила: %power%</p>
    <p>Броня: %armor%</p>`;
    const characterStata = document.querySelector(".character");
    const setRandomCharacterStata = characterStataTemplate
                                                    .replace("%health%", health)
                                                    .replace("%power%", power)
                                                    .replace("%armor%", armor);
    characterStata.innerHTML = setRandomCharacterStata;
}









