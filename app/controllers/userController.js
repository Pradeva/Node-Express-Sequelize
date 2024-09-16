const UserService = require("../services/userService");
const userService = new UserService;

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.json(users)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async getUserById(req, res) {
        const { id } = req.params
        try {
            const user = await userService.getUserById(id)
            res.json(user)
        } catch (error) {
            res.status(404).json({ error: error.message})
        }
    }

    async createUser(req, res) {
        const userData = req.body
        try {
            const user = await userService.createUser(userData)
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message})
        }
    }

    async updateUser(req, res) {
        const { id } = req.params
        const userData = req.body;
        try {
            const user = await userService.updateUser(id, userData)
            res.json(user)
        } catch (error) {
            res.status(404).json({ error: error.message})
        }
    }

    async deleteUser(req, res) {
        const { id } = req.params;
        try {
            const user = await userService.deleteUser(id);
            res.json({message: "User deleted"})
        } catch (error) {
            res.status(404).json({ error: error.message})
        }
    }
}

module.exports = new UserController();