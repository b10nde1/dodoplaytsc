export function getValueByKey<T extends { [key: string]: string | number }>(
    enumObj: T,
    key: keyof T
  ): T[keyof T] {
    return enumObj[key];
}