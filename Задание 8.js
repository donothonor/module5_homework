let users = new Map();
let usersKeys = []
let usersValues=[]

users.set('Vadim', 13)
users.set('Sveta', 25)
users.set(53, false)
users.set(56, 53)


for (let userValue of users.values()) {
    usersValues.push(userValue)
}

for (let userKey of users.keys()) {
    usersKeys.push(userKey)
}

for (let i = 0; i < users.size; i++) {
    console.log(`Ключ - ${usersKeys[i]}, значение - ${usersValues[i]}`)
}