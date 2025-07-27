class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  static users = [
    new User(1, 'John Doe', 'john@example.com'),
    new User(2, 'Jane Smith', 'jane@example.com')
  ];

  static findAll() {
    return this.users;
  }

  static findById(id) {
    return this.users.find(user => user.id === parseInt(id));
  }

  static create(userData) {
    const newId = Math.max(...this.users.map(u => u.id)) + 1;
    const newUser = new User(newId, userData.name, userData.email);
    this.users.push(newUser);
    return newUser;
  }

  static update(id, userData) {
    const userIndex = this.users.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) return null;
    
    this.users[userIndex] = { ...this.users[userIndex], ...userData };
    return this.users[userIndex];
  }

  static delete(id) {
    const userIndex = this.users.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) return false;
    
    this.users.splice(userIndex, 1);
    return true;
  }
}

module.exports = User;