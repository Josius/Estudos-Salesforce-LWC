# Content Asset Files
- Esta aula permite criar um link de download de arquivos que estejam no *Asset Library* em *Files*. Pode-se upar arquivos para esse diretório.
### Configuração na Org
- Em *Iniciador de aplicativos -> Files -> Libraries -> Asset Library -> excolher arquivo ou upar um arquivo*
- Se escolher upar arquivo, *clicar em Upload Asset File -> Libraries -> Updload File -> escolher arquivo para upload -> copiar API Name -> deixar marcado a opção: Make asset file available to Salesforce org users -> Save*

### Static Resources
- 
```js
import myContentAsset from '@salesforce/contentAssetUrl/contentAssetReference'
```

**OBS:** ver código exemplo completo no código