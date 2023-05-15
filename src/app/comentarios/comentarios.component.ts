import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComentariosComponent {
  preguntas = [
    { 
      id: '1',
      pregunta: '1. ¿Que APIS se usaron al crear el proyecto?',
      respuesta: `Para la noticia se utilizo el sistema full stack, 
                  para el apartado de clima fue utilizado https://openweathermap.org/api
                  y para las criptomonedas se utilizo https://www.coingecko.com/en/api 
                  todas en su version gratuita` 
    },
    { 
      id: '2',
      pregunta: '2. ¿Que es una API?',
      respuesta: `Es un conjunto de definiciones y protocolos que se utiliza para desarrollar
                e integrar el software de las aplicaciones` 
    } ,
    { 
      id: '3',
      pregunta: '3. ¿Cual es el costo por usar el sitio web?',
      respuesta: `Utilizar el sitio web no tiene ningun costo` 
    },
    { 
      id: '4',
      pregunta: '4. ¿Como se obtienen los datos del clima?',
      respuesta: `Proporcionamos datos para cualquier coordenada utilizando nuestro modelo patentado
                  de red neuronal convolucional/aprendizaje automático que usamos para el pronóstico 
                  del tiempo y el cálculo de datos históricos. En diferentes niveles, se utilizan 
                  diferentes fuentes de datos (como radares y una amplia red de estaciones meteorológicas,
                  junto con datos de proveedores globales/locales como NOAA.` 
    },
    { 
      id: '5',
      pregunta: '5. Las llamadas a la API devuelven un error 401',
      respuesta: `Puede obtener este error cuando especificó el nombre de la ciudad, el código postal o 
                  el ID de la ciudad incorrectos. Para su referencia, esta lista contiene el nombre de la
                  ciudad, la identificación de la ciudad, las coordenadas geográficas de la ciudad
                  (lon, lat), Zoom, etc.` 
    },
    { 
      id: '6',
      pregunta: '6. ¿Con qué frecuencia se actualiza la información de las criptomonedas?',
      respuesta: `Los bots que proporciona coingecko actualizan los datos en función de un horario 
                  variable, Actualiza la información siempre que sea posible.` 
    },
    { 
      id: '7',
      pregunta: '7. ¿Los datos de registo estan asegurados?',
      respuesta: `Sabemos que te preocupas al igual que nosotros en cuidar tu informacion y es por eso que al 
                  crear tus datos estan seguros, tu contraseña es encriptada 
                  para que solamente tu la puedas conocer, al registrarte se te hara llegar 
                  un correo de bienvenida.` 
    },
  ];
}