let numbers = [2,2,3,1,6,7,55,4,4,8,8,0];
let newNumbers = [];
  function getUniqueSortedArray(numbers)
  {
    for(let i = 0; i < numbers.length; i++)
    {
      let isUnique = true;
      for(let j = i+1; j < numbers.length; j++)//+1 - чтобы избежать повторного сравнения элементов самих с собой
      {
        if(numbers[i] === numbers[j])
        {
          isUnique = false;
          break;
        }
      }
      if(isUnique == true){ //сравнение
        newNumbers.push(numbers[i]);
      }
    }
    return newNumbers.sort((a, b) => a - b);//возращаем отсортированный массив
  }
  let uniqueSortedNumbers = getUniqueSortedArray(numbers);
  console.log(uniqueSortedNumbers);