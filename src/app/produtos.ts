/*
O que um produto tem?
*/
export interface IProdutos{
    id_produto: number;
    nome: string;
    custo: number;
    description: string;
    estoque: number;
    disponivel: boolean;
    imagem: string;
}
//Criando o meu carrinho em "carrinho.service"
export interface IProdutosCarrinho extends IProdutos{
    quantidade: number;
}
/*
Banco de dados dos produtos

Obs.: Agora com "IProdutos[]" como type do meu array "const produtos". O meu banco de dados
virou uma lista de objetos com retrições. Essa configuração é para fazer a lógica com estoque
*/
export const produtos: IProdutos[] = [
    {id_produto: 1, nome: "Fone de ouvido Mini", custo: 200.00, description: "É um fone muito bom!", estoque: 70, disponivel: true, imagem: "./assets/fone-de-ouvido-1.jpg"},
    {id_produto: 2, nome: "Fone de ouvido UZ", custo: 234.50, description: "É um fone exelente!", estoque: 30, disponivel: true, imagem: "./assets/fone-de-ouvido-2.jpg"},
    {id_produto: 3, nome: "Fone de ouvido", custo: 120.35, description: "É um fone muito bacana!", estoque: 100, disponivel: true, imagem: "./assets/fone-de-ouvido-3.jpg"},
    {id_produto: 4, nome: "HD de 1TB", custo: 210.05, description: "HD a prova d'água", estoque: 13, disponivel: false, imagem: "./assets/hd.jpg"},
    {id_produto: 5, nome: "Um laptop SAMSUNG", custo: 4000.99, description: "Um laptop bonito", estoque: 6, disponivel: true, imagem: "./assets/laptop-1.jpg"},
    {id_produto: 6, nome: "Um laptop MAÇÃ", custo: 7000.00, description: "Um laptop muito bom", estoque: 10, disponivel: true, imagem: "./assets/laptop-2.jpg"},
    {id_produto: 7, nome: "Monitor exelente", custo: 600.00, description: "Monitor bem grnade", estoque: 0, disponivel: false, imagem: "./assets/monitor-1.jpg"},
    {id_produto: 8, nome: "Mouse americano", custo: 20.35, description: "A prova d'água", estoque: 60, disponivel: true, imagem: "./assets/mouse-1.png"},
    {id_produto: 9, nome: "Mouse brasileiro", custo: 155.05, description: "Ainda em fases de testes", estoque: 89, disponivel: true, imagem: "./assets/mouse-2.jpg"},
    {id_produto: 10, nome: "Mouse UZ", custo: 400.35, description: "Feito no laboratório", estoque: 3, disponivel: true, imagem: "./assets/mouse-3.jpg"},
    {id_produto: 11, nome: "Mouse bacana", custo: 244.89, description: "Muito legal", estoque: 0, disponivel: false, imagem: "./assets/mouse-4.jpg"},
    {id_produto: 12, nome: "Ultra placa de vídeo", custo: 666.41, description: "Feito no laboratório", estoque: 58, disponivel: true, imagem: "./assets/placa-video.jpg"},
    {id_produto: 13, nome: "Um precessador simples", custo: 500.00, description: "Muito legal", estoque: 0, disponivel: false, imagem: "./assets/processador.jpg"},
    {id_produto: 14, nome: "Teclado barato", custo: 199.99, description: "Ainda em teses", estoque: 28, disponivel: true, imagem: "./assets/teclado-1.jpg"},
    {id_produto: 15, nome: "Teclado legal", custo: 400.95, description: "A prova d'água", estoque: 99, disponivel: true, imagem: "./assets/teclado-2.jpg"},
]