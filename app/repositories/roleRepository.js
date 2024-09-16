const { where } = require("sequelize");
const { role } = require("../models");

class RoleRepository {
    async findAll() {
        return role.findAll();
    }

    async findById(id) {
        return await role.findByPk(id);
    }

    async create(roleData) {
        return await role.create(roleData);
    }

    async update(id, roleData) {
        const Role = await role.findByPK(id);
        if (Role) {
            await role.update(roleData, {
                where: {
                    id: id,
                },
            })

            const Role = await role.findByPK(id);
            return Role
        }
        return null
    }

    async delete(id) {
        const Role = await role.findByPk(id);
        if (Role) {
            return await role.destroy({
                where: {
                    id: id,
                }
            });
        }
        return null;
    }
}

module.exports = new RoleRepository()