"use strict"

const weaponItems = [
    {
        name: "Деревянный меч",
        itemCharacteristicsText: "+1 к силе",
        costText: "1 монета",
        cost: 1,
        itemCharacteristics: 1,
        weaponID: 1
    },
    {
        name: "Старый железный меч",
        itemCharacteristicsText: "+3 к силе",
        costText: "5 монет",
        cost: 5,
        itemCharacteristics: 3,
        weaponID: 2
    },
    {
        name: "Железный меч",
        itemCharacteristicsText: "+5 к силе",
        costText: "10 монета",
        cost: 10,
        itemCharacteristics: 5,
        weaponID: 3
    },
    {
        name: "Стальной меч",
        itemCharacteristicsText: "+12 к силе",
        costText: "20 монета",
        cost: 20,
        itemCharacteristics: 12,
        weaponID: 4
    },
    {
        name: "Стальное копье",
        itemCharacteristicsText: "+13 к силе",
        costText: "18 монет",
        cost: 18,
        itemCharacteristics: 18,
        weaponID: 5
    },
    {
        name: "Палица",
        itemCharacteristicsText: "+17 к силе",
        costText: "25 монет",
        cost: 25,
        itemCharacteristics: 17,
        weaponID: 6
    },
    {
        name: "Боевой топор",
        itemCharacteristicsText: "+20 к силе",
        costText: "33 монеты",
        cost: 33,
        itemCharacteristics: 20,
        weaponID: 7
    },
    {
        name: "Гладиус",
        itemCharacteristicsText: "+20 к силе",
        costText: "35 монет",
        cost: 35,
        itemCharacteristics: 20,
        weaponID: 8
    },
    {
        name: "Мастерский гладиус",
        itemCharacteristicsText: "+25 к силе",
        costText: "41 монета",
        cost: 41,
        itemCharacteristics: 25,
        weaponID: 9
    },
    {
        name: "Мастерский меч",
        itemCharacteristicsText: "+30 к силе",
        costText: "60 монет",
        cost: 60,
        itemCharacteristics: 30,
        weaponID: 10
    },
    {
        name: "Легендарный древний меч",
        itemCharacteristicsText: "+45 к силе",
        costText: "100 монет",
        cost: 100,
        itemCharacteristics: 45,
        weaponID: 11
    },
]
const armorItems = [
    {
        name: "Тканевая броня",
        itemCharacteristicsText: "+1 к броне",
        costText: "1 монета",
        cost: 1,
        itemCharacteristics: 1,
        armorID: 1
    },
    {
        name: "улучшенная тканевая броня",
        itemCharacteristicsText: "+2 к броне",
        costText: "2 монет",
        cost: 2,
        itemCharacteristics: 2,
        armorID: 2
    },
    {
        name: "кожаная броня",
        itemCharacteristicsText: "+4 к броне",
        costText: "10 монет",
        cost: 10,
        itemCharacteristics: 4,
        armorID: 3
    },
    {
        name: "Укрепленная кожаная броня",
        itemCharacteristicsText: "+6 к броне",
        costText: "12 монет",
        cost: 12,
        itemCharacteristics: 6,
        armorID: 4
    },
    {
        name: "Кожаная броня с железными вставками",
        itemCharacteristicsText: "+8 к броне",
        costText: "16 монет",
        cost: 16,
        itemCharacteristics: 8,
        armorID: 5
    },
    {
        name: "Железная броня",
        itemCharacteristicsText: "+14 к броне",
        costText: "30 монет",
        cost: 30,
        itemCharacteristics: 14,
        armorID: 6
    },
    {
        name: "Железный доспех",
        itemCharacteristicsText: "+18 к броне",
        costText: "40 монет",
        cost: 40,
        itemCharacteristics: 18,
        armorID: 7
    },
    {
        name: "Мастерский железный доспех",
        itemCharacteristicsText: "+25 к броне",
        costText: "80 монет",
        cost: 80,
        itemCharacteristics: 25,
        armorID: 8
    }
]


let playerName;

const submitPlayerName = document.querySelector("#name-submit");
const characterStata = document.querySelector(".character");
let submitCreating;

let health;
let power;
let armor = 0;
let experience = 0;
let level = 1;
let money = 0;

const characterStataTemplate = `
<img src="/profile-pic/user-profile.png" alt="боец"></img>
<p>Здоровье: %health%</p>
<p>Сила: %power%</p>
<p>Броня: %armor%</p>
<p>Опыт: %XP% / 10</p>
<p>Уровень: %lvl% </p>
<p>Монеты: %money%</p>
`;
let characterStataTemplateText;

start();
function start() {

    let playerNameTemplate = document.querySelector("input[name='warriorName']");
    playerNameTemplate.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          submitPlayerName.click();
        }
      });
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

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        health = getRandomInt(10,20);
        power = getRandomInt(3,6);

        characterStataTemplateText = characterStataTemplate
                        .replace("%health%", health)
                        .replace("%power%", power)
                        .replace("%armor%", armor)
                        .replace("%XP%", experience)
                        .replace("%lvl%", level)
                        .replace("%money%", money);

        characterStata.innerHTML = characterStataTemplateText;
    });
    

}

function refreshStata() {
    characterStataTemplateText = characterStataTemplate
                        .replace("%health%", health)
                        .replace("%power%", power)
                        .replace("%armor%", armor)
                        .replace("%XP%", experience)
                        .replace("%lvl%", level)
                        .replace("%money%", money);
    characterStata.innerHTML = characterStataTemplateText;
}


const weaponShopBtn = document.querySelector("#buttonWeaponShop");
const armorShopBtn = document.querySelector("#buttonArmorShop");
const shopWindow = document.querySelector(".shop-window");
const shopCloseBtn = document.querySelector("#shop-close-button");
const shopContainer = document.querySelector('.shop-window-wrapper');

weaponShopBtn.addEventListener('click', openWeaponShop);
shopCloseBtn.addEventListener('click', closeShop);

armorShopBtn.addEventListener('click', openArmorShop);


function openWeaponShop() {
    shopWindow.classList.toggle('block-hidden');
    weaponShopBtn.setAttribute('disabled','');
    const itemShopTemplate = `
    <div class="weapon-shop-item">
    <h3>%itemName%</h3>
    <p>%charText%</p>
    <p>%cost%</p>
    <button type="submit">Купить</button>
    </div>
    `;

    for (let item of weaponItems) {
        let shopItemCard = itemShopTemplate
                                    .replace("%itemName%", item.name)
                                    .replace("%charText%", item.itemCharacteristicsText)
                                    .replace("%cost%", item.costText)
        shopContainer.innerHTML += shopItemCard;
    }

}
function openArmorShop() {
    shopWindow.classList.toggle('block-hidden');
    armorShopBtn.setAttribute('disabled', '');

    const itemShopTemplate = `
    <div class="weapon-shop-item">
    <h3>%itemName%</h3>
    <p>%charText%</p>
    <p>%cost%</p>
    <button type="submit">Купить</button>
    </div>
    `;

    for (let item of armorItems) {
        let shopItemCard = itemShopTemplate
                                    .replace("%itemName%", item.name)
                                    .replace("%charText%", item.itemCharacteristicsText)
                                    .replace("%cost%", item.costText)
        shopContainer.innerHTML += shopItemCard;
    }
};


function closeShop() {
    shopWindow.classList.toggle('block-hidden');
    shopContainer.innerHTML = '';
    armorShopBtn.removeAttribute('disabled');
    weaponShopBtn.removeAttribute('disabled');
    refreshStata();
};

// -----------------------  ACTIONS -----------------

const trainBtn = document.querySelector('#train-button');
const trainWindow = document.querySelector('.train-window');
const trainWindowBtnClose = document.querySelector('#train-window-button-close');
const trainWindowBtnStart = document.querySelector('train-window-button-start');
const regulatFightBth = document.querySelector('#regular-fight-button');
const arenaFightBtn = document.querySelector('#arena-fight-button');

function trainWindowCloseOpen() {
    trainWindow.classList.toggle('block-hidden');
}
trainBtn.addEventListener('click', trainWindowCloseOpen);
trainWindowBtnClose.addEventListener('click', trainWindowCloseOpen);

