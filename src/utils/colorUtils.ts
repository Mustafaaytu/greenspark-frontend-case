interface ColorMap {
  [key: string]: {
    bgColor: string;
    fontColor: string;
  };
}

export const colorMap: ColorMap = {
  '#FFFFFF': { bgColor: '#FFFFFF', fontColor: '#000' },
  '#2E3A8C': { bgColor: '#2E3A8C', fontColor: '#FFFFFF' },
  '#212121': { bgColor: '#212121', fontColor: '#FFFFFF' },
  '#3B755F': { bgColor: '#3B755F', fontColor: '#F2EBDB' },
  '#F2EBDB': { bgColor: '#F2EBDB', fontColor: '#3B755F' },
  white: { bgColor: '#FFFFFF', fontColor: '#000' },
  default: { bgColor: '#000', fontColor: '#FFFFFF' },
};

export const colors: Record<string, string> = {
  blue: '#2E3A8C',
  green: '#3B755F',
  black: '#212121',
  cream: '#F2EBDB',
  white: '#FFFFFF',
};

export const hexToText = (hex: string) => {
  switch (hex) {
    case '#2E3A8C':
      return 'blue';
    case '#3B755F':
      return 'green';
    case '#212121':
      return 'black';
    case '#F2EBDB':
      return 'cream';
    case '#FFFFFF':
      return 'white';
    default:
      return 'default';
  }
};
