const userroleRepository = require("../repositories/userroleRepository");

class UserroleService {
    async getAllUserroles() {
        const Userroles = await userroleRepository.findAll();
        return Userroles;
    }

    async getUserroleById(id) {
        const Userrole = await userroleRepository.findById(id);
        if (!Userrole) {
            throw new Error("Userrole not found");
        }

        return Userrole;
    }

    async createUserrole(userData) {
        return await userroleRepository.create(userData);
    }

    async updateUserrole(id, userData) {
        const Userrole = await userroleRepository.update(id, userData);
        if (!Userrole) {
            throw new Error("User not found");
        }
        return Userrole;
    }

    async deleteUserrole(id) {
        const Userrole = await userroleRepository.delete(id);
        if (!Userrole) {
            throw new Error("Userrole not found");
        }

        return Userrole;
    }
}

module.exports = UserroleService;