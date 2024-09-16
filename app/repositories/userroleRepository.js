const { userRole } = require("../models")

class UserroleRepository {
    async findAll() {
        return await userRole.findAll();
      }
    
      async findById(id) {
        return await userRole.findByPk(id);
      }
    
      async create(userData) {
        return await userRole.create(userData);
      }
    
      async update(id, userData) {
        const Userrole = await userRole.findByPk(id);
        if (Userrole) {
          await userRole.update(userData, {
            where: {
                id: id,
            },
          });
  
          const Userrole = await userRole.findByPk(id);
          return Userrole;
        }
        return null;
      }
    
      async delete(id) {
        const Userrole = await userRole.findByPk(id);
        if (Userrole) {
          return await userRole.destroy({
            where: {
                id: id,
            }
          });
        }
        return null;
      }
}

module.exports = new UserroleRepository();