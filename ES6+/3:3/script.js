function copyObject(obj) {
    return {...obj};
  }
  

  const obj1 = {
    name: 'John',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  };
  
  console.log('Original object:', obj1);
  
  const obj2 = copyObject(obj1);
  obj2.name = 'Jane';
  obj2.age = 30;
  obj2.address.street = '456 Second St';
  
  console.log('Modified object:', obj2);
  console.log('Original object after copy:', obj1);
  