import React, { useState } from 'react';
import { PrimaryButton, TextField, Dropdown, IDropdownOption, DetailsList, IColumn, DatePicker } from '@fluentui/react';
import './Table.css'

const TableComponent: React.FC = () => {
  const [rows, setRows] = useState([
    { id: 1, nombre: 'Max', apellido: 'Klym', categoria: 'Microsoft', ciclo: 'DAW', fechaInicio: '01/01/2025', fechaFinal: '31/12/2025' },
    { id: 2, nombre: 'Roger', apellido: 'Esteve', categoria: 'Microsoft', ciclo: 'DAM', fechaInicio: '01/01/2025', fechaFinal: '31/12/2025' },
    { id: 3, nombre: 'Pau', apellido: 'Roselló', categoria: 'Microsoft', ciclo: 'SMX', fechaInicio: '01/01/2025', fechaFinal: '31/12/2025' },
    { id: 4, nombre: 'Nicole', apellido: 'Ardenghi', categoria: 'Microsoft', ciclo: 'ASIX', fechaInicio: '01/01/2025', fechaFinal: '31/12/2025' },
    { id: 5, nombre: 'Pau', apellido: 'Manresa', categoria: 'Microsoft', ciclo: 'DAW', fechaInicio: '01/01/2025', fechaFinal: '31/12/2025' },
  ]);

  const [newName, setNewName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newCategory, setNewCategory] = useState<string | undefined>(undefined);
  const [newCycle, setNewCycle] = useState('');
  const [newStartDate, setNewStartDate] = useState<Date | undefined>(undefined);
  const [newEndDate, setNewEndDate] = useState<Date | undefined>(undefined);

  const categoryOptions: IDropdownOption[] = [
    { key: 'Microsoft', text: 'Microsoft' },
    { key: 'Cobol', text: 'Cobol' },
    { key: 'Appian', text: 'Appian' },
    { key: 'RedHat', text: 'Red Hat' }
  ];

  const addRow = () => {
    if (newName && newLastName && newCategory && newCycle && newStartDate && newEndDate) {
      const newRow = {
        id: rows.length + 1,
        nombre: newName,
        apellido: newLastName,
        categoria: newCategory,
        ciclo: newCycle,
        fechaInicio: newStartDate.toLocaleDateString(),
        fechaFinal: newEndDate.toLocaleDateString(),
      };
      setRows([...rows, newRow]);
      setNewName('');
      setNewLastName('');
      setNewCategory(undefined);
      setNewCycle('');
      setNewStartDate(undefined);
      setNewEndDate(undefined);
    } else {
      alert('Complete todos los datos antes de agregarlos');
    }
  };

  const columns: IColumn[] = [
    { key: 'id', name: 'ID', fieldName: 'id', minWidth: 50, maxWidth: 50 },
    { key: 'nombre', name: 'Nombre', fieldName: 'nombre', minWidth: 100, maxWidth: 150 },
    { key: 'apellido', name: 'Apellido', fieldName: 'apellido', minWidth: 100, maxWidth: 150 },
    { key: 'categoria', name: 'Servicio', fieldName: 'categoria', minWidth: 100, maxWidth: 150 },
    { key: 'ciclo', name: 'Ciclo', fieldName: 'ciclo', minWidth: 100, maxWidth: 150 },
    { key: 'fechaInicio', name: 'Fecha Inicio', fieldName: 'fechaInicio', minWidth: 100, maxWidth: 150 },
    { key: 'fechaFinal', name: 'Fecha Final', fieldName: 'fechaFinal', minWidth: 100, maxWidth: 150 },
  ];
  const labelStyles = { root: { color: 'white' } };
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-8" style={{ textAlign: "center" }}>Tabla de Inetum</h1>
      <div style={{ marginBottom: '40px', overflow: 'hidden' }}>
        <DetailsList
          items={rows}
          columns={columns}
          selectionMode={0} 
          styles={{ root: { backgroundColor: '#f3f3f3', padding: '10px', overflowX: 'auto' } }}
        />
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TextField 
            label="Nombre" 
            value={newName} 
            onChange={(_, newValue) => setNewName(newValue || '')} 
            styles={{ subComponentStyles: { label: labelStyles } }}  
          />
          <TextField 
            label="Apellido" 
            value={newLastName} 
            onChange={(_, newValue) => setNewLastName(newValue || '')} 
            styles={{ subComponentStyles: { label: labelStyles } }}   
          />
          <Dropdown
            label="Servicio"
            placeholder="Selecciona un servicio"
            selectedKey={newCategory}
            onChange={(_, option) => setNewCategory(option?.key as string)}
            options={categoryOptions}
            styles={{ label: { color: 'white' } }}  
          />
          <TextField 
            label="Ciclo" 
            value={newCycle} 
            onChange={(_, newValue) => setNewCycle(newValue || '')} 
            styles={{ subComponentStyles: { label: labelStyles } }}
          />
          <div id="hola">
          <DatePicker
            id="date1"
            label="Fecha Inicio"
            placeholder="Selecciona una fecha"
            value={newStartDate}
            onSelectDate={(date) => setNewStartDate(date || undefined)}
            styles={{ root: { color: 'white' } }}  // Correct styling applied here
          />
          <DatePicker
            id="date2"
            label="Fecha Final"
            placeholder="Selecciona una fecha"
            value={newEndDate}
            onSelectDate={(date) => setNewEndDate(date || undefined)}
            styles={{ root: { color: 'white' } }}  // Correct styling applied here
          />
          </div>
          
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <PrimaryButton text="Agregar" onClick={addRow} />
        </div>
      </div>
    </div>
  );
};

export default TableComponent;




