// src/components/TodoItem.tsx

import React from 'react';
import type { Task } from '../types.ts';
import { TaskStatus } from '../types.ts';
import { Trash2, Edit2, CheckCircle,Clock } from 'lucide-react'; // Instale 'lucide-react' para ícones

// Instale Lucide React:
// pnpm install lucide-react

// Para fins deste exemplo, vamos mockar a função de contexto, mas no projeto final
// você passaria as funções do useTodos como props ou usaria um Context API.
interface TodoItemProps {
    task: Task;
    onRemove: (id: string) => void;
    onToggleComplete: (id: string) => void;
    // onEdit: (id: string, newTitle: string, newDescription: string) => void; // Para Edição Inline
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onRemove, onToggleComplete }) => {
    // Define a cor da borda com base no status ou prioridade (como no layout de referência)
    const borderColor = task.status === TaskStatus.Completed 
        ? 'border-green-500' // Verde para concluída
        : task.priority === 'Alta'
        ? 'border-red-500'
        : task.priority === 'Média'
        ? 'border-yellow-500'
        : 'border-blue-500';

    // Estilo para tarefas concluídas
    const isCompleted = task.status === TaskStatus.Completed;

    return (
        <div 
            className={`bg-white p-5 rounded-lg shadow-md border-t-4 ${borderColor} transition duration-300 hover:shadow-lg`}
        >
            <div className="flex justify-between items-start mb-3">
                <h3 
                    className={`text-lg font-semibold ${isCompleted ? 'line-through text-gray-400' : 'text-gray-800'}`}
                >
                    {task.title}
                </h3>
                {/* Ícone de Conclusão */}
                <button
                    onClick={() => onToggleComplete(task.id)}
                    className={`p-1 rounded-full transition duration-300 ${
                        isCompleted
                            ? 'text-green-600 hover:bg-green-100'
                            : 'text-gray-400 hover:text-green-600 hover:bg-green-50'
                    }`}
                    aria-label={isCompleted ? "Marcar como Pendente" : "Marcar como Concluída"}
                >
                    <CheckCircle className="w-5 h-5" />
                </button>
            </div>

            {/* Descrição e Tags */}
            <p className={`text-sm mb-4 ${isCompleted ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                {task.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {task.tags.map(tag => (
                    <span
                        key={tag}
                        className="text-xs font-medium px-2 py-0.5 rounded-full bg-teal-100 text-teal-700"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Ações (Editar e Excluir) */}
            <div className="flex justify-end space-x-3 border-t pt-3">
                
                {/* Ícone de Edição */}
                <button
                    className="text-blue-500 hover:text-blue-700 p-1 transition duration-150 rounded-md hover:bg-blue-50"
                    aria-label="Editar Tarefa"
                    // onClick={... Edição Inline será implementada aqui}
                >
                    <Edit2 className="w-5 h-5" />
                </button>

                {/* Ícone de Exclusão */}
                <button
                    onClick={() => onRemove(task.id)}
                    className="text-red-500 hover:text-red-700 p-1 transition duration-150 rounded-md hover:bg-red-50"
                    aria-label="Excluir Tarefa"
                >
                    <Trash2 className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;