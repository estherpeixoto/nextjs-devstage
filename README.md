# DevStage 🎨

**DevStage Frontend** is the user interface for the DevStage referral software, designed to be used during online events. It provides an intuitive and interactive experience for participants to send and receive referrals in real-time.

## 🚀 Technologies Used

- **React** - A library for building user interfaces
- **Next.js** - A React framework with server-side rendering and static site generation
- **TypeScript** - Static typing for a more robust and maintainable codebase
- **Tailwind CSS** - A utility-first CSS framework for styling
- **Orval** - API client code generation from OpenAPI specifications
- **Zod** - Type-safe schema validation

> 🔗 The backend for this project can be found at [nodejs-devstage](https://github.com/estherpeixoto/nodejs-devstage)

## 📦 How to Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/estherpeixoto/nextjs-devstage.git
   cd nextjs-devstage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env.local` file in the project's root with the following settings:
   ```
   API_URL="http://localhost:3333"
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Access the app:**
   The app will be available at [http://localhost:3000](http://localhost:3000).

## 🛠️ Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the project for production
- `npm start`: Starts the production server
- `npm run lint`: Lints the code using ESLint

## 🤝 Contributing

Contributions are welcome! Follow the steps below:

1. Fork the project
2. Create a branch for your feature: `git checkout -b my-feature`
3. Commit your changes: `git commit -m 'My new feature'`
4. Push to the branch: `git push origin my-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [Esther Peixoto](https://github.com/estherpeixoto)

