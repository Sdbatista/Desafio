// src/types.ts

// Enum para as prioridades
export enum Priority {
    Low = 'Baixa',
    Medium = 'Média',
    High = 'Alta',
}

// Enum para o status da tarefa
export enum TaskStatus {
    Pending = 'Pendente',
    InProgress = 'Em Andamento',
    Completed = 'Concluída',
}

// Interface para o objeto Tarefa
export interface Task {
    id: string; // Único para identificação e CRUD
    title: string;
    description: string;
    status: TaskStatus;
    priority: Priority;
    tags: string[]; // Para filtros por tags
    createdAt: string; // Data de criação (para ordenação)
    dueDate?: string; // Data de vencimento (opcional)
}