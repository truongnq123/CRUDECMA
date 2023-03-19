import data from '../../db.json' assert {type: 'json'}
const categories = function (book) {
    const book = data.find(function (item) {
      if (item.categories.id === book.categories.id) {
        return /*html*/`
        <img src="${book.images[0].base_url}">
        `
      } else {
        return "";
      }
    })
    return book; 
  }
  export default categories