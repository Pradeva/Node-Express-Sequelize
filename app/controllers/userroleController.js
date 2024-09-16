const UserroleService = require("../services/userroleService");
const UserService = require("../services/userService");
const RoleService = require("../services/roleService");
const userroleService = new UserroleService;
const userService = new UserService;
const roleService = new RoleService;

class UserroleController {
    async getAllUserroles(req, res) {
        try {
            const userroles = await userroleService.getAllUserroles();
            res.json(userroles)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async getUserroleById(req, res) {
        const { id } = req.params
        try {
            const userrole = await userroleService.getUserroleById(id)
            res.json(userrole)
        } catch (error) {
            res.status(404).json({ error: error.message})
        }
    }

    async createUserrole(req, res) {
        const userroleData = req.body
        try {
            const userData = await userService.getUserById(userroleData.userId);
            const roleData = await roleService.getRoleById(userroleData.roleId);
            if (userData && roleData ) {
                const userrole = await userroleService.createUserrole(userroleData)
                res.status(201).json(userrole);
            } else {
                res.json({ message: "invalid input"})
            }
        } catch (error) {
            res.status(400).json({ error: error.message})
        }
    }

    async updateUserrole(req, res) {
        const { id } = req.params
        const userroleData = req.body;
        try {
            const userData = await userService.getUserById(userroleData.userId);
            const roleData = await roleService.getRoleById(userroleData.roleId);
            console.log(userData)
            if (userData && roleData){
                const userrole = await userroleService.updateUserrole(id, userroleData)
                res.json(userrole)
            } else {
                res.json({ message: "invalid input"})
            }
            
        } catch (error) {
            res.status(404).json({ error: error.message})
        }
    }

    async deleteUserrole(req, res) {
        const { id } = req.params;
        try {
            const userrole = await userroleService.deleteUserrole(id);
            res.json({message: "Userole deleted"})
        } catch (error) {
            res.status(404).json({ error: error.message})
        }
    }
}

module.exports = new UserroleController();