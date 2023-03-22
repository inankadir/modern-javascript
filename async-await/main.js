/*JavaScript'te, asenkron (async) yapılar, kodunuzun belirli bir işlem tamamlanana kadar 
diğer işlemleri durdurmadan devam etmesini sağlayan tekniklerdir. Bu, özellikle ağ istekleri,
 dosya okuma/yazma veya zamanlayıcılar gibi yavaş işlemlerle uğraştığınızda oldukça yararlıdır.

JavaScript'te, async yapısı Promise'lar veya async/await anahtar kelimeleri kullanılarak gerçekleştirilebilir.

Promise:

Promise, belirli bir işlemin tamamlanması için bekleyen bir işlemi temsil eder. 
Promise'lar, üç durumda olabilirler:

Pending: İşlem henüz tamamlanmadı.
Fulfilled: İşlem başarıyla tamamlandı.
Rejected: İşlem başarısız oldu.
Promise'lar, then() ve catch() metodlarıyla kullanılırlar. then() metodu,
Promise başarıyla tamamlandığında yapılacak işlemi tanımlar. catch() metodu ise Promise başarısız olduğunda 
yapılacak işlemi tanımlar.

Örneğin, aşağıdaki kod örneği, bir Promise oluşturarak bir API isteği gönderir ve 
istek tamamlandığında then() metodu tarafından işlenir:*/

const myPromise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.example.com/data');
    request.onload = () => {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.onerror = () => {
      reject(Error('Network Error'));
    };
    request.send();
  });
  
  myPromise.then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  });
  
  /*async/await:

async/await yapısı, Promise'lerin kullanımını daha kolay ve daha anlaşılır hale getirir.
async/await yapısı, asenkron bir fonksiyonu çağırmak için kullanılır ve await anahtar kelimesi, 
Promise'in tamamlanmasını bekler ve sonra sonucunu döndürür.

Örneğin, aşağıdaki kod örneği, bir API isteği göndermek için async/await yapısını kullanır:*/

async function getData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  getData();
/*Bu örnekte, getData() fonksiyonu async olarak tanımlanır ve await anahtar kelimesi,
 API isteğinin tamamlanmasını bekler. try...catch bloğu, Promise'in başarısız olması
  durumunda hatayı ele alır.*/