Feature: Verificar la Carga Automática de Datos en el formulario de Editar un Cómic
 Como usuario administrador de la página Comic Nexus
 Quiero verificar la carga automática de datos en el formulario de editar un cómic
 Para asegurarme de que los datos se cargan correctamente
Scenario: Carga automática de datos al editar un cómic
    Given El administrador inicia sesión
    When Se dirige a panel de administrador y Seleciona el comic Aquaman para editar
    Then Se obtiene el valor del titulo y se compara con Aquaman
    And Se obtiene el valor del autor y se compara con el autor esperado
    And Se obtiene el valor de la fecha de publicación y se compara con la fecha esperada
    And Se obtiene el valor de la sinopsis y se compara con la sinopsis esperada
    

    