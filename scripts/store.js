'use strict';
/* global store, Item, cuid */
const store = (function() {
  
  const items = [];
  let hideCheckedItems = false;
  let searchTerm = '';

  const addItem = function (name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (error) {
      throw new Error('Error during the validation of the name');
    }
  };

  const toggleCheckFilter = function () {
    store.hideCheckedItems = !store.hideCheckedItems;
  }
  
  const findAndToggleChecked = function (id) {
    this.findById(id).checked = !this.findById(id).checked;
  };

  const findAndUpdateName = function (id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    } catch (error) {
      throw new Error(error); 
    }
  };

//   const findId = function (item) {
//     return $(item)
//       .closest('.js-item-element')
//       .data('item-id');
//   };

  const findById = function(id){
    return this.items.find(element => element.id === id);
  };

  function setSearchTerm(val) {
    this.searchTerm = val;
  }

  const findAndDelete = function (id) {
    this.items.splice(this.items.findIndex(ids => ids === id),1); 
  };

  
  return { 
    items, 
    hideCheckedItems,
    searchTerm,
    addItem,
    findAndDelete,
    findAndToggleChecked,
    findAndUpdateName,
    findById,
    toggleCheckFilter,
    setSearchTerm,
    //findId
  };
  
}());
  
