const userRepository = require("../repositories/userRepository");

class UserService {
    async getAllUsers() {
        const users = await userRepository.findAll();
        return users;
    }

    async getUserById(id) {
        const user = await userRepository.findById(id);
        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }

    async createUser(userData) {
        return await userRepository.create(userData);
    }

    async updateUser(id, userData) {
        const user = await userRepository.update(id, userData);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }

    async deleteUser(id) {
        const user = await userRepository.delete(id);
        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }
}

module.exports = UserService;