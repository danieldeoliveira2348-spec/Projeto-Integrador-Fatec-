import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class AgendamentoRepository {

    private String caminhoArquivo;

    public AgendamentoRepository(String caminhoArquivo) {
        this.caminhoArquivo = caminhoArquivo;
    }

    public boolean arquivoExiste() {
        return Files.exists(Paths.get(caminhoArquivo));
    }

    public void salvarNoTxt(List<Agendamento> listaAgendamentos) {
        try (BufferedWriter escritor = new BufferedWriter(new FileWriter(caminhoArquivo))) {
            for (Agendamento item : listaAgendamentos) {
                escritor.write(item.horarioParaTexto());
                escritor.newLine();
            }
        } catch (IOException e) {
            System.err.println("Erro ao salvar o arquivo: " + e.getMessage());
        }
    }

    public List<Agendamento> carregarDoTxt() {
        List<Agendamento> listaCarregada = new ArrayList<>();

        if (!arquivoExiste()) {
            return listaCarregada;
        }

        try (BufferedReader leitor = new BufferedReader(new FileReader(caminhoArquivo))) {
            String linha;
            while ((linha = leitor.readLine()) != null) {
                if (!linha.trim().isEmpty()) {
                    Agendamento item = Agendamento.deLinhaTexto(linha);
                    if (item != null) {
                        listaCarregada.add(item);
                    }
                }
            }
        } catch (IOException e) {
            System.err.println("Erro ao carregar o arquivo: " + e.getMessage());
        }

        return listaCarregada;
    }
}