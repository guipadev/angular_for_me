# Estructura proyecto

## Estructura del servicio
Si el 'servicio' es de un CRUD normal con su index, post, get, create, update, delete, el 'servicio' solo se pondria en el 'modulo'. Y no estar en cada uno de los componentes, teniendo cada servicio uno o dos funciones.

Si el archivo de servicio, vamos a llamar 25, 30 o más end point, en ese caso si se plantea modularizarlo.

Los servicios de la intranet no serian publicos. Incluso para el area de administración, los servicio se manejan de forma separada.

## Directorios
Normalmente los proyectos suelen estar divididos en varias secciones funcionales grandes:
- src
  - app
    - admin: Solo acceder personal encargado de gestionar la aplicación.
    - core: elementos comunes para toda la aplicación.
      - shared: modulo compartido
        - components: 
          - navbar:
          - login-box: 
        - guards: proteger sistema de rutas.
        - pipes: todos los pipes que necesitamos como filtro.
        - shared.module.ts: contendra todas la librerias, bibliotecas importadas externas (todo lo que se importa se debe exportar para uso de este en otros modulos)
      - store: redux
      - models: todos los modelos
    - public: Toda la parte accesible al mundo (Home, Login, Página sobre nosotros)
      - auth: No seria un modulo, ya que tendriamos una pagina de registro, login y recuperar clave, al ser pequeño no seria necesario por ende crearle un modulo a auth
        - login:
          - components: aqui seria un navbar, loginBox, footer elementos que forman parte de la pagina, para tener posibilidad reutilizar estos componentes a futuro
          - containers: son paginas completas, cuestion alineacion y estructuracion de los distintos componentes, por ende un componente login-box lo puedo utilizar en donde se quiera
        - public.module.ts: 
        - public-routing.module.ts: al importartlo vaya al final de todos los import
        - public.component.ts
        - public.component.html
    - intranet: Privada, solo acceden usuarios registrados.
      - users: seccion bastante independiente y bastante contenido, por lo cual amerita tener un modulo completo (user-rounting, user_component.hml, css, ts)
        - user-detail: activar un usuario etc
        - user-list: 