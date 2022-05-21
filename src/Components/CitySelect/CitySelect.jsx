// import React, { useState, useEffect } from "react";

// import Select from "react-select";


// const CitySelect = ({ options, name, onChange }) => {
//   const [optionSelected, setSelectedOptions] = useState([]);

//   const handleChange = (selected) => {
//     onChange({ name, category: selected.value });
//     //console.log(selected)
//     setSelectedOptions(selected);
//   };

//   return (
//     <Select
//       options={options}
//       isLoading={!options}
//       closeMenuOnSelect={true}
//       onChange={handleChange}
//       value={optionSelected}
//       name={name}
//     />
//   );
// };
// export default CitySelect;
// const App = () => {
//   const [validated, setValidated] = useState(false);

//   const [select, setSelect] = useState({
//     name: "",
//     category: ""
//   });

//   const handleChange = (e) => {
//     console.log(e);
//   };

//   //const [data, setData] = useState([]);
//   /* get data */

//   const TypeProp = [
//     { id: 1, Name: "Villas" },
//     { id: 2, Name: "Appartement" },
//     { id: 3, Name: "Luxury Home Container" },
//     { id: 4, Name: "Lands" }
//   ];
//   //console.log(data);
//   const types = TypeProp.map((item) => ({ value: item.id, label: item.Name }));
//   //console.log(categories);
//   return (
    
//       <Form noValidate validated={validated}>
//         <Form.Row>
//           <Form.Group as={Col} md="4" controlId="validationCustom01">
//             <Form.Label>Name</Form.Label>
//             <Form.Control required name="name" type="text" placeholder="Name" />
//             <Form.Control.Feedback type="invalid">Check!</Form.Control.Feedback>
//             <Form.Control.Feedback>Ok!</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group as={Col} md="4" controlId="validationCustom02">
//             <Form.Label>Category</Form.Label>
            
//             <Form.Control.Feedback type="invalid">Check!</Form.Control.Feedback>
//             <Form.Control.Feedback>Ok!</Form.Control.Feedback>
//           </Form.Group>
//         </Form.Row>
//       </Form>
//     </div>
//   );
// };

// export default App;
