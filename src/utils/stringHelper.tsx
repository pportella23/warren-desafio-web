export function formatCurrency(value: string | number) {
  return !value
    ? ' '
    : new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(value));
}

export function formatFilterLabel(filter: string, type: 'titulos' | 'status') {
  if (typeof filter === 'string' && type === 'titulos') {
    switch (filter) {
      default:
        return filter;
    }
  } else if (typeof filter === 'string' && type === 'status')
    switch (filter) {
      default:
        return filter;
    }

  return '';
}
