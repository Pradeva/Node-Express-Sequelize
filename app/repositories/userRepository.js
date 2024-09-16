const { where } = require("sequelize");
const { user } = require("../models");

class UserRepository {
    async findAll() {
      return await user.findAll();
    }
  
    async findById(id) {
      return await user.findByPk(id);
    }
  
    async create(userData) {
      return await user.create(userData);
    }
  
    async update(id, userData) {
      const User = await user.findByPk(id);
      if (User) {
        await user.update(userData, {
          where: {
              id: id,
          },
        });

        const User = await user.findByPk(id);
        return User;
      }
      return null;
    }
  
    async delete(id) {
      const User = await user.findByPk(id);
      if (User) {
        return await user.destroy({
          where: {
              id: id,
          }
        });
      }
      return null;
    }
}

module.exports = new UserRepository();
