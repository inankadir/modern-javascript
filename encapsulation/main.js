/*Encapsulation, nesne yönelimli programlamada (OOP) bir ilkedir ve bir nesnenin iç mantığının 
dışarıdan gelen müdahalelerden korunmasıdır. Böylece, nesne içindeki verilerin ve davranışların 
güvenliği sağlanır ve nesnenin kullanımı daha kolay hale gelir.

JavaScript'te encapsulation, özelliklerin ve metodların özel ve kamu olarak ayrılması ile sağlanır. 
Bu sayede, nesne dışındaki kodlar, nesnenin özelliklerine doğrudan erişemez veya onları değiştiremezler.

Örnek olarak, bir araba sınıfı oluşturalım ve arabaların model, renk ve hız gibi özellikleri olsun:*/

class Araba {
    constructor(model, renk, hiz) {
      this._model = model;
      this._renk = renk;
      this._hiz = hiz;
    }
  
    hizlan() {
      this._hiz += 10;
      console.log(`Hız arttırıldı. Yeni hız: ${this._hiz}`);
    }
  
    yavasla() {
      this._hiz -= 10;
      console.log(`Hız azaltıldı. Yeni hız: ${this._hiz}`);
    }
  }

/*Bu sınıfın özellikleri _model, _renk ve _hiz olarak tanımlanmıştır. Bu özelliklerin hepsi _ karakteri ile 
başlamaktadır. Bu, özelliklerin özel (private) olduğunu belirtir.

hizlan() ve yavasla() metotları, _hiz özelliğini arttırıp azaltırken, dışarıdan direkt olarak _hiz özelliğine 
erişim engellendi. Bunun yerine, metotlar kullanılarak _hiz özelliği kontrol edildi.

Bir araba nesnesi oluşturalım ve hızını arttıralım:*/

const araba1 = new Araba('BMW', 'Siyah', 0);
araba1.hizlan(); // Hız arttırıldı. Yeni hız: 10

/*Bu örnekte, _hiz özelliği direkt olarak erişime kapatıldı ve sadece hizlan() ve yavasla() metotları 
üzerinden kontrol edildi. 
Bu, nesnenin iç yapısını koruyarak, kullanımını daha güvenli hale getirdi.