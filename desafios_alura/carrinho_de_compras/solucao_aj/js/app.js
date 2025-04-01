let produtosCarrinho = [];

const divListaProdutos = document.getElementById('lista-produtos');
const spanValorTotal = document.getElementById('valor-total');

function adicionar () {
    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;

    if (!validateQuantidade(quantidade)) return

    const objetoProduto = handleObjetoProduto(produto, quantidade)
    produtosCarrinho.push(objetoProduto);

    handleRefreshCarrinho();
    handleRefreshTotal();
}

function handleObjetoProduto (produto, quantidade) {
    const [descricao, valorPorExtenso] = produto.split(' - ')
    const valor = Number(valorPorExtenso.replace(/[^0-9]/g, ''))

    return {
        descricao, 
        valor, 
        quantidade
    }
}

function validateQuantidade (quantidade) {
    if (!quantidade) {
        alert('Você precisa informar informar a quantidade');
        return false;
    }

    if (quantidade <= 0) {
        alert('Você precisa informar um valor maior que zero');
        return false;
    }

    return true;
}

function handleRefreshCarrinho() {
    divListaProdutos.innerHTML = '';
    produtosCarrinho.forEach(objetoProduto => {
        const sectionProduto = document.createElement('section');
        sectionProduto.classList.add('carrinho__produtos__produto');
        
        const valorTotalProduto = (objetoProduto.valor * objetoProduto.quantidade).toLocaleString('pt-br', {minimumFractionDigits: 2});
        sectionProduto.innerHTML = `<span class="texto-azul">${objetoProduto.quantidade}x</span> ${objetoProduto.descricao} <span class="texto-azul">R$${valorTotalProduto}</span>`

        divListaProdutos.appendChild(sectionProduto);
    })
}

function handleRefreshTotal() {
    const valorTotal = produtosCarrinho.reduce((acc, produto) => acc + (produto.valor * produto.quantidade), 0);
    spanValorTotal.innerHTML = `R$${valorTotal.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
}

function limpar() {
    produtosCarrinho = []
    handleRefreshCarrinho();
    handleRefreshTotal();

    const quantidadeEl =document.getElementById('quantidade');
    quantidadeEl.value = '';
}