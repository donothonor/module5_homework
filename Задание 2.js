let x = true;

if (typeof(x) === 'number') console.log(`${x} - число!`)
else if (typeof(x) === 'string') console.log(`${x} - строка!`)
else if (typeof(x) === 'boolean') console.log(`Тип ${x} - логический!`)
else console.log(`Тип ${x} не определен`)