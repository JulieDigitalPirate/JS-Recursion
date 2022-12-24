let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

// Рекурсия 

function getTotalProgressByRecurtion(data) {
    if(Array.isArray(data)){
        let total = 0;
        for(let i=0; i<data.length; i++) {
            total+= data[i].progress;
        }
        return[total, data.length];
    } else {
        let total=[0, 0];
        for(let subData of Object.values(data)){
            const subDataArr = getTotalProgressByRecurtion(subData);
            total[0]+= subDataArr[0];
            total[1]+= subDataArr[1];
        }
        return total;
    }
}
const result = getTotalProgressByRecurtion(students);
console.log(result[0]/result[1]);
