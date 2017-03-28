import Ember from 'ember';

export default Ember.Route.extend({
//model
model(){
  return this.store.findAll('book');
},

  addBook: false,
  //actions
  actions:{
    
    addNewBook(){
      this.set('addBook', true);
    },
    saveBook3(params){
      var newBook = this.store.createRecord('book', params);
      newBook.save();
      this.transitionTo('index');
    },
    destroyBook(book){
      book.destroyRecord();
      this.transitionTo('index');
    }
  }
});
