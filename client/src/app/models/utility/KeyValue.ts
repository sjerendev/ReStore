export class KeyValue<T> {
    key: string;
    value: T;

    static create<T>(key: string, value: T) {
        var keyValue = new KeyValue<T>();
        keyValue.key = key;
        keyValue.value = value;
        return keyValue;
    }
}