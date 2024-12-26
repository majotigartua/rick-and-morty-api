export function message(response, code, message = null, content = null) {
  if (content === null && message !== null) {
    return response.status(code).json({ message });
  }
  if (message === null && content !== null) {
    return response.status(code).json(content);
  }
  return response.status(code).json({ message, content });
}