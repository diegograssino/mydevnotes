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

¡Hermosa bienvenida nos dan ambas tool a nuestra nueva app de React! Pero no va a durar mucho tiempo, es momento de ponernos manos a la obra y comenzar a trabajar, y para eso, tendremos que quitar todo lo que nos esta mostrando, quitaremos lo siguiente:

* Dentro de index/ main: Solo vamos a dejar la importación de la libreria de React y el renderizado del componente App, todo lo que refiera a estilos CSS y librerias de test sera removido.
* Dentro de App: Tambien quitaremos todas las referencias a archivos CSS como tambien todo lo que este dentro del return.
* Basicamente, solo nos tiene que quedar index/ main, App y los archivos de imagenes referidos al favicon, el resto, out.

Básicamente va a quedar así nuestro proyecto:

*create-react-app limpio*

*vite limpio*

#### ¡ARTICULO EN PROCESO! Proximamente finalizado ...