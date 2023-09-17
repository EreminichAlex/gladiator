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
const playerWeaponInventory = [];
const playerArmorInventory = [];

const regularEnemiesName = [
    "Луций", "Марк", "Александр", "Базил", "Вергилий", "Габит", 
"Райан", "Артолио", "Рэйли", "Логан", "Ален", "Арман", "Гастон", "Бонифас", "Доминик", 
"Климент", "Наполеон", "Ержан", "Север", "Саломон", "Роберт", "Юта", "Фридрих"
];


let playerName;

const submitPlayerName = document.querySelector("#name-submit");
const characterStata = document.querySelector(".character");
const mainWindow = document.querySelector('.main-game-window');
let submitCreating;

let health;
let power;
let armor = 1;
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
                mainWindow.classList.remove("block-hidden");
                mainWindow.classList.add("main-game-window");
                return;
            });
        }, 500);

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
    if (experience >= 10) {
        level++;
        experience = experience - 10;
        health += statisticGenerationByLevel(level).health - health;
        power += statisticGenerationByLevel(level).power - power;
    }
}

// --------- SHOP <---------------------------------------------

const weaponShopBtn = document.querySelector("#buttonWeaponShop");
const armorShopBtn = document.querySelector("#buttonArmorShop");
const shopWeaponWindow = document.querySelector(".shop-weapon-window");
const shopArmorWindow = document.querySelector(".shop-armor-window");
const shopWeaponCloseBtn = document.querySelector("#shop-weapon-close-button");
const shopArmorCloseBtn = document.querySelector("#shop-armor-close-button");
const shopWeaponContainer = document.querySelector('.shop-weapon-window-wrapper');
const shopArmorContainer = document.querySelector('.shop-armor-window-wrapper');

weaponShopBtn.addEventListener('click', openWeaponShop);
shopWeaponCloseBtn.addEventListener('click', closeShop);
shopArmorCloseBtn.addEventListener('click', closeShop);

armorShopBtn.addEventListener('click', openArmorShop);

createWeaponShop();


function createWeaponShop() {
    const itemShopTemplate = `
    <div class="weapon-shop-item">
    <h3>%itemName%</h3>
    <p>%charText%</p>
    <p>%cost%</p>
    <button type="submit" id="weapon-buy-button">Купить</button>
    </div>
    `;

    for (let item of weaponItems) {
        let shopItemCard = itemShopTemplate
                                    .replace("%itemName%", item.name)
                                    .replace("%charText%", item.itemCharacteristicsText)
                                    .replace("%cost%", item.costText)
        shopWeaponContainer.innerHTML += shopItemCard;
    }
}
createArmorShop();
function createArmorShop() {
    const itemShopTemplate = `
    <div class="weapon-shop-item">
    <h3>%itemName%</h3>
    <p>%charText%</p>
    <p>%cost%</p>
    <button type="submit" id="armor-buy-button">Купить</button>
    </div>
    `;

    for (let item of armorItems) {
        let shopItemCard = itemShopTemplate
                                    .replace("%itemName%", item.name)
                                    .replace("%charText%", item.itemCharacteristicsText)
                                    .replace("%cost%", item.costText)
        shopArmorContainer.innerHTML += shopItemCard;
    }
}

function openWeaponShop() {
    shopWeaponWindow.classList.toggle('block-hidden');
    weaponShopBtn.setAttribute('disabled','');
}

function openArmorShop() {
    shopArmorWindow.classList.toggle('block-hidden');
    armorShopBtn.setAttribute('disabled', '');
};

function closeShop() {
    shopWeaponWindow.classList.add('block-hidden');
    shopArmorWindow.classList.add('block-hidden');
    armorShopBtn.removeAttribute('disabled');
    weaponShopBtn.removeAttribute('disabled');
    refreshStata();
};

// SHOP BUYING
const weaponBuyBtn = document.querySelectorAll("#weapon-buy-button");
const armorBuyBtn = document.querySelectorAll('#armor-buy-button');


for (let i = 0 ; i < weaponBuyBtn.length; i++) {
    weaponBuyBtn[i].addEventListener('click', weaponBuyingFunction);
    function weaponBuyingFunction() {
        while (true) {
            if (money < weaponItems[i].cost) {
                alert("У вас недостаточно денег!");
            }  else if (money >= weaponItems[i].cost){
                weaponBuyBtn[i].setAttribute('disabled', '');
                playerWeaponInventory.push(i);
                weaponBuyBtn[i].innerHTML = "Куплено";
                money -= weaponItems[i].cost;
                refreshStata();
            }
        break;}
    }
}

for (let i = 0 ; i < armorBuyBtn.length; i++) {
    armorBuyBtn[i].addEventListener('click', armorBuyingFunction);
    function armorBuyingFunction() {
        while (true) {
            if (money < armorItems[i].cost) {
                alert("У вас недостаточно денег!");
            }  else if (money >= armorItems[i].cost){
                armorBuyBtn[i].setAttribute('disabled', '');
                playerArmorInventory.push(i);
                armorBuyBtn[i].innerHTML = "Куплено";
                money -= armorItems[i].cost;
                refreshStata();
            }
        break;}
    }
}



// -----------------------  ACTIONS -----------------

const trainBtn = document.querySelector('#train-button');
const trainWindow = document.querySelector('.train-window');
const trainWindowBtnClose = document.querySelector('#train-window-button-close');
const trainWindowBtnStart = document.querySelector('#train-window-button-start');
const regulatFightBth = document.querySelector('#regular-fight-button');
const arenaFightBtn = document.querySelector('#arena-fight-button');
const trainWindowInfo = document.querySelector('.train-window-after-info');

const regularFightWindow = document.querySelector('.regular-fight-window');
const regularFightStartBtn = document.querySelector('#regular-fights-button-start');
const regularFightCancelBtn = document.querySelector('#regular-fights-button-cancel');
const regularFightPlayerInfoContainer = document.querySelector(".player-info-regular-fight-window");

function trainWindowCloseOpen() {
    trainWindow.classList.toggle('block-hidden');
    refreshStata();
};
trainBtn.addEventListener('click', trainWindowCloseOpen);
trainWindowBtnClose.addEventListener('click', trainWindowCloseOpen);

// TRAIN action

trainWindowBtnStart.addEventListener('click', () => {
    refreshStata();
    if (money < 5) {
        alert("У вас недостаточно денег!");
        trainWindowCloseOpen();
    } else {
        trainWindowInfo.classList.toggle('block-hidden');
        money -= 5;
        let trainXpPlus = getRandomInt(1,3);
        let trainInfo = (trainXpPlus === 1) ? `Вы неплохо поработали и заработали 1xp` 
        : (trainXpPlus === 2) ? `Ваша тренировка была достаточно продуктивной и вы заработали 2xp` 
        : `Скорее всего сегодня вы тренировались с настоящим мастером и заработали целых 3xp!`;
        let afterTrainInfoTemplate = `
        <p>%trainInfo%</p>
        <div>
            <button type="submit" id="train-info-button">ок</button>
        </div>
        `;
        let afterTrainInfo = afterTrainInfoTemplate.replace("%trainInfo%", trainInfo);
        trainWindowInfo.innerHTML = afterTrainInfo;
        let trainInfoBtn = document.querySelector('#train-info-button');
        trainInfoBtn.addEventListener('click', () => {
            trainWindowInfo.classList.toggle('block-hidden');
            trainWindowCloseOpen();
        });
        experience += 3;
    }
});

// regular fight action ----

regulatFightBth.addEventListener('click', () => {
    regularFightWindow.classList.toggle('block-hidden');
    mainWindow.classList.toggle('block-hidden');

    const playerRegularFightInfoTemplate = `
    <h3>%name%</h3>
    <img src="/profile-pic/user-profile.png" alt="player pic">
    <p>Здоровье: %health%</p>
    <p>Сила: %power%</p>
    <p>Броня: %armor%</p>
    <p>Уровень: %lvl% </p>
    `;
    const playerRegularFightInfo = playerRegularFightInfoTemplate
                                                            .replace("%name%", playerName)
                                                            .replace("%health%", health)
                                                            .replace("%power%", power)
                                                            .replace("%armor%", armor)
                                                            .replace("%lvl%", level);
    regularFightPlayerInfoContainer.innerHTML = playerRegularFightInfo;

    regularOpponentGeneration();
})

regularFightCancelBtn.addEventListener('click', () => {
    regularFightWindow.classList.toggle('block-hidden');
    mainWindow.classList.toggle('block-hidden');
});

regularFightStartBtn.addEventListener('click', () => {

});

function regularOpponentGeneration() {
    const regularOpponentCardContainer = document.querySelector(".opponent-info-regular-fight-window");
    const regularOpponentInfoTemplate = `
    <h3>%enemyName%</h3>
    <img src="/profile-pic/random-opponent.png" alt="opponent pic">
    <p>Здоровье: %health%</p>
    <p>Сила: %power%</p>
    <p>Броня: %armor%</p>
    <p>Уровень: %lvl% </p>
    `;
    const regularOpponentName = regularEnemiesName[getRandomInt(0, regularEnemiesName.length)];
    const regularOpponentLevel = getRandomInt(1, level);
    const regularOpponentInfoText = regularOpponentInfoTemplate
                                                        .replace('%enemyName%', regularOpponentName)
                                                        .replace('%health%', statisticGenerationByLevel(regularOpponentLevel).health)
                                                        .replace('%power%',  statisticGenerationByLevel(regularOpponentLevel).power)
                                                        .replace('%armor%', statisticGenerationByLevel(regularOpponentLevel).armor)
                                                        .replace('%lvl%', regularOpponentLevel);
    regularOpponentCardContainer.innerHTML = regularOpponentInfoText;
}

function statisticGenerationByLevel(lvl) {
    return {
        health: getRandomInt(lvl * 10, lvl * 20),
        power: getRandomInt(lvl * 3, lvl * 6),
        armor: getRandomInt(0, lvl * 1)
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}