<<<<<<< HEAD
class itemBiblioteca{
    titulo: string = ''
    autor: string= ''
     publicacao: number =0
   

    constructor(titulo: string,
    autor: string,
     publicacao: number,
     
                )
    {
        this.titulo = ''
        this.autor = ''
        this.publicacao = 0
        
}
}


class livro extends itemBiblioteca{
  pagina: number = 0
  obterInformacao() {
    console.log(livro)
  }

}


class usuario{
    nome: string = ""
    matricula: number = 0
    tipo: string = ""
    litaDeItemEmpretados: string = ""



}


class Empretismo {
    dadoDeEmpretismo: string =""
    dadosDeDevolocao: number = 0
    usuario: usuario|undefined 

    constructor(dadoDeEmpretismo: string,
    dadosDeDevolocao: number ,
    usuario: usuario){
        this.dadoDeEmpretismo = "";
        this.dadosDeDevolocao = 0
    }
=======
class itemBiblioteca{
    titulo: string = ''
    autor: string= ''
     publicacao: number =0
   

    constructor(titulo: string,
    autor: string,
     publicacao: number,
     
                )
    {
        this.titulo = ''
        this.autor = ''
        this.publicacao = 0
        
}
}


class livro extends itemBiblioteca{
  pagina: number = 0
  obterInformacao() {
    console.log(livro)
  }

}


class usuario{
    nome: string = ""
    matricula: number = 0
    tipo: string = ""
    litaDeItemEmpretados: string = ""



}


class Empretismo {
    dadoDeEmpretismo: string =""
    dadosDeDevolocao: number = 0
    usuario: usuario|undefined 

    constructor(dadoDeEmpretismo: string,
    dadosDeDevolocao: number ,
    usuario: usuario){
        this.dadoDeEmpretismo = "";
        this.dadosDeDevolocao = 0
    }
>>>>>>> 882944d4446be9f2a883923ce3f8f1179f7ebcbc
    }