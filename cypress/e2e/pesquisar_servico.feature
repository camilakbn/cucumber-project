Feature: PesquisarServico

Scenario: Pesquisar serviço no publicazo
  Given Estou autenticada com sucesso
  When Eu realizo a pesquisa dos serviços
  Then O sistema me mostra os serviços disponíveis