# Juego de Memoria

Instrucciones
Construye el famoso juego de cartas conocido como Concentration o Memory.

El juego consiste en:

La primera vez que un usuario ingrese al juego se le debe solicitar el nombre.

Mostrar un tablero con un grupo de cartas boca abajo y un marcador con un espacio para mostrar:

Errores.

Aciertos.

El jugador debe ir volteando las cartas intentando adivinar las cartas que se repiten.

Todas las cartas se encuentran repetidas 1 vez en el tablero.

Por cada turno el jugador debe voltear 2 cartas.

Si las cartas no coinciden, se debe sumar 1 punto de error en el marcador. (Que pasa si la adivina al comienzo)

Si las cartas coinciden, se debe sumar 1 punto de acierto en el marcador.

Las cartas que el usuario acierte deben quedar boca arriba mientras que las cartas de error deben volver a quedar boca abajo.

Una vez que el usuario logre adivinar todas las cartas, se debe mostrar un mensaje de felicitación con el nombre del usuario.

Requerimientos tecnológicos del proyecto

Codigo entendible hecho en javascript

Vue/angular/react

Bootstrap 5/tailwindcss

Consideraciones

Utiliza alguna metodología de nombramiento de clases css ej: BEM

Todas las variables, métodos, clases o cualquier cosa relacionada con el código debe ser en inglés.

Incluir instrucciones para probar el proyecto en local en un fichero de nombre README.md ubicado en la raíz del proyecto o en su defecto desplegarlo en algún ambiente explicando en el readme que método se utilizó para el despliegue.

Para las imágenes de las cartas se deben mostrar fotos de animales. Las fotos de animales se deben obtener utilizando peticiones asíncronas desde el siguiente endpoint:

GET: https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20

Las imágenes no vienen repetidas, así que la lógica para poder construir el juego debe quedar en el Frontend.

El diseño se debe adaptar a los distintos tipos de dispositivos (diseño responsivo).

Los test no son requeridos pero suman puntos si los agrega correctamente.

Proponer un diseño de interfaz para la vista. Más abajo se muestra una imagen con una estructura de referencia, pero darle un estilo más personalizado sumará puntos.

Preocupación por el performance y accesibilidad de la aplicación.

El desafío se debe subir a Github en un proyecto público y se debe compartir el Link con tu recruiter.

El nombre del usuario debe ser solicitado una vez y almacenado para futuros juegos (sin importar si se refresca el browser)

## Ejecutar el proyecto local

Para instalar los paquetes

### `npm i`

En el directorio del proyecto puede ejecutar

### `npm start`

Ejecutara el app en modo desarrollo
Open [http://localhost:3000](http://localhost:3000)

### Github

La url del repositorio es https://github.com/luisreales/memorygamereact

https://memorygamereact-ten.vercel.app/

### Deployment

Fue desplegada la aplicacion en Vercel, en esta dirección esta el sitio publicado

https://memorygamereact-ten.vercel.app/

# memorygamereact
