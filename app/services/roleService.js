const roleRepository = require("../repositories/roleRepository");

class RoleService {
    async getAllRoles() {
        const roles = await roleRepository.findAll();
        return roles;
    }

    async getRoleById(id) {
        const role = await roleRepository.findById(id);
        if (!role) {
            throw new Error("Role not found");
        }

        return role;
    }

    async createRole(roleData) {
        return await roleRepository.create(roleData);
    }

    async updateRole(id, roleData) {
        const role = await roleRepository.update(id, roleData);
        if (!role) {
            throw new Error("Role not found");
        }
        return role;
    }

    async deleteRole(id) {
        const role = await roleRepository.delete(id);
        if (!role) {
            throw new Error("Role not found");
        }

        return role;
    }
}

module.exports = RoleService