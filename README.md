# API con Typescript y ORM (TypeORM)

## TypeORM

TypeORM es una librería hecha en Javascript que corren en NodeJs que es usada como ORM(Object Relational Mapping) en *Javascript* como en *Typescript*. Este tipo de librería permite que nuestras aplicaciones web sean escalables y mantenibles en lo largo del tiempo.

El mappear nuestros objetos con cada columna de alguna tabla específica de nuestra base de datos, se hace complejo y tedioso. Es ahí donde este ORM nos simplifica la vida usando algo llamado *Entity*.

### Herramientas usadas para crear nuestra API.

Actualmente el uso de API's es demandada por todo el mundo y para crearlo de manera fácil, que sea mantenible y escalable es necesario el uso de varias herramientas para construir una aplicación web robusta.

Entre estas herramientas están:

* Express (Usado para la creación de aplicaciones web y funcionamiento de servidor web)

* TypeORM (Usado para mapeo de objetos con columnas de tables en base de datos)

* PG (Librería para conectar TypeORM con el motor de base de datos PostgresSQL)

* Cors (Usado para habilitar y permitir conexiones externas al servidor web)

* Morgan (Usado para obtener logs de peticiones al servidor web)

### Pasos de configuración para proyecto y ejecución de proyecto.

Este proyecto puede ser usado y construido con Docker, es necesario que se tenga instalado Docker y docker-compose para poder construirlo y ejecutarlo.

**Ejecutar el comando docker-compose up -d para poder ejecturar el contenedor con el proyecto. Los cambios que se realicen en código cambian automáticamente, de ser necesario se puede ejecutar el comando del primer paso.**

