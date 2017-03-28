import Ember from 'ember';

export default Ember.Component.extend({
  addNewBook: false,

  actions: {
    hideImage: function () {
      this.set('addNewBook', false);
    },
    bookFormShow(){
      this.set('addNewBook', true)
    },
    saveBook1(){
      var params = {
        author: this.get('author') ? this.get('author'): '',
        year: this.get('year') ? this.get('year'): '',
        title: this.get('title') ? this.get('title'): ''
      };
      this.set('addNewBook', false);
      this.sendAction('saveBook2', params);
    }
  }
});
