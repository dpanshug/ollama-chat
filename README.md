# Ollama UI

A modern, user-friendly interface for [Ollama](https://github.com/ollama/ollama) that allows you to interact with various AI models locally. Built with Next.js 13.4.19, this UI provides an efficient way to run and manage different language models on your local machine.

<!-- ![Version](https://img.shields.io/badge/version-0.1.0-blue.svg) -->
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 🚀 Features

- Local model execution with Ollama integration
- Clean, intuitive user interface
- Model switching capabilities
- Support for Llama 3.2 (more models coming soon)
- Option for both local and hosted deployment
- Real-time chat interface
- Model parameter customization

## 📋 Prerequisites

- Node.js 16.8 or later
- Ollama installed on your machine ([Installation Guide](https://github.com/ollama/ollama))
- Git

## 🛠️ Installation

1. First, install Ollama by following the instructions at:
   ```bash
   https://github.com/ollama/ollama
   ```

2. Clone this repository:
   ```bash
   git clone https://github.com/dpanshug/ollama-chat.git
   cd ollama-chat
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 💻 Usage

1. Launch Ollama in the background
2. Start the UI application
3. Select your preferred model from the dropdown menu
4. Begin interacting with the model through the chat interface

## 🔧 Configuration

The application can be configured through environment variables:

```env
NEXT_PUBLIC_OLLAMA_HOST=http://localhost:11434
```

## 🌟 Current Model Support

- Llama 3.2 
- More models coming soon!

## 🚧 Project Status

This project is in its initial phase. Currently, it works correctly with Llama 3.2. I am actively working on adding support for more models and features.

## 🛣️ Roadmap

- [ ] Add support for more models
- [ ] Implement model parameter fine-tuning
- [ ] Add conversation history
- [ ] Improve error handling
- [ ] Add user authentication
- [ ] Docker support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Ollama](https://github.com/ollama/ollama) for providing the base model running capabilities
- [Next.js](https://nextjs.org/) for the amazing framework

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Made with ❤️ by dpanshug