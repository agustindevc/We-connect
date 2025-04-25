import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";

// Estilos con styled-components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const FileInput = styled.input`
  border: none;
  padding: 10px 0;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
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
  };

  return (
    <Container>
      <Title>Agregar Nuevo Producto o Servicio</Title>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="nombre">Nombre del Producto/Servicio *</Label>
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
          <Label htmlFor="tipo">Tipo *</Label>
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
          <Label htmlFor="categoria">Categoría *</Label>
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
          <Label htmlFor="descripcion">Descripción *</Label>
          <TextArea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="precio">Precio *</Label>
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