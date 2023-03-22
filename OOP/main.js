/*JavaScript, nesne yönelimli programlama (OOP) prensiplerini destekleyen bir programlama dilidir. 
OOP, programlamada nesnelere dayalı bir yaklaşımı ifade eder. Bu yaklaşım, gerçek hayattaki 
nesnelerin (araba, kitap, insan, vb.) programlamadaki temsilini sağlar. Bu nedenle, OOP, büyük ve 
karmaşık projelerin geliştirilmesinde sıklıkla kullanılır.

JavaScript'te nesne yönelimli programlama, sınıflar ve nesneler aracılığıyla gerçekleştirilir. 
Sınıflar, bir nesnenin yapısını ve özelliklerini tanımlayan şablonlar olarak düşünülebilir. 
Nesneler ise sınıflardan türetilen ve özellikleri ile davranışları olan örneklerdir.

Sınıflar ve nesneler arasındaki fark, şöyle açıklanabilir:

Sınıf: Bir sınıf, nesnenin özelliklerini ve davranışlarını tanımlayan bir yapıdır. 
Bir sınıftan, birden çok nesne türetilebilir. Sınıflar, class anahtar kelimesi ile tanımlanır
ve constructor, property (özellik) ve method (metot) gibi özellikleri barındırabilir.

Nesne: Bir nesne, sınıftan türetilmiş ve kendi özelliklerine sahip olan bir örnektir. 
Nesneler, sınıfın özelliklerini ve davranışlarını kalıtım yoluyla miras alırlar.

JavaScript'te sınıflar şu şekilde tanımlanır:*/

class Araba {
    constructor(marka, model, renk) {
      this.marka = marka;
      this.model = model;
      this.renk = renk;
    }
  
    calistir() {
      console.log('Araba çalıştı.');
    }
  
    durdur() {
      console.log('Araba durdu.');
    }
  }

/*Bu sınıfın üç özelliği (marka, model, renk) ve iki metodu (calistir, durdur) vardır.

Sınıftan bir nesne oluşturmak için ise şu şekilde yapılır:*/

const araba1 = new Araba('BMW', 'X5', 'Beyaz');

/*Bu, Araba sınıfından bir nesne oluşturur ve araba1 değişkenine atar. Bu nesne, BMW markalı, 
X5 modelinde ve Beyaz renktedir.

Nesnenin özelliklerine ve metodlarına erişmek için ise şu şekilde yapılır:*/

console.log(araba1.marka); // BMW
console.log(araba1.calistir()); // Araba çalıştı.

/*Bu örnek, JavaScript'teki OOP kavramlarını anlamak için basit bir örnek olarak verilmiştir. 
Nesne yönelimli programlama, daha büyük ve karmaşık projelerde kullanılar*/

