
export const required = value => (value || typeof value === 'number' ? undefined : 'Обязательное поле');

export const maxLength = max => value =>
    value && value.length > max ? `Не более ${max} симолов` : undefined;