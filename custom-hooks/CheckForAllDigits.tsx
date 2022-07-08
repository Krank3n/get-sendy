const digits = [1, 2, 3, 4];

export function CheckForAllDigits(str) {
  for (let i = 0; i < digits.length; i++) {
    if (!str.includes(digits[i])) {
      return str;
    }
  }
  return true;
}

export default function ReplaceDigits(str) {
  let yo = str;

  if (CheckForAllDigits(str)) {
    for (let i = 0; i < digits.length; i++) {
      console.log(digits[i]);
      yo = yo.replace(`${digits[i]}.`, ',');
    }
  }
  return yo;
}
