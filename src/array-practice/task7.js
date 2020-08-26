/**
 * Реализовать функцию take в этом файле, и экспортировать ее.
 *
 * Первый аргумент - массив, второй - значение, сколько элементов нужно взять,
 * начиная с 0ой позиции (то есть, с начала массива)
 *
 * ([1, 2, 3], 5) -> берем первых 5 элементов. Вернули массив со всеми значениями,
 * так как их было всего 3 -> [1, 2, 3]
 * ([1, 2, 3], 2) -> берем первых 2 элемента. Вернули массив [1, 2]
 *
 * console.log(take([1, 2, 3], 5)); -> [1, 2, 3]
 * console.log(take([1, 2, 3], 2)); -> [1, 2]
 */

 function take(array, count){
     let len = array.length;
     let newArr = []
     if(len < count){
         for(let i = 0; i < len; i++){
            newArr.push(array[i])
         }
     } else{
        for(let i = 0; i < count; i++){
            newArr.push(array[i])
         }
     }
     return newArr
 }
 console.log(take([1, 2, 3], 5));
 console.log(take([1, 2, 3], 2));