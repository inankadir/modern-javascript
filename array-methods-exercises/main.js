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
