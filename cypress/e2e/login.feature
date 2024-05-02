Feature: Login

Scenario: Login com usuário inválido
  Given Eu entro no publicazo
   When Eu clico em Entrar
   And Passo um usuário e senha inválidos
   Then O sistema me notifica que as credenciais não são válidas

Scenario: Login com usuário válido
  Given Eu entro no publicazo
   When Eu clico em Entrar
   When Passo um usuário e senha válidos
   Then O sistema me autentica com sucesso