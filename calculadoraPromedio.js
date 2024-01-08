        <script>
            var n1,n2,n3,nombre,materia;
            n1=-1;
            n2=-1,
           n3=-1;
           nombre = prompt("NOMBRE ESTUDIANTE");
           materia = prompt("MATERIA CURSADA ESTUDIANTE");
           while(n1<0 || n1>10){
           n1 = parseFloat(prompt("INGRESAR NOTA 1:"));
           }
           while(n2<0 || n2>10){
           n2 = parseFloat(prompt("INGRESAR NOTA 2:"));
           }
           while(n3<0 || n3>10){
           n3 = parseFloat(prompt("INGRESAR NOTA 3:"));
           }
   
           var pro=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;
   
           if(pro>=7){
               document.write( nombre + " ¡felicidades! Has aprobado con un promedio de: "+ pro );
           }else{
               document.write( nombre + " gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es: "+ pro );
           }
        </script>   



