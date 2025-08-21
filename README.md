## Dessert Shop – Product List with Cart (Vue 3 + TypeScript)

An interactive product list of desserts with a functional cart, built with Vue 3, Vite, and TypeScript. Product data is loaded from a local `data.json` file, and users can add/remove items, adjust quantities, and confirm orders via a modal.

### Features

- Add desserts to cart and remove them
- Increase/decrease item quantities in the cart
- See an order confirmation modal and reset to start a new order
- Responsive layout for mobile, tablet, and desktop
- Accessible focus and hover states for interactive elements

### Data Source

- The UI is populated from the root-level `data.json` file.
- Each item includes `image` paths, `name`, `category`, and `price`.
- To change the catalog, edit `data.json` and restart the dev server if needed.

Example entry:

```json
{
  "image": {
    "thumbnail": "./src/assets/images/image-waffle-thumbnail.jpg",
    "mobile": "./src/assets/images/image-waffle-mobile.jpg",
    "tablet": "./src/assets/images/image-waffle-tablet.jpg",
    "desktop": "./src/assets/images/image-waffle-desktop.jpg"
  },
  "name": "Waffle with Berries",
  "category": "Waffle",
  "price": 6.5
}
```

### Tech Stack

- Vue 3 (Composition API)
- TypeScript
- Vite
- ESLint + Vue TS config

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

### Project Scripts

- `dev`: run Vite dev server
- `build`: type-check and build for production
- `preview`: preview the production build
- `lint`: run ESLint with auto-fix

### Acknowledgements

Special thanks to [Frontend Mentor](https://www.frontendmentor.io) for providing the original design specifications and assets that inspired and guided this implementation.
