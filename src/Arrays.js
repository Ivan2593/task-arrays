/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let mas = Array.from(data.split(','), Number);
    for (let i = 1; i < mas.length; i++) {
        let j = i;
        while (j > 0 && mas[j - 1] > mas[j]) {
            let x = mas[j - 1];
            mas[j - 1] = mas[j];
            mas[j] = x;
            j--;
        }
    }
    return mas.toString();
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let k = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[k] > 100) {
            data.splice(k, 1);
            k--;
        }
        k++;
    }
    return data;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let array = [];
    for (let i = 0; i < array1.length; i++) {
        array[2 * i] = array1[i];
        array[2 * i + 1] = array2[i];
    }
    return array;
}
