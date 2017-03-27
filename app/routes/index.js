import Ember from 'ember';

export default Ember.Route.extend({
//model
model(){
  return this.store.findAll('book');
}

  addBook: false;
  //actions
  actions:{
    addNewBook(){
      this.set('addBook', true);
    }
    saveRental3(params){
      var newBook = this.store.createRecord('book', paras);
      newBook.save();
      this.transitionTo('index');
    }
    destroyRental(book){
      book.destroyRecord();
      this.transitionTo('index');
    }
  }
});
