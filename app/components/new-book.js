import Ember from 'ember';

export default Ember.Component.extend({
  addBook: false,

  actions: {
    addNewBook(){
      this.set('addBook', true)
    },
    saveBook1(){
      var params = {
        author: this.get('author') ? this.get('author'): '',
        year: this.get('year') ? this.get('year'): '',
        title: this.get('title') ? this.get('title'): ''
      };
      this.set('addBook', false);
      this.sendAction('saveBook2', params);
    }
  }
});
