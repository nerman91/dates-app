interface IValueCoordinates {
  left: string;
  top: string;
}

export function calculateCoordinates(index: number, length: number): IValueCoordinates {
  const radius = 50;
  const arc = 2 * Math.PI * (1 / length);
  const angile = index * arc;
  const x = radius * Math.cos(angile);
  const y = radius * Math.sin(angile);
  return { left: 50 + x + '%', top: 50 + y + '%' };
}
