# ✂️ Kings' Barber Project - Core Backend System

Sistema de gerenciamento e persistência de agendamentos desenvolvido em Java puro. O projeto foi projetado seguindo princípios de **Orientação a Objetos** e **Separação de Responsabilidades**, permitindo a manutenção de registros em arquivos locais e preparando o código para futura integração com APIs Web ou interfaces gráficas.

---

## 🚀 Funcionalidades

- **Geração Automática de Grade:** Cria a grade diária de horários de atendimento (08:00 às 18:00, com intervalos de 30 minutos).
- **Regra do Intervalo de Almoço:** Bloqueio automático do período de pausa (12:00 às 13:00) na geração da grade.
- **Validação de Disponibilidade:** Impede agendamentos duplicados em horários já ocupados.
- **Persistência em Arquivo (.txt):** Salva e recupera o estado da agenda diretamente em disco, garantindo a persistência dos dados entre execuções.
- **Arquitetura Decoplada:** O núcleo de regras de negócio é 100% independente da camada de entrada de dados (CLI, Web/API ou GUI).

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** Java 17+ (utilizando Java Time API `java.time.LocalTime` e I/O NIO `java.nio.file`)
- **Persistência:** Manipulação de Arquivos via `BufferedWriter` / `BufferedReader`
- **Ferramenta de Compilação:** `javac` (Java Compiler)

---

## 📂 Estrutura do Projeto

```text
├── Agendamento.java           # Modelo de dados (Representa o horário e o cliente)
├── AgendamentoRepository.java # Camada de Persistência (Leitura/Escrita no arquivo .txt)
├── GerenciadorAgenda.java    # Camada de Regras de Negócio (Agenda, horários e validações)
└── Main.java                 # Ponto de entrada / Execução de testes de integração
