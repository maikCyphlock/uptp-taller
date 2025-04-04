# Documentación de Nunjucks en este proyecto

Nunjucks es un motor de plantillas JavaScript que nos permite renderizar plantillas con variables dinámicas. En este proyecto, estamos utilizando Nunjucks para renderizar las vistas de la aplicación.

# Justificación de la elección de Nunjucks

En este proyecto estamos utilizando Nunjucks como motor de plantillas, ya que se pretende migrar a Django en un futuro cercano y la sintaxis de Nunjucks es muy similar a la de Django. De esta forma, al familiarizarnos con Nunjucks, nos será más fácil adaptarnos a Django en el futuro.

## Cómo funciona

Cuando se hace una petición a una ruta, Express llama al middleware `nunjucks.render` y le pasa la ruta de la plantilla que se quiere renderizar y los datos que se quieren pasar a la plantilla. Luego, Nunjucks renderiza la plantilla con los datos proporcionados y devuelve el resultado como una cadena de texto.

En este proyecto, estamos utilizando una plantilla base (`views/_index.html`) que incluye la estructura básica de la aplicación. Luego, cada una de las rutas renderiza una plantilla diferente que extiende la plantilla base.

Por ejemplo, la ruta `/` renderiza la plantilla `views/index.html`, que incluye el contenido de la página principal. La plantilla `views/base.html` extiende la plantilla base `views/layout.html` y agrega el contenido específico de la página principal.

## Variables en las plantillas

En las plantillas, se pueden utilizar variables para mostrar datos dinámicos. Las variables se declaran en el archivo `app.js` y se pasan a la plantilla como un objeto.

Por ejemplo, en la plantilla `views/base.html`, se puede mostrar el título de la página con la variable `title`:

```nunjucks
{% block title %}{{ title }}{% endblock %}
```

## Cómo extender plantillas

Para extender una plantilla, se utiliza el bloque `block`.

Por ejemplo, en la plantilla `views/base.html`, se puede extender la plantilla base `views/layout.html` con el siguiente código:

```nunjucks
{% extends "components/layout.html" %}
```

## Cómo reemplazar secciones de una plantilla

Para reemplazar una sección de una plantilla, se utiliza el bloque `block`.

Por ejemplo, en la plantilla `views/base.html`, se puede reemplazar el contenido de la sección `content` con el siguiente código:

```nunjucks
{% block content %}
  <!-- contenido de la sección -->
{% endblock %}
```
