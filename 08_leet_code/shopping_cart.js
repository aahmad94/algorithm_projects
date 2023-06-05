// Input
const groceryItems = [
    { type: 'meat', name: 'beef' },
    { type: 'fruit', name: 'watermelon' },
    { type: 'meat', name: 'chicken' },
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'orange' },
    { type: 'fruit', name: 'pineapple' },
    { type: 'vegetable', name: 'squash' },
    { type: 'vegetable', name: 'lettuce' },
    { type: 'fruit', name: 'strawberry' },
    { type: 'vegetable', name: 'carrots' },
    { type: 'vegetable', name: 'cucumbers' },
  ];
  
  /*
   * Complete the function below
   *
   * @input groceryItems: Array<GroceryObject>
   * @input itemsPerBag: number >= 1
   * @output Array<Array<GroceryObject>>
   *
   * Additional Considerations:
   * * Do not pre-sort the list of groceryItems.
   */
  const packGroceries = (groceryItems, itemsPerBag) => {
    const bagMap = {};
    let idx = 0;
  
    for (let i = 0; i < groceryItems.length; i++) {
      const type = groceryItems[i].type;
      if (!bagMap.hasOwnProperty(type)) {
        bagMap[type] = idx;
        idx += 1;
      }
    }
  
    const bags = [];
    for (let i = 0; i < idx; i++) {
      bags.push([]);
    }
  
    for (let i = 0; i < groceryItems.length; i++) {
      const item = groceryItems[i];
      let bagIdx = bagMap[item.type];
  
      // check if bag is full
      if (bags[bagIdx].length >= itemsPerBag) {
        bagMap[item.type] = idx;
        bags.push([]);
        bagIdx = idx;
        idx += 1;
      }
  
      bags[bagIdx].push(item);
    }
  
    return bags;
  };
  