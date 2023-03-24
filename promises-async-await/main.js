/*Promise Örneği*/

function doAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false; // buradaki değeri true yaparak bir hata durumunu da simüle edebilirsiniz
      if (!error) {
        resolve('İşlem tamamlandı!');
      } else {
        reject('Hata oluştu!');
      }
    }, 2000);
  });
}

// Promise kullanarak asenkron bir işlem yapma örneği
doAsyncTask()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

/*  Yukarıdaki kodda, doAsyncTask fonksiyonu asenkron bir işlem gerçekleştirir ve sonucunu bir Promise 
nesnesi olarak döndürür. Bu Promise nesnesi, işlem tamamlandığında resolve metodunu çağırarak başarılı 
sonucu geri döner veya bir hata durumunda reject metodunu çağırarak hata mesajını geri döner.

Sonrasında, then metodu kullanarak başarılı sonucu yakalayabiliriz. Eğer bir hata oluşursa, catch 
metodu yardımıyla hatayı yakalayabiliriz.*/

//async-await Örneği

function doAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false; // buradaki değeri true yaparak bir hata durumunu da simüle edebilirsiniz
      if (!error) {
        resolve('İşlem tamamlandı!');
      } else {
        reject('Hata oluştu!');
      }
    }, 2000);
  });
}

// async-await kullanarak asenkron bir işlem yapma örneği
async function main() {
  try {
    const result = await doAsyncTask();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

main();


/*Yukarıdaki örnekte, doAsyncTask fonksiyonu yine asenkron bir işlem gerçekleştirir ve 
sonucunu bir Promise nesnesi olarak döndürür.

Ancak, bu sefer main fonksiyonu async olarak tanımlanır ve await anahtar kelimesi ile 
doAsyncTask fonksiyonunun tamamlanmasını bekler. Başarılı sonuç durumunda, sonucu result 
değişkenine atar ve ekrana yazdırır. Hata durumunda ise hatayı yakalar ve ekrana yazdırır.

async-await örneğinde, try-catch bloğu kullanarak hatayı yakalamak daha kolaydır ve daha 
okunaklı bir kod yazımı sağlar.*/