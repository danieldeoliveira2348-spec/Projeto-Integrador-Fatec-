CREATE DATABASE IF NOT EXISTS sistema_barbearia;
USE sistema_barbearia;

-- 1. Criação da tabela de Barbearia
CREATE TABLE T_BARBEARIA (
    id_barbearia INT AUTO_INCREMENT PRIMARY KEY,
    nm_barbearia VARCHAR(100) NOT NULL,
    ds_telefone VARCHAR(20),
    ds_endereco VARCHAR(150)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Criação da tabela de Funcionários (Barbeiros)
CREATE TABLE T_FUNCIONARIO (
    id_funcionario INT AUTO_INCREMENT PRIMARY KEY,
    id_barbearia INT NOT NULL,
    nm_funcionario VARCHAR(100) NOT NULL,
    ds_cargo VARCHAR(50),
    CONSTRAINT fk_funcionario_barbearia FOREIGN KEY (id_barbearia) 
        REFERENCES T_BARBEARIA(id_barbearia)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Criação da tabela de Clientes
CREATE TABLE T_CLIENTE (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nm_cliente VARCHAR(100) NOT NULL,
    nr_telefone VARCHAR(20),
    ds_email VARCHAR(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Criação da tabela de Atendimento
CREATE TABLE T_ATENDIMENTO (
    id_atendimento INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_funcionario INT NOT NULL,
    dt_atendimento DATETIME NOT NULL,
    vl_preco DECIMAL(10,2) NOT NULL,
    st_status VARCHAR(20) DEFAULT 'AGENDADO',
    
    CONSTRAINT fk_atendimento_cliente FOREIGN KEY (id_cliente) 
        REFERENCES T_CLIENTE(id_cliente),
    CONSTRAINT fk_atendimento_funcionario FOREIGN KEY (id_funcionario) 
        REFERENCES T_FUNCIONARIO(id_funcionario),
        
    CONSTRAINT uk_funcionario_horario UNIQUE (id_funcionario, dt_atendimento)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;