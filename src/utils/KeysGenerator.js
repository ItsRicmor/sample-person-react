export const keyGenerator = (module = "", index = 0, key = 36) => {
    return `${module}-${Math.random().toString(36)}-${index}`
}