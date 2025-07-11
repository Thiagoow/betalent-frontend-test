function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString('pt-BR');
}

function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length < 8) return phone;

  const countryCode = cleaned.slice(0, 2);
  const localCode = cleaned.slice(2, 4);
  const phoneNum = cleaned.slice(4);

  const formattedNum =
    phoneNum.length === 9
      ? `${phoneNum.slice(0, 5)}-${phoneNum.slice(5)}`
      : `${phoneNum.slice(0, 4)}-${phoneNum.slice(4)}`;

  return `+${countryCode} (${localCode}) ${formattedNum}`;
}

export { formatDate, formatPhone };
