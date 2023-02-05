#Antes de empezar
El proyecto final se encuentra alojado en firebase: https://r-social-dashboard-f0efd.web.app

# SocialmediaDashboard
Proyecto construido en angular acerca de estadísticas de redes sociales

## Componentes
El proyecto cuenta con un solo componente, el cual interactúa con clases y pipes

## Clases
Se crearon dos clases para un mejor manejo de las variables. Una de ellas hace referencia a los cuadros pequeños y otra a los cuadros grandes, con sus respectivas característecas como nonmbre, imagen, cantidad, etc.

## Pipes
Para un mejor manejo de las variables se crearon dos pipes, una de ellas para convertir números mayores a 9999 a cadenas de texto de la forma nk, por ejemplo 52000 -->52K

## Vistas
El sitio cuenta con dos vistas, una para dispositivos móviles que están entre 375px y 1439px. Dado que el ancho varía demasiado entre estos dos valores, se consideró que los cuadros tendrían un ancho máximo de 700 px por razones de diseño.

## Estilos
Se cuenta con dos estilos, uno para tema nocturno y otro para tema normal, los cuales pueden ser intercalados usando un botón creado usando css.

# Typescript

## Variables
Se hizo usó de distintas variables para un mejor control y optimización del código. Dado que las propiedades de los cuadros se encuentran en un listado de objetos, fue posible usar ngfor para visualizar cada uno de estos objetos, de esta forma se evitó que el código html fuera extenso y dificil de mantener y estilar

## Tema oscuro / claro
Para poder intercalar entre ambos temas se declaró una variable booleana llamada dark, la cual por defecto tiene valor false y cada vez que el botón es pulsado su valor cambia. De esta forma al tener un valor de true se aplican estilos de tema oscuro al código y al tener un valor de false se remueven estos estilos. 

## Estilos dinámicos
Para poder crear estilos que varíen dependiendo del valor de la variable dark, se usaron métodos y funciones capturando el id y class de cada elemento html.




## Portafolios
https://rcedeno-portfolio.web.app/
