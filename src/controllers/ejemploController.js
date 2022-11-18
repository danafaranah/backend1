import { response } from "../helpers/Response.js";

let data = [{
        _id: "1",
        name: "Dana",
        lastName: "Carrillo",
        age: 17,
    },

    {
        _id: "2",
        name: "Jesus",
        lastName: "Carrillo",
        age: 38,
    },

    {
        _id: "3",
        name: "Luis",
        lastName: "Carrillo",
        age: 11,
    },
];

const userCtrl = {}

userCtrl.getData = (req, res) => {
    try {
        response(res, 200, true, data, "Lista de Usuarios");
    } catch (error) {
        response(res, 500, false, "", error.message);
    }
};

userCtrl.saveData = (req, res) => {
    try {
        const { _id, name, lastName, age } = req.body;
        data.push({ _id, name, lastName, age: parseInt(age) });
        response(res, 201, true, { _id, name, lastName, age }, "Registro Guardado");
    } catch (error) {
        response(res, 500, false, "", error.message);
    }
};

userCtrl.getDataById = (req, res) => {
    try {
        const { id } = req.params;
        const user = data.find((item) => item._id === id);
        if (!user) {
            return response(res, 404, false, "", "user not founded");
        }
        response(res, 200, true, user, "user founded");
    } catch (error) {
        response(res, 500, false, "", error.message);
    }
};

userCtrl.update = (req, res) => {
    try {
        const { id } = req.params;
        // const { _id, name, lastName, age } = req.body;
        const newData = data.map((item) =>
            item._id === id ? {...req.body, age: parseInt(req.body.age) } : item
        );

        data = newData;
        response(res, 200, true, id, "Estoy en el método put");
    } catch (error) {
        response(res, 500, false, "", error.message);
    }
};
userCtrl.deleteData = (req, res) => {
    try {
        const { id } = req.params;
        const newData = data.filter((item) => item._id !== id);
        data = newData;
        response(res, 200, true, "", "Usuario Eliminado");
    } catch (error) {
        response(res, 500, false, id, error.message);
    }
};
export default userCtrl