/*JavaScript'teki reduce fonksiyonu, bir dizi elemanı tek bir değere dönüştürmek için kullanılan
 bir dizi işlevselliği sağlar. reduce() fonksiyonu, birincil işlev ve isteğe bağlı olarak bir başlangıç 
 değeri alır. İşlev, dizideki her öğeyi işleyerek bir sonuç döndürür. Daha sonra, reduce() fonksiyonu 
 son işlevin döndürdüğü değeri bir sonraki işleve aktarır ve dizinin sonuna kadar bu işlemi tekrarlar.

Aşağıdaki örnek, reduce() fonksiyonunu kullanarak bir dizi elemanının toplamını hesaplamak için 
bir işlev örneği göstermektedir:*/

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 15

/*Bu kod önce bir numbers dizisi tanımlar. Daha sonra, reduce() fonksiyonunu kullanarak dizi elemanlarının
toplamını hesaplamak için bir işlev tanımlar. Bu işlev, önceki değeri (accumulator) ve 
mevcut değeri (currentValue) toplar ve sonucu döndürür. Dizideki her öğe için bu işlem tekrarlanır.

reduce() fonksiyonunun ikinci parametresi, işlevin ilk öğeyi işlemesine başlamak için kullanılan 
bir başlangıç değeridir. Yukarıdaki örnekte, başlangıç değeri 0'dır.

Sonuç olarak, toplam değişkeni reduce() fonksiyonu tarafından hesaplanan sonucu temsil eder ve sonucu 
console.log() kullanarak görüntüleriz.

Bu örnekte, reduce() fonksiyonu kullanılarak toplam hesaplaması yapılmıştır. 
Ancak reduce() fonksiyonu, farklı hesaplamalar için de kullanılabilir. İşlevin geri döndürdüğü sonuç, 
reduce() fonksiyonu tarafından bir sonraki işleve aktarılabilir. Bu özelliği kullanarak diziyi 
farklı şekillerde işleyebilirsiniz.*/

/*bir dizi tam sayının hem string hem de sayı olarak verildiği varsayılıyor ve tüm sayılar sayı olarak 
toplandığında elde edilen sonucun dizi olarak verilmesi isteniyor. Örneğin, ["1", 2, "3"] dizisi verilirse, 
sonuç 6 olacaktır.

JavaScript'te bu işlemi yapmak oldukça kolaydır. İlk olarak, dizi elemanlarını döngü kullanarak sayıya 
dönüştürmemiz gerekiyor. Daha sonra, tüm elemanları toplayıp sonucu döndürebiliriz.

Aşağıdaki örnek kod bu işlemi gerçekleştirir:*/

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
    }
    return sum;
  }
  
  // örnek kullanım
  const arr = ["1", 2, "3"];
  const result = sumArray(arr);
  console.log(result); // 6

/*Bu kod önce sum adında bir değişken oluşturur ve 0'a eşitler. Daha sonra, dizi elemanlarını 
döngü kullanarak sayıya dönüştürür ve sum değişkenine ekler. Son olarak, toplamı döndürür.

Örnek kullanımda, sumArray fonksiyonuna ["1", 2, "3"] dizisi verilir ve sonuç 6 olarak hesaplanır. 
Bu sonuç, console.log ile ekrana yazdırılır. Bu soruyu reduce() fonksiyonu ile aşağıdaki gibi yazabiliriz*/

const arr = ["1", 2, "3"];

const sum = arr.reduce((accumulator, currentValue) => {
  return Number(accumulator) + Number(currentValue);
}, 0);

console.log(sum); // 6


/*Yukarıdaki kod, verilen dizideki tüm elemanları sayıya dönüştürerek ve ardından reduce() fonksiyonunu 
kullanarak elemanların toplamını hesaplar. reduce() fonksiyonu, işlevin ilk parametresine başlangıç 
değeri olarak 0'ı atar ve her adımda accumulator parametresine toplamı ekler. Sonuç olarak, sum değişkeni, 
reduce() fonksiyonu tarafından hesaplanan sonucu temsil eder ve sonucu console.log() kullanarak görüntüleriz.

Not: Number() fonksiyonu, bir dizeyi sayıya dönüştürür. Bu örnekte, reduce() fonksiyonu içinde kullanılan 
işlev, önceki ve mevcut değerleri sayıya dönüştürmek için Number() fonksiyonunu kullanır. Bu sayede, verilen
 dizideki tüm elemanlar sayıya dönüştürülür*/

