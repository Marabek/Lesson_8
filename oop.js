class User {
    constructor(username, age, password) {
        this.username = username;
        this.age = age;
        this.password = password;
    }
}
class User_1 extends User {
    constructor(username, age, password) {
        super(username, age, password);
    }
    login() {
        let a = prompt('Введите ваш login: ');
        let b = prompt('Введите ваш password: ');
        if (a == this.username && b >= this.password) {
            console.log("Добро пожаловать на сайт!!");
        } else { console.log("Доступ запрещен!!!") };
    }
}

let student_1 = new User_1("admin", 18, "admin");

student_1.login();