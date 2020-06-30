**Ejemplo de ABM con ventana modal**

Este ejemplo muestra un simple ABM con una ventana modal para editar o agregar clientes. La idea fue crear una desde cero solo con JS (o vanilla js para los amigos) y CSS. No es perfecto ya que no válida que se ingrese nuevamente un cliente con el mismo DNI y el mail sea valido entre otras cosas, pero al menos consiste que los campos no sean nulos. 

Esto sirvió de ejemplo para repasar conceptos de JS y CSS. Por ejemplo, la ventana modal se logra usando la pseudo clase :target de CSS. Notar que la ventana modal se podría hacer también con JS pero no era mi objetivo, además no es la única forma de hacer una ventana modal con CSS. 

Otros detalles es el uso de eventos agregados mediante código como también el uso de propiedades data-* (estan piolas para obtener valores o setearlos)

Posteriormente a este ejemplo, hice uno similar con React lo que permitió comparar contra JS puro (para ser sincero, me quemé menos la cabeza con React.)

Tampoco persiste datos (ni en base ni localstorage) pero no sería tan complicado lograr esto.

Sin más palabras, accede a la [version online](https://amazing79.github.io/modal_form_pure_js/.)