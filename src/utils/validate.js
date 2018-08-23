export function isValidUser(str) {
  const valid_map = ["超级管理员", "风控", "BD"]
  return valid_map.indexOf(srt.trim()) >= 0
}