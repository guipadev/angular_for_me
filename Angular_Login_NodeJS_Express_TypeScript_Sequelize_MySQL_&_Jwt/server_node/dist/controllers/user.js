"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
//import { User } from '../models/user';
//import jwt from 'jsonwebtoken';
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    res.json({
        msg: 'New user',
        body
    });
    // Validamos si el usuario ya existe en la base de datos
    //const user = await User.findOne({ where: { username: username } });
    /*
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        })
    }
    */
    //const hashedPassword = await bcrypt.hash(password, 10);
    /*
    try {
        // Guardarmos usuario en la base de datos
        await User.create({
            username: username,
            password: hashedPassword
        })

        res.json({
            msg: `Usuario ${username} creado exitosamente!`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        })
    }
    */
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    res.json({
        msg: 'Login user',
        body: req.body
    });
    /*
    const { username, password } = req.body;

    // Validamos si el usuario existe en la base de datos
    const user: any = await User.findOne({ where: { username: username } });

    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username} en la base datos`
        })
    }

    // Validamos password
    const passwordValid = await bcrypt.compare(password, user.password)
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password Incorrecta`
        })
    }

    // Generamos token
    const token = jwt.sign({
        username: username
    }, process.env.SECRET_KEY || 'pepito123');

    res.json(token);
    */
});
exports.loginUser = loginUser;
