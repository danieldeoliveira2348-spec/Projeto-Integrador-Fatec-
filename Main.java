import java.time.LocalTime;

public class Main {
    public static void main(String[] args) {
        // Define o nome do arquivo de texto que será criado/lido
        String arquivoBanco = "banco_agenda.txt";

        System.out.println(">>> Inicializando o sistema de agendamentos...");
        
        // Inicializa o gerenciador (se o .txt não existir, ele cria a grade das 08:00 às 18:00)
        GerenciadorAgenda agenda = new GerenciadorAgenda(arquivoBanco);

        // 1. Mostra a agenda atual na tela
        agenda.exibirAgenda();

        // 2. Simula um agendamento (Ex: às 09:30 para o cliente "Carlos")
        System.out.println(">>> Tentando agendar 09:30 para Carlos...");
        agenda.agendar(LocalTime.of(9, 30), "Carlos");

        // 3. Tenta agendar no horário do almoço (deve falhar porque o horário nem existe na grade)
        System.out.println("\n>>> Tentando agendar no horário de almoço (12:30)...");
        agenda.agendar(LocalTime.of(12, 30), "Mariana");

        // 4. Tenta agendar em um horário que já foi ocupado (09:30 para "Ana")
        System.out.println("\n>>> Tentando ocupar o mesmo horário (09:30) para Ana...");
        agenda.agendar(LocalTime.of(9, 30), "Ana");

        // 5. Mostra a agenda atualizada após os testes
        agenda.exibirAgenda();
        
        System.out.println(">>> Teste concluído! Verifique se o arquivo '" + arquivoBanco + "' foi gerado/atualizado na pasta do projeto.");
    }
}