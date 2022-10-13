import Question from "./question.js";
import Answer from "./answer.js";


let catalog = [];
catalog.push(new Question(1, '3.14159 більше відоме як?', [
  new Answer('Пі', true),
  new Answer('Лямбда', false),
  new Answer('Альфа', false),
  new Answer('Бета', false)
]));
catalog.push(new Question(1, 'Як продовжити відому приказку "Не спійманний - .."?', [
  new Answer('Не шулер', false),
  new Answer('Не шахрай', false),
  new Answer('Не злодій', true),
  new Answer('Не олігарх', false)
]));
catalog.push(new Question(1, 'Коли святкують День захисника Вітчизни в Україні?', [
  new Answer('23 лютого', false),
  new Answer('24 серпня', false),
  new Answer('7 листопада', false),
  new Answer('14 жовтня', true)
]));
catalog.push(new Question(2, 'Якими, на думку приказки, мають бути вовки?', [
  new Answer('Ситими', true),
  new Answer('Вегетаріанцями', false),
  new Answer('Беззубими', false),
  new Answer('Ледачими', false)
]));
catalog.push(new Question(2, 'Як фондові биржовики називають різке падіння курсу цінних паперів?', [
  new Answer('Обрив', false),
  new Answer('Облом', false),
  new Answer('Обрахунок', false),
  new Answer('Обвал', true)
]));
catalog.push(new Question(3, 'Чого, згідно з приказкою, вимагає краса?', [
  new Answer('Жертв', true),
  new Answer('Любові', false),
  new Answer('Вкладень', false),
  new Answer('Уваги', false)
]));
catalog.push(new Question(3, 'Чим більшість людей вважають за краще журавлеві в небі?', [
  new Answer('Ганну на шиї', false),
  new Answer('Вітер в голові', false),
  new Answer('Пил в очах', false),
  new Answer('Синицю в руках', true)
]));
catalog.push(new Question(4, 'Коли людина говорить невиразно, то, на думку оточення, у нього в роті ...', [
  new Answer('Трубка', false),
  new Answer('Каша', true),
  new Answer('33 зуби', false),
  new Answer('Свисток', false)
]));
catalog.push(new Question(4, 'Яке скульптурне зображення ніколи не опускається нижче пояса?', [
  new Answer('Торс', false),
  new Answer('Статуя', false),
  new Answer('Бюст', true),
  new Answer('Барельєф', false)
]));
catalog.push(new Question(5, 'Яка корисна функція покладена на американську гордість - Статую Свободи?', [
  new Answer('Маяк', true),
  new Answer('Телевежа', false),
  new Answer('Буйок', false),
  new Answer('Хмарочос', false)
]));
catalog.push(new Question(5, 'Учасник якого з перерахованих спортивних змагань екіпірованний рушницею?', [
  new Answer('Бадмінтон', false),
  new Answer('Бейсбол', false),
  new Answer('Бобслей', false),
  new Answer('Біатлон', true)
]));
catalog.push(new Question(6, 'Чим обмінюються наречені в загсі?', [
  new Answer('Телефонами', false),
  new Answer('Рукостисканнями', false),
  new Answer('Обручками', true),
  new Answer('Фотографіями', false)
]));
catalog.push(new Question(6, 'У автомоболів якої з цих країн міжнародний реєстраційний знак PNG?', [
  new Answer('Польща', false),
  new Answer('Нова Зеландія', false),
  new Answer('Папуа-Нова-Гвінея', true),
  new Answer('Нідерланди', false)
]));
catalog.push(new Question(7, 'Як звали І президента США Вашингтона?', [
  new Answer('Дуайт', false),
  new Answer('Аврам', false),
  new Answer('Джордж', true),
  new Answer('Томас', false)
]));
catalog.push(new Question(7, 'Який знак східного гороскопу слідує за знаком Дракона?', [
  new Answer('Тигр', false),
  new Answer('Криса', false),
  new Answer('Змія', true),
  new Answer('Мавпа', false)
]));

catalog.push(new Question(8, 'Як називається артист, що оголошує номери естрадної програми?', [
  new Answer('Диктор', false),
  new Answer('Конферансьє', true),
  new Answer('Тамада', false),
  new Answer('Спікер', false)
]));
catalog.push(new Question(8, 'Який "танець" виконав Чарлі Чаплін у фільмі "Золота лихоманка"?', [
  new Answer('Чарльстон', false),
  new Answer('Фокстрот', false),
  new Answer('Танець булочок', true),
  new Answer('Гопак', false)
]));
catalog.push(new Question(9, 'Містичне вчення, засноване на символічному тлумаченні слів і чисел?', [
  new Answer('Сфрагістика', false),
  new Answer('Хіромантія', false),
  new Answer('Кабалістика', true),
  new Answer('Боністика', false)
]));
catalog.push(new Question(10, 'Який біг в помірній кількості вважається корисним для здоров\'я?', [
  new Answer('Гуськом', false),
  new Answer('Риссю', false),
  new Answer('Підтюпцем', true),
  new Answer('Галопом', false)
]));
catalog.push(new Question(11, 'Яке місто було метою усіх хрестових походів?', [
  new Answer('Єрусалим', true),
  new Answer('Биробиджан', false),
  new Answer('Мекка', false),
  new Answer('Ватикан', false)
]));
catalog.push(new Question(12, 'Який політичний діяч не відноситься до України?', [
  new Answer('Петро Порошенко', false),
  new Answer('Айварас Абромавичус', false),
  new Answer('Едуард Шеварнадзе', true),
  new Answer('Михайло Саакашвілі', false)
]));

catalog.push(new Question(13, 'На звороті якої банкноти зображено Львівський оперний театр?', [
  new Answer('50 грн', false),
  new Answer('5 грн', false),
  new Answer('20 грн', true),
  new Answer('10грн', false)
]));
catalog.push(new Question(14, 'Яка з цих риб не відноситься до лососевих?', [
  new Answer('Сьомга', false),
  new Answer('Севрюга', true),
  new Answer('Горбуша', false),
  new Answer('Кета', false)
]));
catalog.push(new Question(15, 'У якому році вишла перша серія мультсеріалу "Том і Джеррі?', [
  new Answer('1948', false),
  new Answer('1942', true),
  new Answer('1932', false),
  new Answer('1939', false)
]));
catalog.push(new Question(15, 'Як називають період часу, коли сонце у північних широтах не опускається за обрій?', [
  new Answer('Полярний день', true),
  new Answer('Полярна ніч', false),
  new Answer('Час вечеряти', false),
  new Answer('Просто день', false)
]));


export default function getQuestion(questionNo) {
  return shuffle(catalog)
    .find((element) => {
      return element.questionNo === questionNo;
    })
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


