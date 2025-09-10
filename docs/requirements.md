
# Requirements - JWT Explorer

## Functional Requirements

- User can paste a JWT token into a text field.
- Automatically decode and display:
  - Header (JSON)
  - Payload (JSON)
  - Signature (base64 string)
- Display JWT parts with syntax highlighting.
- Detect and show error if token is invalid or expired.
- Display token metadata: algorithm, expiration, issued at, not before.
- Allow toggling between dark/light theme.
- Offer buttons to copy decoded sections.
- Provide sample tokens for demo purposes.
- Ensure the entire decoding happens in-browser (no backend).

## Non-Functional Requirements

- Must be lightweight and fast.
- Must support offline decoding.
- Should be mobile-responsive.
- Must not store or transmit tokens anywhere.
- All decoding should be zero-dependency or minimal-dependency.

## Tech Stack

- **Frontend Framework**: Astro + SolidJS (or React alternative)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Libraries**: jwt-decode (or custom parser), Zod (optional for schema validation)
- **Deployment**: Cloudflare Pages / Vercel / Netlify
