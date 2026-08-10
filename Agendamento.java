import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class Agendamento {

    private LocalTime horario;
    private String nomeCliente;

    // Corrigido: tipo DateTimeFormatter e aspas duplas no padrão "HH:mm"
    public static final DateTimeFormatter FORMATACAODOHORARIO = DateTimeFormatter.ofPattern("HH:mm");

    public Agendamento(LocalTime horario, String nomeCliente) {
        this.horario = horario;

        // Corrigido: == null (comparação com nulo real, e não com o texto "null")
        if (nomeCliente == null || nomeCliente.isBlank()) {
            this.nomeCliente = "LIVRE";
        } else {
            this.nomeCliente = nomeCliente;
        }
    }

    public LocalTime getHorario() {
        return horario;
    }

    public String getNomeCliente() {
        return nomeCliente;
    }

    public void setNomeCliente(String nomeCliente) {
        this.nomeCliente = nomeCliente;
    }

    // Método 1: Transforma este objeto em texto para o arquivo ("08:00;LIVRE")
    public String horarioParaTexto() {
        return horario.format(FORMATACAODOHORARIO) + ";" + nomeCliente;
    }

    // Método 2: Transforma a linha do arquivo de volta em um objeto Agendamento
    public static Agendamento deLinhaTexto(String linha) {
        String[] partes = linha.split(";");
        if (partes.length < 2) { // Corrigido: partes.length
            return null;
        }
        LocalTime hora = LocalTime.parse(partes[0], FORMATACAODOHORARIO);
        String cliente = partes[1];
        return new Agendamento(hora, cliente);
    }

    @Override
    public String toString() {
        // Corrigido: nome da constante igual ao declarado acima
        return "[" + horario.format(FORMATACAODOHORARIO) + "] Status: " + nomeCliente;
    }
}
