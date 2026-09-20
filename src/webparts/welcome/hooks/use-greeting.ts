export interface IGreetingMessages {
  morningMessage: string;
  afternoonMessage: string;
  eveningMessage: string;
}

export function useGreeting(messages: IGreetingMessages): string {
  const { morningMessage, afternoonMessage, eveningMessage } = messages;
  const hour = new Date().getHours();

  if (hour < 12) {
    return morningMessage || "";
  }

  if (hour < 18) {
    return afternoonMessage || "";
  }

  return eveningMessage || "";
}
