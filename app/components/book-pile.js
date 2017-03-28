import Ember from 'ember';

export default Ember.Component.extend({
  actions:{

    deleteBook(book){
      if(confirm('Are you sure you want to delete this Book?')){
        this.sendAction('destroyRecord', book)
      }
    }
  }
});
