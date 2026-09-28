import java.util.Scanner;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("HH:mm");

        System.out.println("--- CONFIGURAÇÃO DA AGENDA ---");
        System.out.print("Horário de início (Ex: 08:00): ");
        LocalTime inicio = LocalTime.parse(leitor.next(), formato);
        
        System.out.print("Horário de término (Ex: 17:00): ");
        LocalTime fim = LocalTime.parse(leitor.next(), formato);
        
        System.out.print("Tempo médio por corte (minutos): ");
        int tempoCorte = leitor.nextInt();

        // Lógica do Almoço
        System.out.print("Deseja incluir intervalo de almoço? (s/n): ");
        String querAlmoco = leitor.next();
        LocalTime inicioAlmoco = null;
        LocalTime fimAlmoco = null;

        if (querAlmoco.equalsIgnoreCase("s")) {
            System.out.print("Início do almoço (Ex: 12:00): ");
            inicioAlmoco = LocalTime.parse(leitor.next(), formato);
            System.out.print("Duração do almoço (minutos): ");
            int duraAlmoco = leitor.nextInt();
            fimAlmoco = inicioAlmoco.plusMinutes(duraAlmoco);
        }

        ArrayList<String> gradeHorarios = new ArrayList<>();
        ArrayList<String> nomesClientes = new ArrayList<>();

        LocalTime aux = inicio;
        
        // GERAÇÃO DA AGENDA
        while (!aux.plusMinutes(tempoCorte).isAfter(fim)) {
            
            // Verifica se o horário atual cai dentro do almoço
            if (querAlmoco.equalsIgnoreCase("s") && 
                !aux.isBefore(inicioAlmoco) && aux.isBefore(fimAlmoco)) {
                
                // Se estiver no almoço, pula para o fim do intervalo
                aux = fimAlmoco;
                continue; // Volta para o início do while para checar o novo horário
            }

            gradeHorarios.add(aux.format(formato));
            nomesClientes.add("LIVRE");
            aux = aux.plusMinutes(tempoCorte);
        }

        // MENU DE OPERAÇÃO
        int opcao = -1;
        while (opcao != 0) {
            System.out.println("\n--- AGENDA COM INTERVALO ---");
            if (querAlmoco.equalsIgnoreCase("s")) {
                System.out.println("[Intervalo configurado: " + inicioAlmoco + " até " + fimAlmoco + "]");
            }
            
            for (int i = 0; i < gradeHorarios.size(); i++) {
                System.out.println(i + " - [" + gradeHorarios.get(i) + "] Status: " + nomesClientes.get(i));
            }

            System.out.println("\n1. Reservar | 0. Sair");
            System.out.print("Escolha: ");
            opcao = leitor.nextInt();

            if (opcao == 1) {
                System.out.print("Número do índice: ");
                int indice = leitor.nextInt();
                if (indice >= 0 && indice < gradeHorarios.size()) {
                    System.out.print("Nome do Cliente: ");
                    leitor.nextLine(); 
                    nomesClientes.set(indice, leitor.nextLine());
                    System.out.println("Agendamento Confirmado!");
                }
            }
        }
        leitor.close();
    }
}