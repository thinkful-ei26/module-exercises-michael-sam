'use strict';

const store = (function() {
  
  const items = [];
  let hideCheckedItems = false;
  
  const addItem = function(itemName) { 
    items.push({id:'cuid', name:itemName, checked:false});
  };
  const updateItem = function(id, updateData) {

  };
  const toggleHideCheckedFilter = function() {};

  let searchTerm = '';
  
  return { 
    items, 
    hideCheckedItems,
    searchTerm,
    addItem, 
    updateItem, 
    toggleHideCheckedFilter 
  };
  
}());
  
