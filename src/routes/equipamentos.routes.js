const express = require('express');
const router = express.Router();

const EquipamentoService = require('../services/equipamentoServices');

const service = new EquipamentoService();



router.get('/equipamentos', async (req, res) => {
    try {
        const equipamentos = await service.listarEquipamentos();

        res.json(equipamentos);
    } catch (erro) {
        console.error('ERRO REAL:', erro);

        res.status(500).json({
            erro: 'Erro ao listar equipamentos'
        });
    }
});


router.get('/equipamentos/:id', async (req, res) => {
    try {
        const equipamento = await service.buscarPorId(req.params.id);

        if (!equipamento) {
            return res.status(404).json({
                erro: 'Equipamento não encontrado'
            });
        }

        res.json(equipamento);

    } catch (erro) {
        console.error('ERRO REAL:', erro);

        res.status(500).json({
            erro: 'Erro ao buscar equipamento'
        });
    }
});



router.post('/equipamentos', async (req, res) => {
    try {
        const {
            nome,
            categoria,
            condicao_uso,
            disponivel
        } = req.body;

        const equipamento = await service.cadastrarEquipamento(
            nome,
            categoria,
            condicao_uso,
            disponivel
        );

        res.status(201).json(equipamento);

    } catch (erro) {
        console.error('ERRO REAL:', erro);

        res.status(500).json({
            erro: 'Erro ao cadastrar equipamento'
        });
    }
});


router.patch('/equipamentos/:id/disponibilidade', async (req, res) => {
    try {
        const { disponivel } = req.body;

        const equipamento = await service.alterarDisponibilidade(
            req.params.id,
            disponivel
        );

        if (!equipamento) {
            return res.status(404).json({
                erro: 'Equipamento não encontrado'
            });
        }

        res.json(equipamento);

    } catch (erro) {
        console.error('ERRO REAL:', erro);

        res.status(500).json({
            erro: 'Erro ao alterar disponibilidade'
        });
    }
});


module.exports = router;