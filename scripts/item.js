'use strict';

const name = '';

const Item = (function () {
    
    const validateName = (function (name) {
        // if(!name){
        //     throw new Error("name does not exist");
        // }
    }());
    const create = (function (inputName) {
        return { id: cuid(), name: inputName, checked : false};    
    }());

    return {
        validateName,
        create,
    }

}());






