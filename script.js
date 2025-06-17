document.addEventListener('DOMContentLoaded', function() {
    // Defina a data de início aqui (Ano, Mês - 1, Dia)
    // O mês é baseado em zero (janeiro é 0, fevereiro é 1, etc.)
    const dataInicio = new Date(2023, 0, 1); // Exemplo: 1º de janeiro de 2023

    function atualizarContador() {
        const dataAtual = new Date();
        // Calcula a diferença em milissegundos
        const diferencaEmMilissegundos = dataAtual - dataInicio;

        // Converte milissegundos para dias
        // 1 segundo = 1000 milissegundos
        // 1 minuto = 60 segundos
        // 1 hora = 60 minutos
        // 1 dia = 24 horas
        const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
        const diasPassados = Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos);

        document.getElementById('contadorDeDias').textContent = diasPassados + " dias";
    }

    // Atualiza o contador imediatamente ao carregar a página
    atualizarContador();

    // Opcional: Atualizar o contador a cada X milissegundos (por exemplo, a cada hora para garantir precisão diária)
    // Se você quer que ele atualize apenas quando a página é carregada ou recarregada, você pode remover esta linha.
    // setInterval(atualizarContador, 1000 * 60 * 60); // Atualiza a cada hora
});
