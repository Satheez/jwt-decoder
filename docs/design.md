
# Design - JWT Explorer

## UI/UX Design Goals

- Clean, distraction-free interface
- Use monospace fonts for JWT fields
- Layout split into:
  - JWT Input field
  - Decoded Header, Payload, Signature panels
- Expandable/collapsible JSON viewer for large payloads
- Responsive layout with toggle for dark/light mode
- Simple theme switcher in corner (e.g., sun/moon icon)
- Paste auto-focus for ease of use

## Components

- **JwtInput.astro**: JWT input and validation handler
- **DecodedView.astro**: Render JSON for header/payload/signature
- **ThemeToggle.astro**: Dark/light mode switch
- **ErrorBanner.astro**: Shows invalid token message

## Layout Wireframe

```
+---------------------------------------------------------+
| JWT Explorer                                            |
| [ Light ⭑ / Dark 🌙 ]                                   |
|                                                         |
| Paste your JWT below:                                   |
| [ TEXTAREA ]                                            |
|                                                         |
| ┌────────────┐ ┌──────────────┐ ┌─────────────┐         |
| |  Header    | |   Payload    | |  Signature   |         |
| └────────────┘ └──────────────┘ └─────────────┘         |
| [ Copy ]        [ Copy ]         [ Copy ]               |
+---------------------------------------------------------+
```

## Styles

- Font: `monospace` for code blocks
- Tailwind utilities for spacing, theming, and responsiveness
- Custom scrollbar and border for textarea/input field
