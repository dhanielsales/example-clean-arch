# kafka-node

#### Modelo ideal de fluxo de consumo

Controller Attachado a uma configuração (Topico e/ou Consumer Group) => Usecase abstraido com uma operação qualquer => Repositories de Entity => Repositories de persistência

Avaliar customização de input de headers pelo producer, situacionalmente.

Falar que vale a pena abstrair muito o consumo do Kafka, pois como pretendemos usar as feature dele, como idepotência, consumer groups, etc, caso fizessemos uma interface, teriamos que abstrair essas features para uma serie de opções passadas via parametro e caso decidissemos mudar de adaptador, seguindo a lógica, teriamos que reimplementar todas essas features no novo adaptador. Minha sugestão é ainda fazer uma interface, pra ser nossa como assinatura, mas deixar mais acoplada

avaliar seguir a ideia do template de email

Fazer um adapter abstraindo somente o basico
Fazer um implementador que usa o adapter e implementar as interfaces.

- Possibilita transaction no uso
- Possibilita opções na criação da instancia

Interfaces de PubSub
KafkaAdapters Implementa

Avaliar AWS e Confluence

///////////

- Factories - OK
- Adapter de controlers - OK
- Adapter de rotas - Ok
- rotas - OK
- start server - OK
- Mudar Factories para classes - OK
- Resolver Imports - OK
- Colocar o Kafka
