export type RequiredInput = 'text' | 'number' | 'regex'

export interface Condition {
    id: string;
    name: string;
    requiredInput?: RequiredInput
}