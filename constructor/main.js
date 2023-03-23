/*JavaScript'te constructor, bir sınıfın örneğinin oluşturulması sırasında çalıştırılan özel bir metoddur.
Yeni bir nesne oluşturulduğunda constructor metodu otomatik olarak çağrılır ve nesneye özgü özelliklerin 
ve davranışların başlatılmasını sağlar.

Örnek olarak, aşağıdaki kodda "Person" adlı bir sınıf tanımlanmıştır ve bu sınıfın bir "constructor" 
metodu vardır. "Person" sınıfının örneği "john" oluşturulduğunda, "constructor" metodu otomatik olarak 
çalışır ve "john" nesnesine özelliklerin başlatılması sağlanır.*/


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
  }
}

let john = new Person('John', 30);
john.sayHello(); // Hello, my name is John and I am 30 years old.

/*Yukarıdaki örnekte, "Person" sınıfının "constructor" metodunda "name" ve "age" parametreleri tanımlandı 
ve bu parametreler nesneye atanarak özellikler olarak kaydedildi. Ardından, "sayHello" adlı bir metot
 tanımlandı ve bu metot, "name" ve "age" özelliklerini kullanarak bir mesaj yazdırdı.

"john" nesnesi oluşturulduğunda, "constructor" metoduna "John" ve "30" değerleri parametre olarak geçirildi. 
Bu değerler nesneye atanarak "name" ve "age" özellikleri olarak kaydedildi. Son olarak, 
"sayHello" metodu "john" nesnesi tarafından çağrıldı ve "Hello, my name is John and I am 30 years old." 
mesajı yazdırıldı.*/

/*contructor metodu yerine farklı bir fonksiyon kullanılabilirmi?

Evet, sınıf tanımlamalarında constructor metodunun yerine farklı bir fonksiyon kullanmak mümkündür.
Bunun için sınıf tanımlaması sırasında kullanılan özel syntax ile ilgili bir değişiklik yapılması yeterlidir.
Örneğin, aşağıdaki kodda "Person" adlı bir sınıf tanımlanmıştır ve sınıfın constructor metodunun yerine
"init" adlı bir fonksiyon kullanılmıştır. "init" fonksiyonu da aynı işlevi görerek nesnenin özelliklerinin 
başlatılmasını sağlar.*/

class Person {
  init(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
  }
}

let john = new Person();
john.init('John', 30);
john.sayHello(); // Hello, my name is John and I am 30 years old.

/*Yukarıdaki örnekte, "Person" sınıfının constructor metodunun yerine "init" adlı bir fonksiyon kullanılmıştır.
Bu fonksiyon, nesnenin özelliklerinin başlatılmasını sağlayacak şekilde tanımlanmıştır. Ardından, "sayHello"
adlı bir metot tanımlandı ve bu metot, "name" ve "age" özelliklerini kullanarak bir mesaj yazdırdı.

"john" nesnesi oluşturulduğunda, önce sınıfın constructor metodu çağrılır ve nesne oluşturulur. 
Ancak bu durumda constructor metodunun içi boş olduğundan, nesne özellikleri atanmaz. Sonra "init" 
fonksiyonu çağrılarak nesnenin özellikleri atanır ve "sayHello" metodu "john" nesnesi tarafından çağrılarak 
"Hello, my name is John and I am 30 years old." mesajı yazdırılır.*/

function AgencyContractor(hourlyRate, hours, taxRate) {
    this.hourlyRate = hourlyRate
    this.hours = hours
    this.taxRate = taxRate
    this.calculateProfit = function() {
        return this.hourlyRate * this.hours * (1 - this.taxRate)
    }
    this.invoiceClient = function() {
        return `Your invoice total is ${this.hourlyRate * this.hours}`
    }
}

let leon = new AgencyContractor(250, 160, .35)
console.log(leon.invoiceClient())
console.log(leon.hourlyRate)
console.log(leon.calculateProfit())

/*Bu kod, "AgencyContractor" adında bir iş sözleşmesi sınıfı tanımlar. Bu sınıfın üç parametre alabilen 
bir constructor metodu vardır: "hourlyRate", "hours" ve "taxRate". Bu parametreler, "AgencyContractor" 
nesnelerinin özelliklerini tanımlar.

Constructor metodu içinde iki fonksiyon tanımlanmıştır: "calculateProfit" ve "invoiceClient". 
"calculateProfit" fonksiyonu, nesnenin kazancını hesaplar ve "invoiceClient" fonksiyonu ise müşterinin 
fatura tutarını hesaplar ve bir mesaj olarak döndürür.

"leon" adında bir "AgencyContractor" nesnesi oluşturulur ve bu nesne, "hourlyRate" özelliğine 250, 
"hours" özelliğine 160 ve "taxRate" özelliğine 0.35 değerleri atanarak başlatılır.

Daha sonra, "leon" nesnesinin "invoiceClient" ve "calculateProfit" metotları sırasıyla çağrılır 
ve sonuçlar "console.log" fonksiyonu kullanılarak konsola yazdırılır.

"leon.invoiceClient()" ifadesi "Your invoice total is 40000" mesajını konsola yazdırır. 
"leon.hourlyRate" ifadesi 250 değerini döndürür. "leon.calculateProfit()" ifadesi ise 26000 değerini döndürür.

Özetle, bu kod bir iş sözleşmesi sınıfı tanımlar ve sınıfın nesnelerinin fatura tutarını hesaplamak ve
kazancını hesaplamak için bazı metotlar içerir. Bu nesneler, constructor metodu kullanılarak başlatılır
ve özellikleri hesaplamaları için kullanılır.*/