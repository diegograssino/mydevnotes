# FUNDAMENTOS DE REACT: COMPONENTES

En esta serie de articulos de fundamentos de React voy a tratar de ampliar conceptos básicos que, en mi experiencia, suelen ser motivo de dudas al momento de aprender esta libreria buscando que estos articulos sirvan de apoyo a cualquier material que se este siguiendo, reforzando en cada punto que se necesite.

### Otras publicaciones relacionadas

* [Conceptos básicos de GIT y GITHUB.](http://mydevnotes.vercel.app/article/Vjo8LeY0Hh8HOPHuNSbc)

## Todo empieza con un componente

Una vez creada nuestra app de React (podés revisar cómo en la publicación de [conceptos básicos de GIT y GITHUB](http://mydevnotes.vercel.app/article/Vjo8LeY0Hh8HOPHuNSbc)) debemos limpiar el template que nos deja create-react-app/ vite para poder empezar a agregar nuestros componentes, que son una de las bases de como trabajar con React. A partir de ahora, nuestros pensamientos deben tener ¡forma de componente!.

### Limpiando el template

Tanto [create-react-app](https://create-react-app.dev/) como [vite](https://vitejs.dev/) (que en francés significa "rápidamente" y se pronuncia como "veet") son tools o herramientas para generar proyectos de React con un solo comando sin necesidad de hacer una configuración maratonica para ello. Ambas nos deján un simpatico template con un logo de React que gira como signo de que todo esta funcionando correctamente, y como primer paso debemos avanzar en limpiar todo lo generado así damos lugar a nuestro propio código.

![create-react-app template](https://i.imgur.com/c0dKce5.png)
*create-react-app template*

![vite template](https://i.imgur.com/DnXDW12.png)
*vite template*


~~~
git --version
~~~

Si retorna la versión de git que estamos utilizando, entonces ya lo tenemos instalado y podemos continuar con el siguiente paso pero no sin antes saber que, si utilizo Windows, a partir de ahora va a ser mas cómodo utilizar git-bash, la consola que viene incluida con git ya que asi evitaremos errores. Si no lo tenemos instalado, nos dirigiremos a la página oficial de [git](https://git-scm.com/downloads) para descargarlo e instalarlo siguiendo los pasos que se indican para cada sistema operativo.
