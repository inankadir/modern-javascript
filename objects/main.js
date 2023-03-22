/*JavaScript'te objeler, birden fazla değeri bir arada tutmak için kullanılan veri yapısıdır.
Objeler, anahtar-değer çiftleri şeklinde tanımlanır ve birçok farklı veri türü içerebilirler.

Objeler, JavaScript'teki en önemli veri tiplerinden biridir ve birçok amaç için kullanılabilirler. 
Örneğin:

Verileri düzenlemek: Benzer verileri bir arada tutmak için objeler kullanılabilir. 
Örneğin, bir kullanıcının adını, e-posta adresini, telefon numarasını vb. tutmak için bir 
kullanıcı objesi oluşturulabilir.*/

const kullanici = {
  ad: 'Ali',
  soyad: 'Yılmaz',
  yas: 30,
  email: 'aliyilmaz@gmail.com'
};

/*Fonksiyonların parametreleri: Fonksiyonlar, birçok parametreye ihtiyaç duyabilirler. 
Bu durumda, parametreleri bir obje içinde gruplandırmak, 
fonksiyonların daha okunaklı ve anlaşılır olmasını sağlar.*/

function urunEkle(urun) {
  console.log(`${urun.ad} adlı ürün ${urun.fiyat} TL fiyatla eklendi.`);
}

const urun = {
  ad: 'Kitap',
  fiyat: 20
};

urunEkle(urun);

/*API verilerini işlemek: Çoğu API, JSON verilerini döndürür. 
Bu veriler, objeler içinde düzenlenirler. Bu nedenle, bu verileri işlemek ve kullanmak için 
objeleri kullanmak önemlidir.*/

fetch('https://api.example.com/products')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      console.log(`${product.name} - ${product.price}`);
    });
  });

/*Sınıflar oluşturmak: Sınıflar, JavaScript'teki nesne yönelimli programlama için önemli bir yapıdır. 
Sınıflar, özellikleri ve yöntemleri bir arada tutarak daha okunaklı ve anlaşılır kodlar yazmayı sağlar. 
Sınıflar da birer objedir.*/

class Kullanici {
  constructor(ad, soyad, email) {
    this.ad = ad;
    this.soyad = soyad;
    this.email = email;
  }

  getFullName() {
    return `${this.ad} ${this.soyad}`;
  }
}

const kullanici1 = new Kullanici('Ahmet', 'Kara', 'ahmetkara@gmail.com');
console.log(kullanici1.getFullName());



/*create an espresso machine class that makes machines with 4 properties and 3 methods */

class EspressoMachine {
    constructor(brand, model, color, price) {
      this.brand = brand;
      this.model = model;
      this.color = color;
      this.price = price;
    }
  
    turnOn() {
      console.log(`The ${this.brand} ${this.model} is turning on.`);
      // Code to turn on the espresso machine
    }
  
    brewEspresso() {
      console.log(`Brewing a shot of espresso with the ${this.brand} ${this.model}.`);
      // Code to brew a shot of espresso
    }
  
    frothMilk() {
      console.log(`Frothing milk with the ${this.brand} ${this.model}.`);
      // Code to froth milk
    }
  }
  
  // Example usage:
  const myEspressoMachine = new EspressoMachine("Breville", "BES870XL", "Stainless Steel", 599.99);
  myEspressoMachine.turnOn();
  myEspressoMachine.brewEspresso();
  myEspressoMachine.frothMilk();

/*In this example, the EspressoMachine class has four properties: brand, model, color, and price.
These are set in the constructor function, which is called when a new instance of the class is created.

The class also has three methods: turnOn(), brewEspresso(), and frothMilk(). These methods are called on 
instances of the class and perform the actions of turning on the machine, brewing espresso, and frothing milk, 
respectively.

To create an instance of the class, you can use the new keyword followed by the name of the class and any 
arguments required by the constructor. In this example, we create a new instance of the EspressoMachine 
class called myEspressoMachine with the brand "Breville", model "BES870XL", color "Stainless Steel", 
and price 599.99. We then call each of the three methods on this instance to perform the desired actions.*/

/*Bu örnekte, EspressoMachine sınıfı marka, model, renk ve fiyat olmak üzere dört özelliğe sahiptir.
Bu özellikler, sınıfın oluşturucu fonksiyonunda tanımlanır ve sınıfın yeni bir örneği oluşturulduğunda
bu özelliklere atanır.

Sınıf ayrıca turnOn(), brewEspresso() ve frothMilk() olmak üzere üç yönteme sahiptir. 
Bu yöntemler, sınıfın örneklerinde çağrılır ve sırasıyla makineyi açmak, espresso yapmak ve 
sütü köpürtmek gibi işlemleri gerçekleştirir.

Sınıfın bir örneğini oluşturmak için, new anahtar kelimesi ve oluşturucu tarafından gerektirilen 
herhangi bir argümanı kullanabilirsiniz. Bu örnekte, "Breville" markalı, "BES870XL" model numaralı, 
"Paslanmaz Çelik" renkli ve 599.99 fiyatlı yeni bir EspressoMachine örneği olan myEspressoMachine adında 
bir örnek oluşturuyoruz. Daha sonra bu örnek üzerinde her üç yöntemi de çağırarak istenilen işlemleri 
gerçekleştiriyoruz.*/