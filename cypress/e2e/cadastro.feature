Feature: Cadastrar-se

Scenario: Cadastrar um usuário
  Given Eu entro no publicazo
   When Clico em Cadastre-se
   And Preencho as minhas informações
   Then O sistema exibe uma mensagem de sucesso