# 🎲 RPG Turn Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/rpg-turn-tracker?style=social)](https://github.com/GilvanPedro/rpg-turn-tracker/stargazers)

Um sistema de gerenciamento de turnos para RPG de mesa moderno e responsivo, desenvolvido com HTML5, CSS3 e JavaScript puro. Gerencie a iniciativa da sua campanha e role dados de forma interativa e visualmente atraente.

## 🌟 Recursos

### 🎯 Funcionalidades Principais
- ✅ Adicione e remova personagens facilmente
- 🖱️ Interface de arrastar e soltar intuitiva
- 🎨 Design temático de RPG responsivo
- 🎭 Destaque visual para o personagem atual
- 🎲 Rolador de dados D20 interativo
- 🎯 Feedback visual para resultados altos e baixos
- 📱 Totalmente responsivo para desktop e dispositivos móveis
- ⚡ Leve e rápido, sem dependências externas

### 🎮 Controles Rápidos
- `Enter` - Adiciona um novo personagem
- `Arrastar` - Reorganize a ordem dos personagens
- `×` - Remove um personagem
- `Próximo Turno` - Avança para o próximo personagem
- `Rolar D20` - Rola um ou mais dados de 20 lados

## 🚀 Começando

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma instalação necessária

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/yourusername/rpg-turn-tracker.git
   ```
2. Navegue até a pasta do projeto
3. Abra `index.html` no seu navegador

Ou simplesmente faça o download dos arquivos e abra o `index.html` diretamente.

## 🎲 Sistema de Dados

### 🎯 Resultados dos Dados
- **20 (Crítico)**: Dado brilha em verde com efeito especial
- **15-19**: Dado fica verde (acerto alto)
- **6-14**: Dado padrão (cinza)
- **2-5**: Dado fica vermelho (acerto baixo)
- **1 (Falha Crítica)**: Dado brilha em vermelho com efeito especial

### 🎮 Como Usar o Rolador
1. Escolha quantos dados deseja rolar (1-10)
2. Clique em "Rolar D20"
3. Assista à animação e veja os resultados
4. As cores indicam a qualidade do resultado

## 🛠️ Tecnologias Utilizadas

- **Frontend**
  - HTML5
  - CSS3 (com variáveis CSS, Flexbox e animações)
  - JavaScript Vanilla (ES6+)
  - Font Awesome 6.0 para ícones
  - Google Fonts (Cinzel e MedievalSharp)

## 📱 Compatibilidade

| Navegador | Suporte |
|-----------|---------|
| Chrome    | ✅ Sim  |
| Firefox   | ✅ Sim  |
| Safari    | ✅ Sim  |
| Edge      | ✅ Sim  |
| Mobile    | ✅ Sim  |

## 🎨 Personalização

### Cores do Tema
Personalize as cores editando as variáveis CSS no arquivo `style.css`:

```css
:root {
    --primary: #8B4513;      /* Cor principal (marrom) */
    --secondary: #DAA520;    /* Cor secundária (dourado) */
    --dark: #2C1810;        /* Cor escura */
    --light: #F5F5DC;       /* Cor clara (bege) */
    --accent: #B22222;      /* Cor de destaque */
    --success: #4CAF50;     /* Cor de sucesso */
}
```

## 📝 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## ✨ Próximas Atualizações

- [ ] Salvar lista no LocalStorage
- [ ] Histórico de turnos
- [ ] Temporizador de rodada
- [ ] Modo escuro/claro
- [ ] Exportar/Importar lista
- [ ] Mais tipos de dados (D4, D6, D8, D10, D12, D100)
- [ ] Sons personalizados para diferentes resultados
- [ ] Estatísticas de rolagens

## 👨‍💻 Autor

**Gilvan Pedro**

- GitHub: [@GilvanPedro](https://github.com/GilvanPedro)
- LinkedIn: [Gilvan Pedro](https://www.linkedin.com/in/gilvannp)
- Site: [Portifólio](https://gilvanpedro.github.io/Portifolio)

## 🙌 Agradecimentos

- Ícones por [Font Awesome](https://fontawesome.com/)
- Fontes por [Google Fonts](https://fonts.google.com/)
- Texturas por [Transparent Textures](https://www.transparenttextures.com/)

---

<div align="center">
Feito com ❤️ e ☕ por Gilvan Pedro
</div>
