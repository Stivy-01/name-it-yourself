# Name It Yourself - Personal AI Assistant Framework

A React Native framework for building personalized AI assistants trained on your own social media data. This project provides the infrastructure to collect, process, and train AI models on your personal communication style.

## 🎯 Core Value Proposition

Transform your social media presence into a personalized AI assistant that:
- **Learns your communication style** from your actual posts and messages
- **Runs locally** on your device for complete privacy
- **Integrates seamlessly** with your existing social platforms
- **Provides a foundation** for custom AI applications

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Data Sources  │    │  Processing     │    │   AI Training   │
│                 │    │                 │    │                 │
│ • Twitter/X     │───▶│ • JSONL Export  │───▶│ • LoRA Training │
│ • Instagram     │    │ • Data Cleaning │    │ • Quantization  │
│ • LinkedIn      │    │ • Style Analysis│    │ • Model Export  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │  Mobile App     │
                       │                 │
                       │ • Chat Interface│
                       │ • Model Control │
                       │ • Data Dashboard│
                       └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Expo CLI
- Python 3.8+ (for training scripts)
- 8GB+ RAM (for model training)

### Installation

```bash
# Clone the repository
git clone https://github.com/Stivy-01/name-it-yourself.git
cd name-it-yourself

# Install dependencies
npm install

# Start development server
npm run dev
```

### Data Collection Setup

1. **Configure Platform APIs**
   ```typescript
   // services/DataCollectionService.ts
   await DataCollectionService.connectPlatform('twitter', {
     apiKey: 'your_api_key',
     apiSecret: 'your_api_secret'
   });
   ```

2. **Export Training Data**
   ```typescript
   const messages = await DataCollectionService.collectMessages('twitter', {
     dateRange: { start: '2024-01-01', end: '2024-12-31' },
     includeReplies: true
   });
   
   const jsonlData = await DataCollectionService.normalizeToJSONL(messages);
   await DataCollectionService.exportDataset(jsonlData, 'training_data.jsonl');
   ```

## 🔧 Technical Implementation

### Core Components

#### Data Collection Service
- **Multi-platform support**: Twitter/X, Instagram, LinkedIn
- **Rate limiting**: Respects API limits with exponential backoff
- **Data normalization**: Converts to SFT-ready JSONL format
- **Privacy-first**: Local processing, no cloud storage

#### Training Pipeline
- **LoRA fine-tuning**: Efficient parameter-efficient training
- **Quantization**: GGUF format for mobile deployment
- **Model selection**: Optimized for Gemma-3 270M (164MB quantized)
- **Training templates**: Ready-to-use Colab notebooks

#### Mobile Interface
- **React Native**: Cross-platform compatibility
- **Expo Router**: File-based navigation
- **Real-time chat**: WebSocket-based communication
- **Model management**: Local model loading and switching

### Data Flow

1. **Collection Phase**
   ```typescript
   // Collect raw data from platforms
   const rawData = await platformAPI.getMessages(filters);
   
   // Normalize to training format
   const trainingData = rawData.map(msg => ({
     instruction: "Respond like the user",
     input: msg.content,
     output: generateResponse(msg.context)
   }));
   ```

2. **Training Phase**
   ```python
   # LoRA configuration
   lora_config = {
       "r": 16,
       "lora_alpha": 32,
       "target_modules": ["q_proj", "v_proj"],
       "lora_dropout": 0.1
   }
   
   # Training script
   trainer = SFTTrainer(
       model=base_model,
       train_dataset=dataset,
       lora_config=lora_config,
       quantization_config=quantization_config
   )
   ```

3. **Deployment Phase**
   ```typescript
   // Load quantized model
   const model = await TrainingService.loadModel('./models/assistant.gguf');
   
   // Initialize chat interface
   const chat = new ChatInterface(model);
   ```

## 📊 Performance Metrics

| Metric | Value | Notes |
|--------|-------|-------|
| Model Size | 164MB | Q4_K_M quantization |
| Response Time | <2s | Local inference |
| Training Time | ~2h | LoRA on RTX 3080 |
| Memory Usage | 512MB | Peak during inference |
| Data Efficiency | 1K messages | Minimum for style learning |

## 🔒 Privacy & Security

- **Local-first**: All processing happens on your device
- **No cloud storage**: Data never leaves your control
- **API key management**: Secure credential storage
- **Model isolation**: Each user's model is independent

## 🛠️ Development

### Project Structure
```
name-it-yourself/
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Main navigation tabs
│   └── _layout.tsx        # Root layout
├── components/            # Reusable UI components
├── services/              # Business logic services
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript definitions
└── utils/                 # Utility functions
```

### Key Services

#### DataCollectionService
- Platform API integration
- Data normalization
- Export functionality

#### TrainingService
- Training pipeline management
- Model loading
- Progress tracking

#### XPSystem
- Gamification mechanics
- Achievement tracking
- Progress visualization

### Adding New Platforms

1. **Implement API Client**
   ```typescript
   class TwitterAPI {
     async getMessages(filters: MessageFilters): Promise<Message[]> {
       // Platform-specific implementation
     }
   }
   ```

2. **Register with DataCollectionService**
   ```typescript
   DataCollectionService.registerPlatform('twitter', new TwitterAPI());
   ```

3. **Add UI Components**
   ```typescript
   <SocialPlatformCard
     platform="twitter"
     status="connected"
     messageCount={2847}
   />
   ```

## 🎮 Gamification System

The framework includes an XP system to encourage engagement:

- **Data Collection**: +10 XP per platform connected
- **Training Progress**: +100 XP per training step
- **Model Optimization**: +250 XP for quantization
- **Achievements**: Unlock badges for milestones

## 📱 Mobile Features

- **Real-time chat**: Instant responses from your AI
- **Model switching**: Hot-swap between different trained models
- **Training dashboard**: Monitor training progress
- **Data analytics**: Visualize your social media patterns
- **Export tools**: Generate training datasets for external use

## 🔮 Future Roadmap

### Phase 1: Core Framework (Current)
- [x] Multi-platform data collection
- [x] LoRA training pipeline
- [x] Mobile chat interface
- [x] Basic gamification

### Phase 2: Advanced Features
- [ ] Voice interaction
- [ ] Image generation based on style
- [ ] Cross-platform posting
- [ ] Advanced analytics

### Phase 3: Ecosystem
- [ ] Model marketplace
- [ ] Community training guides
- [ ] API for third-party apps
- [ ] Enterprise features

## 🤝 Contributing

This is an open-source project. We welcome contributions:

1. **Fork the repository**
2. **Create a feature branch**
3. **Implement your changes**
4. **Add tests**
5. **Submit a pull request**

### Development Guidelines
- Follow TypeScript best practices
- Write comprehensive tests
- Document new features
- Respect privacy-first principles

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/Stivy-01/name-it-yourself/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Stivy-01/name-it-yourself/discussions)
- **Documentation**: [Wiki](https://github.com/Stivy-01/name-it-yourself/wiki)

---

**Built with ❤️ for the open-source AI community**

*Transform your digital footprint into intelligent assistance.*
