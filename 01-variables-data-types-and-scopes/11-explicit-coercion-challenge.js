const values = [0, "123", undefined, null, NaN];

console.log(`${"Value".padEnd(8)}\t${"Boolean".padEnd(8)}\t${"Number".padEnd(8)}\t${"String".padEnd(8)}`);

values.forEach(value => {
  const booleanValue = Boolean(value);
  const numberValue = Number(value);
  const stringValue = String(value);
  console.log(`${String(value).padEnd(8)}\t${String(booleanValue).padEnd(8)}\t${String(numberValue).padEnd(8)}\t${stringValue}`);
}); 