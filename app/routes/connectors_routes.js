module.exports = function(app, db) {
  let fullData = [
    {
      Id: 1,
      AFLSName: "Correos de alertas para especialistas en campo", //campo anadido para la administracion en AFLS
      IsActive: true, //campo anadido para la administracion en AFLS
      Logo: "https://picsum.photos/80/80",
      Name: "AlertsApp",
      Description: "Texto de descripción",
      Version: "3.2.2",
      Vendor: "XYZ co.",
      Fields: [
        {
          name: "subject", //Identificador unico con el cual se identifica el campo
          label: "Asunto del Correo",
          descriptionText:
            "Ingrese un texto breve para el asunto del correo de alerta",
          type: "text", //soporta los valores: text, textarea, number, select, date y check.
          defaultValue: "Nueva alerta generada en AFLS", //valor por defecto
          placeholder: "Alerta XYZ",
          required: true,
          options: null // este atributo es solo para los campos de tipo select
        },
        {
          name: "body", //Identificador unico con el cual se identifica el campo
          label: "Contenido del Correo",
          descriptionText:
            "Ingrese un texto breve para el asunto del correo de alerta",
          type: "textarea",
          defaultValue: "Se generó una alerta",
          placeholder: "Descripción de la alerta",
          required: false,
          options: null
        },
        {
          name: "mail-type",
          label: "Grado de Alerta",
          descriptionText:
            "Escoja la severidad de atención para esta alerta",
          type: "select", //soporta los valores: text, textarea, number, select, date y check.
          defaultValue: 2, // hace referencia al value que esta escogido por defecto - null para nada
          placeholder: "Seleccione una categoría...",
          required: true,
          options: [
            {
              //requerido solo cuando es de type: select
              value: 1,
              text: "Tipo A - Urgente",
              value: 2,
              text: "Tipo B - Normal"
            }
          ]
        },
        {
          name: "copy-all",
          label: "Mail con copia a Todos",
          descriptionText:
            "Seleccione esta opción si desea enviarle copia a todo el dominio",
          type: "check", //soporta los valores: text, textarea, number, select, date.
          defaultValue: true, // hace referencia al value que esta escogido por defecto - null para nada
          placeholder: null,
          required: false,
          options: null
        }
      ]
    },
    {
      Id: 2,
      AFLSName: "Firmas de Especialistas",
      IsActive: false,
      Logo: "https://picsum.photos/85/85",
      Name: "SignaturesApp",
      Description: "Texto de descripción para firmas de especialistas",
      Version: "8.2.2",
      Vendor: "ABC co.",
      Fields: [
        {
          label: "Asunto del Correo",
          descriptionText:
            "Ingrese un texto breve para el asunto del correo de alerta",
          type: "select", //soporta los valores: text, textarea, number, select, date.
          defaultValue: "Nueva alerta generada en AFLS",
          placeholder: "Alerta XYZ",
          required: true,
          options: [
            {
              //requerido solo cuando es de type: select
              value: 1,
              text: "Tipo A",
              value: 2,
              text: "Tipo B"
            }
          ]
        },
        {
          label: "Asunto del Correo",
          descriptionText:
            "Ingrese un texto breve para el asunto del correo de alerta",
          type: "text",
          defaultValue: "Nueva alerta generada en AFLS",
          placeholder: "Alerta XYZ",
          required: true,
          options: null
        },
        {
          label: "Contenido del Correo",
          descriptionText: "Ingrese el mensaje del correo",
          type: "textarea",
          defaultValue: null,
          placeholder: null,
          required: false,
          options: null
        }
      ]
    }
  ];

  let newObject= {
    Id: 3,
    AFLSName: "Nuevo conector creado",
    IsActive: false,
    Logo: "https://picsum.photos/90/90",
    Name: "SignaturesApp",
    Description: "Texto de descripción para Nuevo conector creado",
    Version: "8.2.2",
    Vendor: "ABC co.",
    Fields: [
      {
        label: "Asunto del Correo",
        descriptionText:
          "Ingrese un texto breve para el asunto del correo de alerta",
        type: "select", //soporta los valores: text, textarea, number, select, date.
        defaultValue: "Nueva alerta generada en AFLS",
        placeholder: "Alerta XYZ",
        required: true,
        options: [
          {
            //requerido solo cuando es de type: select
            value: 1,
            text: "Tipo A",
            value: 2,
            text: "Tipo B"
          }
        ]
      },
      {
        label: "Asunto del Correo",
        descriptionText:
          "Ingrese un texto breve para el asunto del correo de alerta",
        type: "text",
        defaultValue: "Nueva alerta generada en AFLS",
        placeholder: "Alerta XYZ",
        required: true,
        options: null
      },
      {
        label: "Contenido del Correo",
        descriptionText: "Ingrese el mensaje del correo",
        type: "textarea",
        defaultValue: null,
        placeholder: null,
        required: false,
        options: null
      }
    ]
  }
  // LIST 
  app.post("/Connectors/List", (req, res) => {
    res.send(fullData);
  });

  // GET BY ID
  app.get("/Connectors/ById/:id", (req, res) => {
    // console.log(req.params);
    let connector = fullData.filter(item => {
      return item.Id == req.params.id;
    });
    res.send(connector[0]);
  });

  // POST - SAVE
  app.post("/Connectors/Save", (req, res) => {
    fullData.push(newObject);
    res.send(newObject);
  });

   // PUT - SAVE
   app.put("/Connectors/Save", (req, res) => {
     let idtoUpdate = req.body.id;
    console.log(req.body, "id to delete")
    let updatedItem = {}
    //filtrar el objeto que se envio y devolverlo el mismo
    fullData = fullData.filter(item => {
      if (item.Id == idtoUpdate){
        updatedItem = item;
        return false
      }
      return true;
    })

    res.send(updatedItem);
  });

  // DELETE
  app.delete("/Connectors/Remove", (req, res) => {
    console.log(req.query.Id, "id to delete")
    let idToDelete = req.query.Id;
    let deletedItem = {}
    //filtrar el objeto solo eliminando el id que es necesario eliminar
    fullData = fullData.filter(item => {
      if (item.Id == idToDelete){
        deletedItem = item;
        return false
      }
      return true;
    })
    // console.log(fullData)
    res.send(deletedItem);
  });
};
