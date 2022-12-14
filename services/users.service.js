class UsersService {
  constructor() {}

  async find() {
    return [];
  }

  async findOne(id) {
    return { id };
  }

  async create(data) {
    return { data };
  }

  async update(id, changes) {
    return { id, changes };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UsersService;
