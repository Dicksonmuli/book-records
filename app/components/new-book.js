import Ember from 'ember';

export default Ember.Component.extend({
  addBook: false;
  bookList: false;

  actions: {
    addNewBook(){
      this.set('addBook', true)
    }
    addNewBook(){
      this.set('bookList', true)
    }
    saveBook1(){
      params = {
        author: this.get('author') ? this.get('author'): '',
        year: this.get('year') ? this.get('year'): '',
        title: this.get('title') ? this.get('title'): '',
      }
    }
  }
});
