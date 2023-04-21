# Buscar ayuda CLI
ng c --help

### Correr aplicación
npm start
ng s

### Directorio se llame ej1
ng new clitest --directory="ej1"

### Crear componente, en ruta especifica sin css y spec
ng c pages/about -s --skip-tests

### Crear componente pero no dentro de una carpeta en especifico
ng g c pages/mainpage -s --flat

### Crear servicio usuario en una carpeta sin crear que se llama services
ng g s services/usuario --skip-tests

### Crear un guard en una carpeta inexistente guards
ng g g guards/auth --skip-tests