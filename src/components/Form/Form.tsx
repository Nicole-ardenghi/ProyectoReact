import React, { useState } from 'react';
import { TextField, PrimaryButton, DefaultButton, Label } from '@fluentui/react';
import { DatePicker } from '@fluentui/react/lib/DatePicker';

const FormComponent: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [description, setDescription] = useState<string>('');

  const handleNameChange = (newValue?: string) => setName(newValue || '');
  const handleDescriptionChange = (newValue?: string) => setDescription(newValue || '');
  const handleDateChange = (date: Date | null | undefined) => setSelectedDate(date || null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, date: selectedDate?.toLocaleDateString() || 'No date selected', description});
    alert('Enviado');
  };

  const handleReset = () => {
    setName('');
    setSelectedDate(null);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem', backgroundColor: '#f3f2f1', borderRadius: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: '#0078d4' }}> Formulario </h1>
      <TextField
        label="Nombre:"
        value={name}
        onChange={(_, newValue) => handleNameChange(newValue)}
        required/>
      <Label>Fecha:</Label>

      <DatePicker
        firstDayOfWeek={1}
        placeholder="Selecciona una fecha"
        ariaLabel="Selector de fecha"
        value={selectedDate || undefined}
        onSelectDate={handleDateChange}/>
    
      <TextField
        label="Descripción"
        multiline
        value={description}
        onChange={(_, newValue) => handleDescriptionChange(newValue)}
        rows={4}
        style={{ marginTop: '1rem' }}/>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <PrimaryButton type="submit">Enviar</PrimaryButton>
        <DefaultButton type="button" onClick={handleReset} style={{ marginLeft: '1rem' }}>
          Eliminar
        </DefaultButton>
      </div>
    </form>
  );
};
export default FormComponent;