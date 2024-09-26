"use client";
import { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Typography, Dialog, DialogTitle, DialogActions } from '@mui/material';

interface Machine {
  id: number;
  name: string;
  price: number;
  rate: string;
}

const machines: Record<string, Machine[]> = {
  Loja: [
    { id: 1, name: 'Compact Pro', price: 299, rate: '2.5% + $0.10' },
    { id: 2, name: 'Mobile Swipe', price: 79, rate: '2.75% + $0.15' },
    { id: 3, name: 'SmartPOS Lite', price: 399, rate: '2.3% + $0.08' },
  ],
  Varejo: [
    { id: 4, name: 'BusinessPOS', price: 599, rate: '2.2% + $0.07' },
    { id: 5, name: 'MultiTerminal', price: 799, rate: '2.1% + $0.06' },
    { id: 6, name: 'CloudRegister', price: 999, rate: '2.0% + $0.05' },
  ],
  Corporação: [
    { id: 7, name: 'EnterprisePOS', price: 1299, rate: '1.9% + $0.04' },
    { id: 8, name: 'OmniChannel', price: 1599, rate: '1.8% + $0.03' },
    { id: 9, name: 'AI-Powered POS', price: 1999, rate: '1.7% + $0.02' },
  ],
};

export function ProductComparison() {
  const [showCards, setShowCards] = useState(false);
  const [selectedMachines, setSelectedMachines] = useState<Machine[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [machineDetails, setMachineDetails] = useState<Machine | null>(null);

  const handleSelectMachine = (machine: Machine) => {
    setMachineDetails(machine);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleAddMachine = (machine: Machine) => {
    // Se já houver 2 máquinas selecionadas, reinicia o processo de seleção
    if (selectedMachines.length >= 2) {
      setSelectedMachines([machine]); // Adiciona a nova máquina e reinicia a seleção
    } else {
      setSelectedMachines([...selectedMachines, machine]);
    }
    
    handleCloseDialog();
    setMachineDetails(null);
  };

  const handleButtonClick = () => {
    setShowCards(true);
  };

  const handleCloseComparison = () => {
    setShowCards(false);
    setSelectedMachines([]); 
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Button
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          className="mb-12"
        >
          Comparar todas as máquinas 
        </Button>
        
        {showCards && (
          <Button
            variant="outlined"
            color="primary"
            onClick={handleCloseComparison}
            className="mb-12 ml-4"
          >
            Fechar comparativos
          </Button>
        )}

        {showCards && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(machines).map(([businessType, machineList]) => (
              <div key={businessType} className="space-y-6">
                <h3 className="text-2xl font-semibold capitalize"> Negócio: {businessType}</h3>
                {machineList.map((machine) => (
                  <Card key={machine.id} className="border border-gold-400">
                    <CardHeader>
                      <Typography variant="h6">{machine.name}</Typography>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">${machine.price}</p>
                      <p className="text-sm text-gray-600">Taxa: {machine.rate}</p>
                      <Button
                        onClick={() => handleSelectMachine(machine)} variant="outlined" color="info"
                        className="mt-4 bg-white text-black hover:bg-gray-200 transition"
                      >
                        Selecionar para comparação
                      </Button>
                    </CardContent>
                  </Card>
                ))} 
              </div>
            ))}
          </div>
        )}

        {selectedMachines.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Comparação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {selectedMachines.map((machine) => (
                <Card key={machine.id} className="border-2 border-gold-400">
                  <CardHeader>
                    <Typography variant="h6">{machine.name}</Typography>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">${machine.price}</p>
                    <p className="text-sm text-gray-600">Taxa: {machine.rate}</p>
                    <Button
                      onClick={() => handleSelectMachine(machine)}
                      className="mt-4 bg-navy-800 text-white hover:bg-navy-700"
                    >
                      Mudar máquina
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Selecionar máquina</DialogTitle>
          {machineDetails && (
            <Card>
              <CardHeader>
                <Typography variant="h6">{machineDetails.name}</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">${machineDetails.price}</p>
                <p className="text-sm text-gray-600">Rate: {machineDetails.rate}</p>
              </CardContent>
            </Card>
          )}
          <DialogActions>
            <Button onClick={() => { handleAddMachine(machineDetails!); }} variant="outlined" color="primary">
              Adicionar para comparação
            </Button>
            <Button onClick={handleCloseDialog} variant="outlined" color="primary">
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </section>
  );
}
