# NPC Content Configs

This folder contains shareable, PR-friendly data used by the game. Keep edits simple and well-sourced so the file can live on GitHub and be contributed to by the community.

## Countries config

File: `countries.ts`

Each entry must include:
- `id`: ISO 3166-1 alpha-2 code, lowercase (e.g., `us`, `fr`)
- `name`: Display name
- `image` (optional): background image metadata for UI cards
- `cities`: 3–6 well-known cities for birthplace selection
- `sources`: At least one reputable source URL used to verify names/cities

Guidelines:
- Prefer official statistics agencies or government sources
- Keep city names in common English usage
- Avoid duplicates and spelling variants

Example:
```ts
{
  id: 'jp',
  name: 'Japan',
  image: { url: 'https://source.unsplash.com/1200x900/?japan,city', credit: 'Unsplash (dynamic)' },
  cities: ['Tokyo', 'Osaka', 'Yokohama', 'Nagoya', 'Sapporo'],
  sources: ['https://www.stat.go.jp'],
}
```

## Names config

File: `names.ts`

Keep name lists short, diverse, and realistic. If you add a large batch, explain the source and grouping.
