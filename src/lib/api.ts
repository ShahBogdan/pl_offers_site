const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface GetDataParams {
    endpoint: string;
    query?: Record<string, any>; // Query-параметры (например, ?limit=10)
    headers?: Record<string, string>; // Дополнительные заголовки
}

export async function getData<T>({ endpoint, query = {}, headers = {} }: GetDataParams): Promise<T> {
    try {
        // Формируем query-параметры
        const queryString = new URLSearchParams(query).toString();
        const url = `${API_URL}/${endpoint}${queryString ? `?${queryString}` : ""}`;

        // Делаем запрос
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        });

        // Проверяем статус ответа
        if (!response.ok) {
            throw new Error(`Ошибка API: ${response.status} ${response.statusText}`);
        }

        // Парсим JSON
        return await response.json();
    } catch (error) {
        console.error("Ошибка в getData:", error);
        throw error;
    }
}
