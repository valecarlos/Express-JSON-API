module.exports = function(app, db) {
  let fullData = [
    {
      Id: 1,
      AFLSName: "Correos de alertas para especialistas en campo", //campo anadido para la administracion en AFLS
      AFLSIsActive: true, //campo anadido para la administracion en AFLS
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
          descriptionText: "Escoja la severidad de atención para esta alerta",
          type: "select", //soporta los valores: text, textarea, number, select, date y check.
          defaultValue: 2, // hace referencia al value que esta escogido por defecto - null para nada
          placeholder: "Seleccione una categoría...",
          required: true,
          options: [
            {
              //requerido solo cuando es de type: select
              value: 1,
              text: "Selección 1- Urgente"
            },
            {
              value: 2,
              text: "Selección 2 - Normal"
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
        },
        {
          name: "send-date", //Identificador unico con el cual se identifica el campo
          label: "Fecha de envío",
          descriptionText: "Fecha para enviar el correo que se está generando",
          type: "date", //soporta los valores: text, textarea, number, select, date y check.
          defaultValue: "20/07/2017", //valor por defecto
          placeholder: "DD/MM/YY",
          required: false,
          options: null // este atributo es solo para los campos de tipo select
        },
        {
          name: "some-date", //Identificador unico con el cual se identifica el campo
          label: "Fecha alternativa",
          descriptionText: "otra fecha más",
          type: "date", //soporta los valores: text, textarea, number, select, date y check.
          defaultValue: "04/05/2015", //valor por defecto
          placeholder: "DD/MM/YY",
          required: true,
          options: null // este atributo es solo para los campos de tipo select
        }
      ],
      AFLSValues: {
        subject: "Mail de alerta Configurado especialmente para AFLS",
        body: "ESTE ES EL CURPO DEL CORREO!!", // debe tomar el valor por defecto, pero lo debe asignar el back
        "mail-type": 2,
        "copy-all": true,
        "send-date": "01/12/2015",
        "some-date": "20/12/2017"
      }
    },
    {
      Id: 2, 
      AFLSName: "Firmas de Especialistas",
      AFLSIsActive: false,
      Logo: "https://picsum.photos/85/85",
      Name: "SignaturesApp",
      Description: "Texto de descripción para firmas de especialistas",
      Version: "8.2.2",
      Vendor: "ABC co.",
      Fields: [
        {
          name: "tipo-firma",
          label: "Tipo de Firma",
          descriptionText: "Seleccione el tipo de firma.",
          type: "select", //soporta los valores: text, textarea, number, select, date.
          defaultValue: 2,
          placeholder: "Alerta XYZ",
          required: true,
          options: [
            //requerido solo cuando es de type: select
            {
              value: 1,
              text: "Tipo A"
            },
            {
              value: 2,
              text: "Tipo B"
            }
          ]
        },
        {
          name: "asunto-firma",
          label: "Asunto de la firma",
          descriptionText: "Ingrese el cliente perteneciente a la firma",
          type: "text",
          defaultValue: null,
          placeholder: "Cliente: ABC.",
          required: true,
          options: null
        },
        {
          name: "contenido-firma",
          label: "Contenido de la firma",
          descriptionText: "Ingrese el mensaje para la firma",
          type: "textarea",
          defaultValue: null,
          placeholder: null,
          required: false,
          options: null
        }
      ],
      AFLSValues: {
          "tipo-firma" : 1,
          "asunto-firma": "El asunto de la firma es este",
          "contenido-firma": "Este es el contenido de la firma"
      }
    }
  ];

  let newObject = {
    Id: 3,
    AFLSName: "Nuevo conector creado",
    AFLSIsActive: true,
    Logo: "https://picsum.photos/90/90",
    Name: "SignaturesApp",
    Description: "Texto de descripción para Nuevo conector creado",
    Version: "4.7.9",
    Vendor: "ABC co.",
    Fields: [
      {
        name: "field1",
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
            text: "Numeros (123456)"
          },
          {
            value: 2,
            text: "Texto (ABCD)"
          }
        ]
      },
      {
        name: "field2",
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
        name: "field3",
        label: "Contenido del Correo",
        descriptionText: "Ingrese el mensaje del correo",
        type: "textarea",
        defaultValue: null,
        placeholder: null,
        required: false,
        options: null
      }
    ],
    AFLSValues: {
        "field1": "abc",
        "field2": "tipo texto normal",
        "field3": "Este es un texto para la textArea"
      }
  };
  // ******************* LIST *******************
  app.post("/Connectors/List", (req, res) => {
    res.send(fullData);
  });

  // ******************* GET BY ID *******************
  app.get("/Connectors/ById/:id", (req, res) => {
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

  // POST - UPLOAD FILE
  app.post("/Connectors/UploadConnectorFromFile/", (req, res) => {
    fullData.push(newObject);
    
    res.send(newObject);
  });


  // ******************* PUT - SAVE *******************
  app.put("/Connectors/Save", (req, res) => {
    let idtoUpdate = req.body.Id;
    console.dir(req.body, { colors: true });
    let updatedItem = {};

    fullData.map(item => {
      if (item.Id == idtoUpdate) {
        updatedItem = item;
        return false;
      }
      return true;
    });

    res.send(updatedItem);
  });

  // **************** DELETE *******************
  app.delete("/Connectors/Remove", (req, res) => {
    console.log(req.query.Id, "id to delete");
    let idToDelete = req.query.Id;
    let deletedItem = {};

    fullData = fullData.filter(item => {
      //filtrar el objeto solo eliminando el id que es necesario eliminar
      if (item.Id == idToDelete) {
        deletedItem = item;
        return false;
      }
      return true;
    });

    res.send(deletedItem);
  });
};
