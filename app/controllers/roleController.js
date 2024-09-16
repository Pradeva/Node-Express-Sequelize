const RoleService = require("../services/roleService");
const roleService = new RoleService;

class RoleController {
    async getAllRoles(req, res) {
        try{
            const roles = await roleService.getAllRoles();
            res.json(roles);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async getRoleById(req, res) {
        const { id } = req.params
        try {
            const role = await roleService.getRoleById(id);
            res.json(role);
        } catch (error) {
            res.status(404).json({ error: error.message});
        }
    }

    async createRole(req, res) {
        const roleData = req.body
        try {
            const role = await roleService.createRole(roleData)
            res.status(201).json(role);
        } catch (error) {
            res.status(400).json({ error: error.message})
        }
    }

    async updateRole(req, res) {
        const { id } = req.params
        const roleData = req.body;
        try {
            const role = await roleService.updateRole(id, roleData)
            res.json(role)
        } catch (error) {
            res.status(404).json({ error: error.message})
        }
    }

    async deleteRole(req, res) {
        const { id } = req.params;
        try {
            const role = await roleService.deleteRole(id);
            res.json({message: "Role deleted"})
        } catch (error) {
            res.status(404).json({ error: error.message})
        }
    }
}

module.exports = new RoleController();