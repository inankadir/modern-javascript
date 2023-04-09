//1. Translate border-left-width to borderLeftWidth
//İmportance: 5
//Write the function camelize(str) thet changes dash-separated words like "my-short-string" into camel-case
//"myShortString".
//That is: removes all dashes, each word after dash becomes uppercased.
//Examples:
//camelize("background-color") == 'backgroundColor'
//P.S Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
  let newString = str.split("-");
  newString = newString.map(function (word, index) {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  });
  newString = newString.join("");
  return newString;
}

console.log(camelize("This-Word"));
/*Bu JavaScript kodu, "camelize" adında bir fonksiyonu içermektedir. Bu fonksiyon, bir dizeyi 
"camelCase" formatına dönüştüren bir mantığı uygular. İşte kodun adım adım açıklaması:
str adında bir girdi parametresi alır. Bu, dönüştürülecek olan dizedir.
newString adında bir değişken oluşturulur ve str parametresini "-" karakterine göre böler
ve sonuçları bir diziye atar. Yani, str dizesi "-" karakterine göre parçalanır ve parçalar 
newString dizisine atanır.
newString dizisi üzerinde map yöntemi kullanılır. map yöntemi, bir dizi üzerinde döngü yapar ve 
her elemana belirli bir işlem uygular. Bu örnekte, her elemanın ilk harfini büyük harfle değiştirir 
ve geri kalan harfleri küçük harfe döker.
map yöntemi içinde bir anonim işlev (fonksiyon) kullanılır. Bu anonim işlev, her elemana uygulanacak 
dönüşüm mantığını içerir. Eğer elemanın indeksi 0 ise (yani ilk kelime ise), kelimenin tüm harfleri 
küçük harfle döker (word.toLowerCase()). Aksi takdirde, kelimenin ilk harfini büyük harfle değiştirir 
ve geri kalan harfleri olduğu gibi bırakır (word[0].toUpperCase() + word.slice(1)).
map yöntemi sonucu, dönüştürülmüş kelimeleri içeren bir dizi döndürür.
newString dizisi, join yöntemi kullanılarak tekrar birleştirilir ve "camelCase" formatında yeni bir 
dize elde edilir.
newString dizesi, fonksiyon tarafından döndürülür.
Fonksiyonun sonunda, console.log komutu kullanılarak camelize fonksiyonu "This-Word" dizesini 
alarak çağrılır ve sonuç konsola yazdırılır.*/

//2. Fiter range
//importance : 4
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elemnts with values
// higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array.It should return the new array.
// For instance:

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

let filtered = filterRange(arr, 1, 4);
console.log(filtered); //3,1(matching values)
console.log(arr); //5,3,8,1 (not modified)

//3. Filter range "in place"
//importance : 4
//Write a function filterRangeInPlace(arr, a, b) that gets an array and removes from it all values except
//those that are between a and b.The test is: a <= arr [i] <= b.
//The function should only modify the array.It should not return anything.
//For instance:

let arr = [5, 2, 3, 4, 6, 8, 1, 0];

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < || arr[i] > b) { // a ve b arasında olmayan değerleri bul
            arr.splice(i, 1)  // dizi üzerinden çıkar
            i--   // indis ayarlaması yap
        }
    }
}
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log(arr); // [2,3,4,1]

/*Bu kod, parametre olarak geçilen "arr" adlı diziyi "a" ve "b" arasında olmayan değerlerden 
temizleyecektir. For döngüsü kullanarak dizinin tüm elemanlarını tek tek dolaşırız. 
Eğer bir eleman "a" ve "b" aralığında değilse, splice() yöntemini kullanarak diziden çıkarırız 
ve indis ayarlaması yaparak doğru indekslerde döngünün devam etmesini sağlarız. 
Bu sayede dizi sadece orijinal dizide kalmak istenen değerlerle güncellenmiş olur. 
Fonksiyon herhangi bir değer döndürmez, sadece orijinal diziyi günceller.

"i--" ifadesi, döngü içinde kullanılan bir indis ayarlamasıdır. JavaScript'de "for" döngüsü, genellikle
bir arttırma veya azaltma işlemi ile kullanılan bir indisin değerini güncellemek için kullanılır.

Örneğin, aşağıdaki döngüde "i" değişkeni 0'dan 4'e kadar olan değerlerde arttırılır:

for (var i = 0; i < 5; i++) {
  console.log(i);
}
Bu durumda, "i++" ifadesi döngü her bir iterasyonunda "i" değişkenini 1 arttıracaktır.

Ancak, "filterRangeInPlace" fonksiyonundaki durum biraz farklıdır. Eğer döngü içinde bir elemanı
diziden çıkarırsak, dizi uzunluğu azalacaktır ve indeksler kaydırılacaktır. Bu durumda, 
döngüyü sıradaki indise geçmek için arttırmak yerine azaltmamız gerekmektedir.

Örneğin, aşağıdaki kodda "i--" ifadesi kullanılarak döngü içinde bir elemanın çıkarılması sonucu
indisin azaltıldığı görülmektedir:

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    arr.splice(i, 1);
    i--; // dizi uzunluğu azaldığından indis azaltılır
  }
}
console.log(arr); // [1, 3, 5]

Bu durumda, eğer "arr" dizisindeki bir eleman çift ise, "splice()" yöntemi kullanılarak diziden 
çıkarılır ve "i--" ifadesi ile döngü indisi azaltılır. Bu sayede, dizi uzunluğu azaldığından 
dolayı doğru indislerde döngünün devam etmesi sağlanır.*/

//4. Sort in decreasing order
//importance : 4

let arr =  [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a)

console.log(arr);

/*Bu örnekte, [5, 2, 8, 1, 6] değerlerine sahip arr adında bir dizi bulunmaktadır. Diziyi yerinde 
sıralayan sort() metodunu kullanıyoruz ve bir karşılaştırma fonksiyonunu argüman olarak veriyoruz. 
Karşılaştırma fonksiyonu, diziden a ve b adlı iki elemanı alır ve b - a ifadesinin sonucunu döndürür. 
Bu, elemanların azalan düzende sıralanmasını sağlar, çünkü karşılaştırma fonksiyonu, b değeri a 
değerinden küçük olduğunda negatif bir değer döndürerek, b'nin a'dan önce gelmesi gerektiğini belirtir.
Sonuç olarak azalan düzende sıralanmış dizi [8, 6, 5, 2, 1] olacaktır, çünkü değerler en yüksekten en
düşüğe doğru sıralanmıştır.*/

//5. Copy and sort array
//importance: 5
//We have an array of string arr. We'd like to have a sorted copy of it, but keep arr unmodified.
//Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort()
}
let sorted = copySorted(arr);
console.log(sorted); //CSS,HTML,JavaScript
console.log(arr); //HTML,CSS,JavaScript ( no changes

/*Bu örnekte, copySorted() fonksiyonu, bir dizi olan arr'yı girdi olarak alır. Orijinal dizinin 
yüzeyel bir kopyasını slice() metodunu kullanarak oluşturur. Ardından, sort() metodunu kullanarak 
kopya diziyi varsayılan olarak artan düzende (alfabetik sıraya göre) sıralar. Son olarak, 
sıralanmış kopya diziyi çıktı olarak döndürür ve orijinal dizi arr'yi değiştirmeden bırakır.
Not: Eğer orijinal dizi arr, karmaşık nesneler veya iç içe diziler içeriyorsa, yüzeyel bir kopya 
hâlâ aynı nesnelere veya dizilere referans edebilir ve bu nesnelere veya dizilere yapılan herhangi 
bir değişiklik, hem orijinal dizide hem de kopya dizide yansıtılır. Bu tür durumlarda, iki dizinin 
tamamen ayrı olduğundan emin olmak için orijinal dizinin derin bir kopyasını oluşturmanız gerekebilir.*/



