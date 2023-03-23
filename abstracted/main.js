/*JavaScript dilinde tam anlamıyla abstract sınıflar bulunmamaktadır. Ancak OOP programlama mantığına uygun 
bir şekilde, bir sınıfın tamamlanmamış işlevselliğini belirleyen ve miras alınan alt sınıflar tarafından 
tamamlanması gereken yöntemler (metotlar) ve özellikler tanımlamak mümkündür.

Bu işlevsellik, genellikle soyut sınıflar (abstract classes) olarak adlandırılır ve bu sınıfların 
özellikleri ve yöntemleri soyut (abstract) olarak işaretlenir. Bu, alt sınıfların, soyut sınıfı miras 
alarak, soyut yöntemleri ve özellikleri uygulamalarını sağlar.

Örneğin, bir Hayvan sınıfı oluşturalım ve bu sınıfın özellikleri ve bazı yöntemleri soyut olarak tanımlayalım:*/

class Hayvan {
  constructor(isim, yas) {
    this.isim = isim;
    this.yas = yas;
  }
  
  beslenme() {
    throw new Error('Soyut yöntem "beslenme" uygulanmamış.');
  }
  
  hareket() {
    throw new Error('Soyut yöntem "hareket" uygulanmamış.');
  }
}

/*Bu sınıfın beslenme() ve hareket() yöntemleri soyut olarak işaretlenmiştir. Bu yöntemler, 
alt sınıflar tarafından uygulanmalıdır.

Alt sınıflardan biri olan Kedi sınıfı, Hayvan sınıfını miras alacak ve soyut yöntemleri uygulayacaktır:*/

class Kedi extends Hayvan {
  constructor(isim, yas) {
    super(isim, yas);
  }
  
  beslenme() {
    console.log(`${this.isim} beslendi.`);
  }
  
  hareket() {
    console.log(`${this.isim} hareket etti.`);
  }
}

/*Bu sınıfın beslenme() ve hareket() yöntemleri uygulanmıştır ve Hayvan sınıfının soyut yöntemlerini 
tamamlamıştır. Bu şekilde, Hayvan sınıfı soyut bir sınıf olurken, alt sınıfların, soyut yöntemleri 
uygulaması sağlanmış olur.*/
