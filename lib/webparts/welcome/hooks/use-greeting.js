export function useGreeting(messages) {
    var morningMessage = messages.morningMessage, afternoonMessage = messages.afternoonMessage, eveningMessage = messages.eveningMessage;
    var hour = new Date().getHours();
    if (hour < 12) {
        return morningMessage || "";
    }
    if (hour < 18) {
        return afternoonMessage || "";
    }
    return eveningMessage || "";
}
//# sourceMappingURL=use-greeting.js.map