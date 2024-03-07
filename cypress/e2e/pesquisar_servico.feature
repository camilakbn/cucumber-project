Feature: PesquisarServico

Scenario: Pesquisar serviço no publicazo
  Given Estou autenticada com sucesso
   When Quando eu realizo a pesquisa dos serviços
   Then O sistema me mostra os serviços disponíveis