import java.time.LocalTime;
import java.util.List;

public class GerenciadorAgenda {

    // 1. Ajustado de AgendaRepository para AgendamentoRepository
    private AgendamentoRepository repositorio;
    private List<Agendamento> agendamentos;

    // Construtor
    public GerenciadorAgenda(String caminhoArquivo) {
        // 2. Ajustado para new AgendamentoRepository(...)
        this.repositorio = new AgendamentoRepository(caminhoArquivo);
        this.agendamentos = repositorio.carregarDoTxt();

        // Se o arquivo estava vazio, cria a grade inicial e grava no .txt
        if (agendamentos.isEmpty()) {
            gerarGradeHorariosPadrao();
            repositorio.salvarNoTxt(agendamentos);
        }
    }

    private void gerarGradeHorariosPadrao() {
        LocalTime horaAtual = LocalTime.of(8, 0);
        LocalTime horaFim = LocalTime.of(18, 0);
        LocalTime inicioAlmoco = LocalTime.of(12, 0);
        LocalTime fimAlmoco = LocalTime.of(13, 0);

        while (horaAtual.isBefore(horaFim)) {
            if (!horaAtual.isBefore(inicioAlmoco) && horaAtual.isBefore(fimAlmoco)) {
                horaAtual = fimAlmoco;
                continue;
            }

            agendamentos.add(new Agendamento(horaAtual, "LIVRE"));
            horaAtual = horaAtual.plusMinutes(30);
        }
    }

    public List<Agendamento> getAgendamentos() {
        return agendamentos;
    }

    public boolean agendar(LocalTime horarioDesejado, String nomeCliente) {
        for (Agendamento item : agendamentos) {
            if (item.getHorario().equals(horarioDesejado)) {
                
                if (!item.getNomeCliente().equalsIgnoreCase("LIVRE")) {
                    System.out.println("❌ Horário das " + horarioDesejado + " já ocupado por: " + item.getNomeCliente());
                    return false;
                }

                item.setNomeCliente(nomeCliente);
                repositorio.salvarNoTxt(agendamentos);
                System.out.println("✅ Horário das " + horarioDesejado + " agendado com sucesso para " + nomeCliente + "!");
                return true;
            }
        }

        System.out.println("❌ Horário das " + horarioDesejado + " não existe na grade.");
        return false;
    }

    public void exibirAgenda() {
        System.out.println("\n=== AGENDA DO DIA ===");
        for (Agendamento item : agendamentos) {
            System.out.println(item);
        }
        System.out.println("=====================\n");
    }
}