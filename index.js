// when its roller-skate then return "this saturday, i want to roller-skate' 
// when its bathe my dog retirn "this saturday, i want to bathe my dog"
// anything else is "this saturday, i want to roller-skate"
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(punctuation){
    return function (statement) {
        return `You are ${punctuation}${statement}${punctuation}!`
    }
}
 



































