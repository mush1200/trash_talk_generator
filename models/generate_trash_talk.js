const list = require('../contents.json')

//define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define trashTalkGenerator function
function trashTalkGenerator(option) {
  if (!option) {
    return '請選一個職業'
  }
  return `身為一個${list.job[option].title}，${sample(list.task[option])}，${sample(list.phrase)}吧!`
}

//export trashTalkGenerator
module.exports = trashTalkGenerator