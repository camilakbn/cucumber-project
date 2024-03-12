Feature: EditarPerfil

Scenario: Editar perfil de usuário
  Given Estou autenticada com sucesso
   When Eu clico para editar o perfil e edito as informações do meu perfil
   Then O sistema salva as alterações com sucesso