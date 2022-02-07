# CONCEPTOS BÁSICOS DE GIT Y GITHUB.

Un skill fundamental y muy importante que debemos manejar como desarrolladores es utilizar git para nuestros proyectos, nos ayuda en múltiples cosas como tener un historial completo del avance de nuestra app, poder volver atrás y trabajar en equipo sin problemas, entre otras.

Es muy normal que. también, durante nuestra vida académica debamos hacer entregas por medio de git es por eso que cubriremos todo lo básico que debemos saber de git.

## Instalación

### Instalación de git

Lo primero que debemos hacer es chequear si tenemos instalado git, para eso utilizaremos la consola/ linea de comando (o cmd) de nuestro sistema operativo y escribimos lo siguiente:

~~~
git --version
~~~

Si retorna la versión de git que estamos utilizando, entonces ya lo tenemos instalado y podemos continuar con el siguiente paso pero no sin antes saber que, si utilizo Windows, a partir de ahora debemos utilizar git-bash, la consola que viene incluida con git ya que asi evitaremos errores. Si no lo tenemos instalado, nos dirigiremos a la página oficial de [git](https://git-scm.com/downloads) para descargarlo e instalarlo siguiendo los pasos que se indican para cada sistema operativo.

### Instalación de Node.js y NPM

Luego haremos algo similar pero con Node, verificaremos primero si lo tenemos instalado, para eso utilizaremos la consola nuestro sistema (recordar que si tenemos Windows, utilizaremos git-bash):

~~~
node -v
~~~

Si retorna la versión de node que estamos utilizando, entonces ya lo tenemos instalado y podemos continuar con el siguiente paso. Si no lo tenemos instalado, nos dirigiremos a la página oficial de [Node](https://nodejs.org/es/download/) y seleccionaremos la versión LTS, siempre es la mas estable, siguiendo luego los pasos según el sistema operativo que tengamos.

## Creación de proyectos e inicialización

### REACT: Crear un proyecto con create-react-app

Ahora que tenemos Node instalado tambien tendremos NPM, su gestor de paquetes, y lo utilizaremos para utilizar create-react-app , una herramienta de los mismos creadores de React con la que podremos generar un proyecto pre configurado con todo listo para comenzar. Para esto, nuevamente iremos a la consola y escribiremos lo siguiente:

~~~
npx create-react-app my-app
~~~

Donde my-app es el nombre que le daremos a nuestro proyecto. Un detalle muy importante es evitar utilizar espacios y la palabra react en el nombre del proyecto.

## Configuración del repositorio con Github

Ahora ya tenemos nuestro proyecto creado, pero no lo tenemos subido a Github , desde ya que primero debemos crear un cuenta en dicho servicio, una vez hecho esto, desde su misma página vamos a crear un repositorio haciendo click en el botón de New o Nuevo:

![](https://dl.dropbox.com/s/hrfmxftvgih7vxh/newrepo1.png)

Ingresaremos el nombre del proyecto y, sin modificar ninguna de las opciones por defecto, daremos click en Create repository/ Crear repositorio.

![](https://dl.dropbox.com/s/u0g4ezetwuihgm7/newrepo2.png)

¡Felicidades! Acabas de crear tu primero repo pero esta vacío, Github nos estará mostrando algunas opciones para subirlo, tomaremos la segunda opción ya que tenemos un proyecto existente ya creado, esta nos sugiere algunos comando pero primero lo primero, nos dirigiremos a la consola y nos aseguramos de estar dentro de la carpeta del proyecto:

~~~
cd my-app
~~~

Donde my-app es el nombre que le dieron a su proyecto al crearlo. Ahora que ya estamos dentro de la carpeta, sí utilizaremos los comandos sugeridos por Github:

~~~
git remote add origin https://github.com/my-user/my-app.git  
git branch -M main  
git push -u origin main
~~~

Recuerden que Github ya les va a dar todo para copiar y pegar, en este ejemplo my-user debería ser su nombre de usuario y my-app el nombre que le pusieron al repo. ¡Listo! Ahora ya tenemos nuestro repo enlazado y actualizado, y podremos subir todas las actualizaciones que queramos a través de la consola.

## Subir actualizaciones y link al commit

A partir de ahora, si queremos subir una actualización a nuestro repo, lo cual debemos hacer seguido para tener un mejor control de versiones, debemos hacer lo siguiente, siempre desde adentro de la carpeta del proyecto:

~~~
git add --all
git commit -m "Comentario en imperativo de lo nuevo de esta version"
git push -u origin main
~~~

Es importante evitar tildes y ñ y que comentemos en imperativo (Agregue, modifique o elimine, por ejemplo), ese comentario se mostrará luego en el historial de versiones por lo que podré saber que se hizo. Pero, ¿Cómo hago para entregar cada desafio individualmente? Cada uno de estas actualizaciones o commits tienen un identificador el cual podremos saber ingresando a la pagina de nuestro repo y haciendo click donde se muestra a continuación:

![](https://dl.dropbox.com/s/un94716k6jlkejt/commit1.png)

![](https://dl.dropbox.com/s/yxulxshzmqie3jz/commit2.png)

![](https://dl.dropbox.com/s/d171ng0knj9qj8v/commit3.png)

Finalmente, entregamos el link de esa misma pagina que va a tener este formato:

~~~
https://github.com/my-user/my-app/commit/identificador
~~~

Y con esto, ya sabemos todo lo necesario de GIT/ Github para poder entregar los desafios y el proyecto final!
