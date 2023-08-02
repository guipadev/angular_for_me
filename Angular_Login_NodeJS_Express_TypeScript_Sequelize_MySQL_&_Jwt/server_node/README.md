

## Instalaciones
- express: framework
- bcrypt: encriptar contraseña de texto plano, para BD
- cors: manejo puertos
- dotenv: variables de entorno
- jsonwebtoken: manejo de token y tambien para typescript: npm i --save-dev @types/jsonwebtoken
- sequelize: manejo bd adicional especificar moto npm i --save mysql2
- typescript: npm i typescript --save-dev 
  **Iniciar proyecto**  ```npx tsc --init```
- nodemon: escuchar cambios npm i nodemon --save-dev
- ts para express: ```npm i --save-dev @types/express```

## Configuración archivos tsc
En archivo config.json habilitar y enviar todo los archivos generados ts a la carpeta dist:
"outDir": "./dist"

## Mantener escuchando cambios y traspilando js a ts
```npx tsc --watch```

## configuracion ejecucion proyecto 
Archivo ```package.json``` 
```"dev": "nodemon dist/index.js"```  para ejecutar consola ```npm run dev```
```"typescript": "npx tsc --watch"``` para ejecutar consola ```npm run typescript```

### End point
Devolver todos los productos
GET - http://localhost:3001/api/products  

Agregamos usuarios
POST - http://localhost:3001/api/user

Devolver todos los productos
POST - http://localhost:3001/api/user/login  