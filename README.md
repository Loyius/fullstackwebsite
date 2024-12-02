# **Fullstack Website - Site de Vendas de Viagens**

### **Descrição**
Este repósitorio foi feito para o projeto **Fullstack Website** em que consta a criação do site VaiTur, um sistema completo de viagens. 
Este projeto foi desenvolvido para a disciplina de Programação Web como parte do curso de Ciência da Computação nele combinamos tecnologias modernas 
para oferecer uma experiência interativa e responsiva, permitindo aos usuários consultar pacotes de viagens, fazer login e simular compras.

---

### **Funcionalidades**
- **Cadastro e Login:** Sistema de registro e autenticação.
- **Consulta de Pacotes de Viagem:** Exibição detalhada e interativa de pacotes.
- **Interface Responsiva:** Design adaptável a diferentes dispositivos, desenvolvido com TailwindCSS.
- **Carrosséis Interativos:** Exibição de pacotes e ofertas dinâmicas utilizando a biblioteca Swiper.

---

### **Tecnologias Utilizadas**

#### **Frontend**
- **React.js:** Framework JavaScript para construção de interfaces.
- **TailwindCSS:** Framework CSS para estilização eficiente.
- **React Router DOM:** Navegação entre páginas.
- **Swiper:** Carrosséis dinâmicos.
- **Axios:** Comunicação com o backend.
- **Context API:** Gerenciamento de estado global.

#### **Backend**
- **Node.js:** Plataforma para execução de JavaScript no servidor.
- **Express.js:** Framework para APIs RESTful.
- **MySQL:** Banco de dados relacional.
- **Sequelize:** ORM para interação com o banco de dados.

#### **Banco de Dados**
- **MySQL:** Configurado via contêiner Docker para garantir consistência no ambiente de desenvolvimento.

#### **Docker**
- Configuração do ambiente com Docker Compose, incluindo banco de dados.

---

### **Estrutura do Projeto**

#### **Backend**
- **Caminho principal:** `src/server.js`  
- Gerencia requisições, autenticação e banco de dados.  

#### **Frontend**
- **Caminho principal:** `src/index.js`  
- Consome a API do backend e exibe pacotes de forma interativa.

---

# **Como Rodar o Projeto - Script de Configuração e Execução**

### Passo 1: Clonar o Repositório
git clone https://github.com/Loyius/fullstackwebsite.git

### Passo 2: Configurar o Backend
npm install
npm start 

### Passo 3: Configurar o Frontend
npm start

### Passo 4: Sobre o Banco de Dados
docker-compose up -d