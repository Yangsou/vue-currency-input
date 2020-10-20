export function formatCurrency(n, isUnit = false) {
  if (n === 0) {
    return 0;
  }
  if (!n) {
    return '';
  }
  // const c = n.toString().replace(/\./g, '').replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const c = n.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return isUnit ? `${c} đ` : c;
}