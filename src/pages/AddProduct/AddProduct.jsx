import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header"; // Asegúrate de que la ruta sea correcta

const Container = styled.div`
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  min-height: calc(100vh - 60px); /* Ocupa la altura de la ventana menos la altura del header */
  padding: 30px;
  background-color: var(--color-fondo-principal); /* Fondo oscuro de la página */
`;

const Form = styled.form`
  background-color: var(--color-fondo-formulario);
  padding: 40px;
  border-radius: 12px; /* Bordes más redondeados */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Sombra más pronunciada */
  width: 100%;
  max-width: 600px; /* Ancho máximo para que no se vea demasiado ancho */
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px; /* Más espacio debajo del título */
  color: var(--color-texto-titulo);
  font-size: 2.2rem; /* Título más grande */
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: var(--color-texto-etiqueta);
  font-size: 1.1rem; /* Etiquetas un poco más grandes */
`;

const Input = styled.input`
  width: 100%;
  padding: 14px; /* Padding más grande */
  border: 1px solid var(--color-borde-input);
  border-radius: 6px; /* Bordes más redondeados */
  font-size: 1.1rem; /* Texto de entrada más grande */
  color: var(--color-texto-input);
  background-color: var(--color-fondo-input);

  &:focus {
    outline: none;
    border-color: var(--color-foco);
    box-shadow: 0 0 0 0.2rem rgba(var(--color-foco-rgb), 0.25);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px; /* Padding más grande */
  border: 1px solid var(--color-borde-input);
  border-radius: 6px; /* Bordes más redondeados */
  font-size: 1.1rem; /* Texto del área más grande */
  min-height: 150px; /* Área de texto más alta */
  resize: vertical;
  color: var(--color-texto-input);
  background-color: var(--color-fondo-input);

  &:focus {
    outline: none;
    border-color: var(--color-foco);
    box-shadow: 0 0 0 0.2rem rgba(var(--color-foco-rgb), 0.25);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px; /* Padding más grande */
  border: 1px solid var(--color-borde-input);
  border-radius: 6px; /* Bordes más redondeados */
  font-size: 1.1rem; /* Texto de selección más grande */
  color: var(--color-texto-input);
  background-color: var(--color-fondo-input);
`;

const FileInput = styled.input`
  border: none;
  padding: 10px 0;
  font-size: 1.1rem; /* Texto de selección de archivo más grande */
  color: var(--color-texto-input);
`;

const SubmitButton = styled.button`
  background-color: var(--color-boton-principal);
  color: var(--color-texto-boton);
  padding: 16px 32px; /* Padding más grande */
  border: none;
  border-radius: 8px; /* Bordes más redondeados */
  cursor: pointer;
  font-size: 1.2rem; /* Texto del botón más grande */
  width: 100%;
  transition: background-color 0.2s ease-in-out;
  font-weight: bold; /* Texto del botón en negrita */

  &:hover {
    background-color: var(--color-boton-hover);
  }
`;

const RequiredAsterisk = styled.span`
  color: #e53e3e;
  margin-left: 4px;
  font-size: 1.1rem; /* Asterisco más grande */
`;

const AddProduct = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    tipo: "producto",
    descripcion: "",
    precio: "",
    categoria: "",
    estado: "nuevo",
    imagenes: [],
    ubicacion: "",
    contacto: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      imagenes: files
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí iría la lógica para enviar los datos del formulario
  };

  return (
    <Container>
      <Form>
        <Title>Agregar Producto o Servicio</Title>

        <FormGroup>
          <Label htmlFor="nombre">
            Nombre del Producto/Servicio <RequiredAsterisk>*</RequiredAsterisk>
          </Label>
          <Input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="tipo">
            Tipo <RequiredAsterisk>*</RequiredAsterisk>
          </Label>
          <Select
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleInputChange}
            required
          >
            <option value="producto">Producto</option>
            <option value="servicio">Servicio</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="categoria">
            Categoría <RequiredAsterisk>*</RequiredAsterisk>
          </Label>
          <Select
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="tecnologia">Tecnología</option>
            <option value="hogar">Hogar</option>
            <option value="ropa">Ropa y Accesorios</option>
            <option value="servicios_profesionales">Servicios Profesionales</option>
            <option value="otros">Otros</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="descripcion">
            Descripción <RequiredAsterisk>*</RequiredAsterisk>
          </Label>
          <TextArea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="precio">
            Precio <RequiredAsterisk>*</RequiredAsterisk>
          </Label>
          <Input
            type="number"
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handleInputChange}
            required
            min="0"
            step="0.01"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="estado">Estado</Label>
          <Select
            id="estado"
            name="estado"
            value={formData.estado}
            onChange={handleInputChange}
          >
            <option value="nuevo">Nuevo</option>
            <option value="usado">Usado</option>
            <option value="no_aplica">No Aplica</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="ubicacion">Ubicación</Label>
          <Input
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={formData.ubicacion}
            onChange={handleInputChange}
            placeholder="Ciudad, Provincia"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="contacto">Información de Contacto</Label>
          <Input
            type="text"
            id="contacto"
            name="contacto"
            value={formData.contacto}
            onChange={handleInputChange}
            placeholder="Teléfono o email de contacto"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="imagenes">Imágenes del Producto</Label>
          <FileInput
            type="file"
            id="imagenes"
            name="imagenes"
            onChange={handleImageChange}
            multiple
            accept="image/*"
          />
        </FormGroup>

        <SubmitButton type="submit">Publicar Producto/Servicio</SubmitButton>
      </Form>
    </Container>
  );
};

export default AddProduct;