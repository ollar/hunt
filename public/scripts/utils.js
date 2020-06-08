function ko() {
  return Math.floor(Math.random() * 0x10000).toString(16);
}

export function uuid() {
    return ko() + ko() + '-' + ko() + '-' + ko() + '-' + ko();
}
//# sourceMappingURL=maps/utils.js.map