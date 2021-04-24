const form = document.forms;
formOne.addEventListener("submit", function(event){
  event.preventDefault();
    const data = new FormData(formOne);
    const value = [...data.values()];
    console.log(value);
    document.forms[0].reset();
      swal.fire({
          title: "Упс..Не найдено!",
          confirmButtonColor:"#6f6e6d" ,
          imageUrl: 'img/ups.png',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
         });
  
});
formTwo.addEventListener("submit", function(event){
  event.preventDefault();
    const data = new FormData(formTwo);
    const values = [...data.values()];
    console.log(values);
    if(values.length == 2){
      for (var i = 0; i < 2; i++) {
        if (values[i] == ''){
              swal.fire({
                   title: "Заполните все поля",
                   icon: "error",
                   confirmButtonColor:"#6f6e6d" 
                 });
          }
          else{
                  swal.fire({
                   title: "Вы авторизиованы!",
                   icon: "success",
                   confirmButtonColor:"#6f6e6d" 
                 });
                 document.forms[1].reset();
          }
        }
      }
        if(values.length == 3){
          for (let i = 0; i < 3; i++) {
            if (values[i] == ""){
                  swal.fire({
                       title: "Заполните все поля",
                       icon: "error",
                       confirmButtonColor:"#6f6e6d" 
                     });
              }
              if(values[i] !== ""){
                      swal.fire({
                       title: "Регистрация выполнена успешно!",
                       icon: "success",
                       confirmButtonColor:"#6f6e6d" 
                     });
              }
            }
        } 
});
