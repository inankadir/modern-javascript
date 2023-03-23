/*JavaScript'te miras ve polimorfizm, nesne yönelimli programlama (OOP) prensiplerine dayanan
iki temel kavramdır.

Miras, bir nesnenin özelliklerinin başka bir nesne tarafından kalıtım yoluyla alınmasıdır. 
Yani bir nesne, diğer bir nesne tarafından miras alınarak onun özelliklerini ve davranışlarını devralır. 
JavaScript'te miras, prototip zinciri aracılığıyla gerçekleştirilir.

Örnek olarak, aşağıdaki kodda "Animal" adlı bir üst sınıf tanımlanmıştır. 
"Dog" adlı alt sınıf ise "Animal" sınıfından miras almıştır. Böylece "Dog" sınıfı, "Animal" sınıfının 
özelliklerini ve davranışlarını kullanabilir.*/

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.


/*Polimorfizm ise, bir sınıfın farklı nesneler tarafından farklı şekillerde uygulanabilmesidir. 
Yani, farklı nesneler aynı işlevi farklı şekillerde gerçekleştirebilir. JavaScript'te polimorfizm, 
fonksiyonların çoklu biçimliliği ile sağlanır.

Örnek olarak, aşağıdaki kodda "Animal" adlı bir sınıf ve "speak" adlı bir fonksiyon tanımlanmıştır. 
"Dog" ve "Cat" adlı alt sınıflar, "speak" fonksiyonunu kendi ihtiyaçlarına uygun şekilde yeniden 
tanımlayarak polimorfizm özelliğini kullanmışlardır.*/

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

class Cat extends Animal {
  speak() {
    console.log(this.name + ' meows.');
  }
}

function animalSpeak(animal) {
  animal.speak();
}

let d = new Dog('Mitzie');
let c = new Cat('Fluffy');

animalSpeak(d); // Mitzie barks.
animalSpeak(c); // Fluffy meows.

/*Yukarıdaki örnekte, "animalSpeak" fonksiyonu herhangi bir "Animal" sınıfı nesnesini parametre olarak 
kabul edebilir ve "speak" fonksiyonunu çağırarak polimorfizm özelliğini kullanır.*/
