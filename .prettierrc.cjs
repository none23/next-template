module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    'server-only',
    '^(react(/.*)?|react(-dom)?(/.*)?|next(/.*)?)$',
    '^next',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
  ],
};
