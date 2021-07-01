let data = prompt('Введите что-нибудь :')

if (isNaN(+data)) {
  console.log('Упс! Кажется вы где-то ошиблись')
} else if (typeof(+data) === 'number') {
    data % 2 == 0 ? console.log(`${data} - четное число`) :
                    console.log(`${data} - нечетное число`)
}
