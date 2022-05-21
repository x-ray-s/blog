---
title: JavaScript设计模式
---

###单体模式
单体(Singleton)模式的思想在于保证一个特性类仅有一个实例。这意味着您第二次使用用一个类创建新对象的时候，应该得到与第一次所创建对象完全相同的对象。

+ 可以使用全局变量存储该实例。
+ 可以在构造函数的静态属性中缓存该实例。缺点在于属性是公开可访问的属性，在外部代码中肯能会修改该属性。
+ 可以将该实例包装在闭包中。其代价是带来了额外的闭包开销。

静态属性的实例
```javascript
function Universe() {
    if (typeof Universe.instance === "object") {
        return Universe.instance;
    }

    this.start_time = 0;
    this.bang = "Big";

    Universe.instance = this;
}

var uni = new Universe();
var uni2 = new Universe();
uni === uni2; //结果为true
```

闭包的实例
```javascript
function Universe() {
  var instance = this;

  this.start_time = 0;
  this.bang = "Big";

  Universe = function () {
    return instance;
  }
}

Universe.prototype.nothing = true;
var uni = new Universe();
Universe.prototype.everything = true;
var uni2 = new Universe();
//重写构造函数会丢失所有初始定义和重定义之间添加到它里面的属性。
uni.everything; //结果为undefined
```

解决丢失属性
```javascript
function Universe() {
  var instance;

  Universe = function () {
    return instance;
  }

  Universe.prototype = this;

  instance = new Universe();

  instance.constructor = Universe;

  instance.start_time = 0;
  instance.bang = "Big";

  return instance;
}
```

将构造函数和实例包装在即时函数中
```javascript
var Universe;
(function () {
  var instance;
  Universe = function () {
    if (instance) {
      return instance;
    }
    instance = this;

    this.start_time = 0;
    this.bang = "Big";
  }
})();
```

###工厂模式
设计工厂模式的目的是为了创建对象。

+ 当创建相似对象时执行重复操作。
+ 在编译时不知道具体类型的情况下，为工厂客户提供一种创建对象的接口。

###迭代器模式
在迭代器模式中，通常有一个包含某种数据集合的对象。该数据可能储存在一个复杂数据结构内部，而要提供一种简单的方法能够访问数据结构中每个元素。对象的消费者并不需要知道如何组织数据，所有需要做的就取出单个数据进行工作。

```javascript
var agg = (function () {
  var index = 0,
    data = [1, 2, 3, 4, 5],
    length = data.length;

  return {
    next: function () {
      var element;
      if (!this.hasNext()) {
        return null;
      }

      element = data[index];
      index = index + 2;
      return element;
    },

    hasNext: function () {
      return index < length;
    },

    rewind: function () {
      index = 0;
    },
    current: function () {
      return data[index];
    }
  }
})();

while (agg.hasNext()) {
	console.log(agg.next());
}
agg.rewind();
agg.current();
```

###装饰者模式
在装饰者模式中，可以在运行时动态添加附加功能到对象中。

实现装饰者模式的其中一种方法是使得每个装饰者成为一个对象，并且该对象包含了应该被重载的方法。每个装饰者实际上集成了目前已经被前一个装饰者进行增强后的对象。

```javascript
function Sale(price) {
  this.price = price || 100;
}
Sale.prototype.getPrice = function () {
  return this.price;
};
Sale.decorators = {};
Sale.decorators.fedtax = {
  getPrice: function() {
    var price = this.uber.getPrice();
    price += price * 5/100;
    return price;
  }
}
Sale.decorators.quebec = {
  getPrice: function() {
    var price = this.uber.getPrice();
    price += price * 7.5/100;
    return price;
  }
};
Sale.decorators.money = {
  getPrice: function() {
    return "$" + this.uber.getPrice().toFixed(2);
  }
};
Sale.decorators.cdn = {
  getPrice: function () {
    return "CDN$" + this.uber.getPrice().toFixed(2);
  }
}
Sale.prototype.decorate = function (decorator) {
  var F = function() {},
      overrides = this.constructor.decorators[decorator],
      i, newobj;
  F.prototype = this;
  newobj = new F();
  newobj.uber = F.prototype;
  for (i in overrides) {
    if(overrides.hasOwnProperty(i)) {
      newobj[i] = overrides[i];
    }
  }
  return newobj;
}

var sale = new Sale(100);
sale = sale.decorate('fedtax');
sale = sale.decorate('quebec');
sale = sale.decorate('money');
console.log(sale.getPrice());
```

###观察者模式
这种模式背后的主要动机是促进形成松散耦合。在这种模式中，并不是一个对象调用另一个对象的方法，而是一个对象订阅另一个对象的特性活动并在状态改变后获得通知。

```javascript
var publisher = {
  subscribers: {
    any: []
  },
  subscribe: function (fn, type) {
    var type = type || 'any';
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },
  unsubscribe: function (fn, type) {
    this.visitSubscribers('unsubscribe', fn, type);
  },
  publish: function (publication, type) {
    this.visitSubscribers('publish', publication, type);
  },
  visitSubscribers: function (action, arg, type) {
    var pubtype = type || 'any',
      subscribers = this.subscribers[pubtype];
    for (var i = 0; i < subscribers.length; i++) {
      if (action === 'publish') {
        subscribers[i](arg);
      } else {
        if (subscribers[i] === arg) {
          subscribers.splice(i, 1);
        }
      }
    }
  }
};

function makePulisher(o) {
  for (var i in publisher) {
    if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
      o[i] = publisher[i];
    }
  }
  o.subscribers = {
    any: []
  };
}

var paper = {
  daily: function () {
    this.publish('big news today');
  },
  monthly: function () {
    this.publish('interesting analysis', 'monthly');
  }
};
makePulisher(paper);

var joe = {
  drinkCoffee: function (paper) {
    console.log('Just read ' + paper);
  },
  sundayPreNap: function (monthly) {
    console.log('About to fall asleep reading this' + monthly);
  }
}

paper.subscribe(joe.drinkCoffee);
paper.subscribe(joe.sundayPreNap, 'monthly');

paper.daily();
paper.daily();
paper.daily();
paper.monthly();

```
