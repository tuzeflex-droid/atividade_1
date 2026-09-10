const pool = require('./database');

async function consultarEquipamentos() {
    try {
        const resultado = await pool.query(
            'SELECT * FROM equipamentos ORDER BY id'
        );

        console.log('Equipamentos cadastrados:');

        console.table(resultado.rows);
    } catch (erro) {
        console.error('Erro ao consultar o banco:', erro.message);
    } finally {
        await pool.end();
    }
}

consultarEquipamentos();