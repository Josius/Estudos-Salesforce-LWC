# Lightning Messaging Service (LMS)
- Tecnoligia Salesforce que habilita a comunicação entre Visualforce, Aura componentes e LWCs, em qualquer lightning page, incluíndo componentes

### Prerequisitos para criar um Message Channel
1. criar o diretório *messageChannels* no caminho *force-app/main/default*
2. criar o arquivo *CHANNELNAME.messageChannel-meta.xml* no diretório messageChannels
3. adicionar no arquivo o seguinte xml:
   ```xml
   <?xml version="1.0" encoding="UTF-8" ?>
    <LightningMessageChannel xmlns="http://soap.sforce.com/2006/04/metadata">
        <masterLabel>SampleMessageChannel</masterLabel>
        <isExposed>true</isExposed>
        <description>Message Channel to pass data</description>
        <lightningMessageFields>
            <fieldName>lmsData</fieldName>
            <description>This is the field to pass data</description>
        </lightningMessageFields>
    </LightningMessageChannel>
   ``` 
   1. **masterLabel**: nome do canal de comunicação
   2. **isExposed**: para que outros componentes possam usar
   3. **lightningMessageFields**: podem ser criados quantos forem necessários
      1. **fieldName**: campo que sera usado para transferir dados, deve ser único
4. atualizar o *manifest/package.xml* adicionando
    ```xml
    <types>
        <members>*</members>
        <name>LightningMessageChannel</name>
    </types>
    ```
5. API version precisa ser 47 ou maior, isso é verificado na penúltima linha do arquivo *package.xml* no diretório *manifest*
6. Link para a documentação das informações acima: [**LightningMessageChannel**](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_lightningmessagechannel.htm)