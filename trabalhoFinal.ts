// Enum para tipos de consulta
enum TipoConsulta {
    Geral,
    Especializada
}

// Classe abstrata Pessoa
abstract class Pessoa {
    protected nome: string;
    protected idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }
}
// Classe Paciente
class Paciente extends Pessoa {
    private historico: Historico;

    constructor(nome: string, idade: number) {
        super(nome, idade);
        this.historico = new Historico();
    }

    public adicionarConsulta(consulta: Consulta): void {
        this.historico.adicionarConsulta(consulta);
    }
}

// Classe Medico
class Medico extends Pessoa {
    private especialidade: Especialidade;

    constructor(nome: string, idade: number, especialidade: Especialidade) {
        super(nome, idade);
        this.especialidade = especialidade;
    }

    public getEspecialidade(): Especialidade {
        return this.especialidade;
    }
}

// Classe abstrata Consulta
abstract class Consulta {
    protected paciente: Paciente;
    protected medico: Medico;
    protected data: Date;

    constructor(paciente: Paciente, medico: Medico, data: Date) {
        this.paciente = paciente;
        this.medico = medico;
        this.data = data;
    }

    public abstract getTipo(): TipoConsulta;
}

// Classe ConsultaGeral
class ConsultaGeral extends Consulta {
    public getTipo(): TipoConsulta {
        return TipoConsulta.Geral;
    }
}

// Classe ConsultaEspecializada
class ConsultaEspecializada extends Consulta {
    public getTipo(): TipoConsulta {
        return TipoConsulta.Especializada;
    }
}

// Classe Endereco
class Endereco {
    private rua: string;
    private numero: number;
    private cidade: string;

    constructor(rua: string, numero: number, cidade: string) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
    }
}

// Classe Horario
class Horario {
    private hora: number;
    private minuto: number;

    constructor(hora: number, minuto: number) {
        this.hora = hora;
        this.minuto = minuto;
    }
}

// Classe Especialidade
class Especialidade {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

// Interface IAgendamento
interface IAgendamento {
    agendarConsulta(consulta: Consulta): void;
}

// Classe PostoSaude
class PostoSaude implements IAgendamento {
    private endereco: Endereco;
    private agenda: Agenda;

    constructor(endereco: Endereco) {
        this.endereco = endereco;
        this.agenda = new Agenda();
    }

    public agendarConsulta(consulta: Consulta): void {
        this.agenda.adicionarConsulta(consulta);
    }
}

// Classe Agenda
class Agenda {
    private consultas: Consulta[] = [];

    public adicionarConsulta(consulta : Consulta): void {
        this.consultas.push(consulta);
    }

    public listarConsultas(): Consulta[] {
        return this.consultas;
    }
}

// Classe Usuario
class Usuario {
    private nome: string;
    private tipo: 'Paciente' | 'Medico';

    constructor(nome: string, tipo: 'Paciente' | 'Medico') {
        this.nome = nome;
        this.tipo = tipo;
    }

    public getNome(): string {
        return this.nome;
    }

    public getTipo(): 'Paciente' | 'Medico' {
        return this.tipo;
    }
}

// Classe Historico
class Historico {
    private consultas: Consulta[] = [];

    public adicionarConsulta(consulta: Consulta): void {
        this.consultas.push(consulta);
    }

    public getConsultas(): Consulta[] {
        return this.consultas;
    }
}

// Classe SistemaAgendamento
class SistemaAgendamento {
    private postosSaude: PostoSaude[] = [];

    public adicionarPostoSaude(posto: PostoSaude): void {
        this.postosSaude.push(posto);
    }

    public listarPostosSaude(): PostoSaude[] {
        return this.postosSaude;
    }
} 


 // falta una classe

// Classe para representar um médico com disponibilidade
class MedicoDisponivel extends Medico {
    private horariosDisponiveis: Horario[];

    constructor(nome: string, idade: number, especialidade: Especialidade, horarios: Horario[]) {
        super(nome, idade, especialidade);
        this.horariosDisponiveis = horarios;
    }

    public getHorariosDisponiveis(): Horario[] {
        return this.horariosDisponiveis;
    }
}

// Classe para gerenciar a disponibilidade de médicos
class GerenciadorMedicos {
    private medicos: MedicoDisponivel[];

    constructor() {
        this.medicos = [];
    }

    public adicionarMedico(medico: MedicoDisponivel): void {
        this.medicos.push(medico);
    }

    public listarMedicos(): MedicoDisponivel[] {
        return this.medicos;
    }
}



// Classe para gerenciar a interface do usuário
class InterfaceUsuario {
    private sistema: SistemaAgendamento;

    constructor(sistema: SistemaAgendamento) {
        this.sistema = sistema;
    }

    public mostrarPostosSaude(): void {
        const postos = this.sistema.listarPostosSaude();
        console.log('Postos de Saúde disponíveis:');
        postos.forEach((posto, index) => {
            //falta un cosole.log
        });
    }
}
// Método para representar o endereço como string
/*Endereco.prototype.toString = function(): string {
    return  ${this['rua']}, ${this['numero']} - ${this['cidade']};
}*/ 
// el return esta mal escrito 
    
    

