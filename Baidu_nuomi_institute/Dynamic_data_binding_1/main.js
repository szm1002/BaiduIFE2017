function Observer(data) {
    this.data = data;
    this.walk(data);
}

let p = Observer.prototype;

p.walk = function(obj) {
    let val;

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            val = obj[key];

            if (typeof val === 'object') {
                new Observer(val);
            }

            this.convert(key, val);
        }
    }
};

p.convert = function(key, val) {
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configourable: true,
        get: function() {
            console.log(`你访问了 ${key}`);
            return val;
        },
        set: function(newVal) {
            console.log(`你设置了 ${key}，新的值为 ${newVal}`);
            val = newVal;
        }
    })
};

let app1 = new Observer({
  name: 'Song Ziming',
  age: 24
});

let app2 = new Observer({
  university: 'BUPT',
  major: 'Communication Engineering'
});

app1.data.name; // 你访问了 name
app1.data.age = 100;  // 你设置了 age，新的值为100
app2.data.university; // 你访问了 university
app2.data.major = 'science'  // 你设置了 major，新的值为 science
