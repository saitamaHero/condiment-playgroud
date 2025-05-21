export interface Field
{
    key: string;
    name: string;
}

export const objectToFields = (object: Record<string,unknown>, prefix: string = ''): Field[] => {
    const objectKeys = Object.keys(object)

    return objectKeys.flatMap(key => {
        const prefixKey = [prefix,key].filter(k => k).join(".")

        if (Array.isArray(object[key]) && object[key].length > 0 && 'object' === typeof object[key][0]) {
            return objectToFields(object[key][0], prefixKey);
        } else if ('object' === typeof object[key]) {
            return objectToFields(object[key] as Record<string,unknown>, prefixKey);
        }
        
        return [{
            key: prefixKey,
            name: [prefix, key].filter(v => v).join(" ")
        } as Field]
    })
}