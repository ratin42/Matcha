const accountBaseField = {
  Firstname: {
    name: "firstname",
    label: "Firstname",
    type: "text",
    inputType: "input",
    required: true,
    options: [],
    maxLength: 10,
  },
  Lastname: {
    name: "lastname",
    label: "Lastname",
    type: "text",
    inputType: "input",
    required: true,
    options: [],
    maxLength: 10,
  },
  Bio: {
    name: "biography",
    label: "About Me",
    type: "text",
    inputType: "input",
    required: false,
    options: [],
    maxLength: 10,
  },
  Dob: {
    name: "dob",
    label: "Birthdate",
    type: "date",
    inputType: "input",
    required: true,
    options: [],
    maxLength: 10,
  },
  Gender: {
    name: "gender",
    label: "Gender",
    type: "text",
    inputType: "select",
    options: [
      {
        value: "non-binary",
        displayValue: "Non-binary",
      },
      {
        value: "male",
        displayValue: "Male",
      },
      {
        value: "female",
        displayValue: "Female",
      },
    ],
    required: true,
    maxLength: 10,
  },
  GenderTarget: {
    name: "gender_target",
    label: "Gender Target",
    type: "text",
    inputType: "select",
    options: [
      {
        value: "bisexual",
        displayValue: "bisexual",
      },
      {
        value: "male",
        displayValue: "Male",
      },
      {
        value: "female",
        displayValue: "Female",
      },
    ],
    required: true,
    maxLength: 10,
  },
  Country: {
    name: "country",
    label: "Country",
    type: "text",
    inputType: "input",
    required: true,
    options: [],
    maxLength: 10,
  },
  City: {
    name: "city",
    label: "City",
    type: "text",
    inputType: "input",
    required: true,
    options: [],
    maxLength: 10,
  },
  Zipcode: {
    name: "zipcode",
    label: "Zipcode",
    type: "text",
    inputType: "input",
    required: true,
    options: [],
    maxLength: 10,
  },
  AuthoriseGPS: {
    name: "authorizeGPS",
    label: "Authorize GPS geolocalisation",
    type: "checkbox",
    inputType: "checkbox",
    required: false,
    options: [],
    maxLength: 10,
  },
};

export default accountBaseField;
