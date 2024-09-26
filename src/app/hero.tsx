"use client";
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Typography,
    Dialog,
    DialogTitle,
    DialogActions,
} from "@mui/material";
import { useState } from "react";

const machines: Record<string, { id: number; name: string; price: number; rate: string }[]> = {
    small: [
        { id: 1, name: "Compact Pro", price: 299, rate: "2.5% + $0.10" },
        { id: 2, name: "Mobile Swipe", price: 79, rate: "2.75% + $0.15" },
        { id: 3, name: "SmartPOS Lite", price: 399, rate: "2.3% + $0.08" },
    ],
    medium: [
        { id: 4, name: "BusinessPOS", price: 599, rate: "2.2% + $0.07" },
        { id: 5, name: "MultiTerminal", price: 799, rate: "2.1% + $0.06" },
        { id: 6, name: "CloudRegister", price: 999, rate: "2.0% + $0.05" },
    ],
    large: [
        { id: 7, name: "EnterprisePOS", price: 1299, rate: "1.9% + $0.04" },
        { id: 8, name: "OmniChannel", price: 1599, rate: "1.8% + $0.03" },
        { id: 9, name: "AI-Powered POS", price: 1999, rate: "1.7% + $0.02" },
    ],
};

export function Hero() {
    const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null);
    const [selectedMachines, setSelectedMachines] = useState<{ id: number; name: string; price: number; rate: string }[]>([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [machineDetails, setMachineDetails] = useState<{ id: number; name: string; price: number; rate: string } | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleSelectMachine = (machine: { id: number; name: string; price: number; rate: string }) => {
        setMachineDetails(machine);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleAddMachine = (machine: { id: number; name: string; price: number; rate: string }) => {
        if (selectedMachines.length < 2) {
            setSelectedMachines([...selectedMachines, machine]);
        } else if (selectedIndex !== null) {
            const updatedMachines = [...selectedMachines];
            updatedMachines[selectedIndex] = machine; 
            setSelectedMachines(updatedMachines);
        }
        handleCloseDialog(); 
    };

    const handleSelectForComparison = (index: number) => {
        setSelectedIndex(index);
        handleSelectMachine(selectedMachines[index]);
    };

    return (
        <section className="bg-gradient-to-b from-navy-900 to-navy-700 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl font-extrabold mb-6 text-black">
                Encontre a maquinha perfeita para o seu negócio                </h1>
                <p className="text-xl mb-12 text-black">
                Compare taxas, preços e recursos para fazer a melhor escolha                </p>

                <div className="flex justify-center space-x-4 mb-12">
                    <Button
                        onClick={() => setSelectedBusiness("small")}
                        variant={selectedBusiness === "small" ? "contained" : "outlined"}
                        className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 transition"
                    >
                        Lojas
                    </Button>
                    <Button
                        onClick={() => setSelectedBusiness("medium")}
                        variant={selectedBusiness === "medium" ? "contained" : "outlined"}
                        className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 transition"
                    >
                        Varejo
                    </Button>
                    <Button
                        onClick={() => setSelectedBusiness("large")}
                        variant={selectedBusiness === "large" ? "contained" : "outlined"}
                        className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 transition"
                    >
                        Corporações
                    </Button>
                </div>

                {/* Exibir cards apenas para o tipo de negócio selecionado */}
                {selectedBusiness && (
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {machines[selectedBusiness].map((machine) => (
                            <Card key={machine.id} className="border border-gold-400 hover:shadow-lg transition-transform transform hover:scale-105">
                                <CardHeader>
                                    <Typography variant="h6" className="text-center">{machine.name}</Typography>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg font-semibold text-center">${machine.price}</p>
                                    <p className="text-sm text-gray-300 text-center">Rate: {machine.rate}</p>
                                    <Button
                                        onClick={() => handleSelectMachine(machine)}
                                        className="mt-4 bg-white text-black hover:bg-gray-200 transition"
                                        fullWidth
                                    >
                                        Selecionar para comparação
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                {/* Se houver máquinas selecionadas para comparação */}
                {selectedMachines.length > 0 && (
                    <div className="mt-12">
                        <h3 className="text-3xl font-bold mb-6">Comparação</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {selectedMachines.map((machine, index) => (
                                <Card key={machine.id} className="border-2 border-gold-400 hover:shadow-lg transition-transform transform hover:scale-105">
                                    <CardHeader>
                                        <Typography variant="h6" className="text-center">{machine.name}</Typography>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg font-semibold text-center">${machine.price}</p>
                                        <p className="text-sm text-gray-300 text-center">Rate: {machine.rate}</p>
                                        <Button
                                            onClick={() => handleSelectForComparison(index)}
                                            className="mt-4 bg-navy-800 text-white hover:bg-navy-700 transition"
                                            fullWidth
                                        >
                                            mudar máquina
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
                                <p className="text-sm text-gray-600">Taxa: {machineDetails.rate}</p>
                            </CardContent>
                        </Card>
                    )}
                    <DialogActions>
                        <Button onClick={() => { handleAddMachine(machineDetails!); }} variant="outlined" color="primary">
                             comparar
                        </Button>
                        <Button onClick={handleCloseDialog}variant="outlined" color="primary">
                            Cancelar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </section>
    );
}
