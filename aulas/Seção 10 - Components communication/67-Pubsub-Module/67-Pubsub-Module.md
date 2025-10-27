# Pubsub Module
- para comunicação entre dois componentes LWCs independentes há dois tipos:
  - PubSub
  - Lightning Message Service
- em PubSub usamos um componente como de serviço, sem html, ele agirá como o intermediador
  - **pubsub**, neste componente de serviço, escrevemos o código necessário para *subscribe*, *unsubscribe* e *publish*
- Feito isso, teremos dois componentes, ambos precisam importar o componente pubsub criado:
  - **pubsubComponentA** para publicar
  - **pubsubComponentB** para receber as publicações
