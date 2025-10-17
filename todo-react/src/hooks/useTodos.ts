// src/hooks/useTodos.ts

import { useState, useEffect } from 'react';
import type{ Task,Priority } from '../types.ts';
import { TaskStatus } from '../types.ts';
import { loadTasks, saveTasks } from '../lib/storage';
import { v4 as uuidv4 } from 'uuid'; // Instale 'uuid' (npm install uuid @types/uuid)

// Obs: Lembre-se de instalar 'uuid' para gerar IDs únicos:
// npm install uuid
// npm install --save-dev @types/uuid

export const useTodos = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // 1. Carregar tarefas do LocalStorage no início
    useEffect(() => {
        const initialTasks = loadTasks();
        setTasks(initialTasks);
        setIsLoading(false);
    }, []);

    // 2. Salvar tarefas no LocalStorage sempre que a lista mudar
    useEffect(() => {
        // Evita salvar no LocalStorage ao montar o componente (quando isLoading é true)
        if (!isLoading) {
            saveTasks(tasks);
        }
    }, [tasks, isLoading]);


    // --- Funções do CRUD (Criar, Remover, Marcar Concluída)  ---

    /** Cria uma nova tarefa. */
    const addTask = (title: string, description: string, priority: Priority, tags: string[] = []) => {
        const newTask: Task = {
            id: uuidv4(),
            title,
            description,
            status: TaskStatus.Pending,
            priority,
            tags,
            createdAt: new Date().toISOString(),
            // dueDate: opcionalmente você pode adicionar aqui
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    /** Remove uma tarefa. */
    const removeTask = (id: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };
    
    /** Altera o status da tarefa para Concluída ou Pendente. */
    const toggleComplete = (id: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id
                    ? {
                          ...task,
                          status:
                              task.status === TaskStatus.Completed
                                  ? TaskStatus.Pending
                                  : TaskStatus.Completed,
                      }
                    : task
            )
        );
    };

    // Faltaria aqui a função 'updateTask' para edição inline, que faremos depois.

    return {
        tasks,
        isLoading,
        addTask,
        removeTask,
        toggleComplete,
        // (Futuramente) Funções de filtro, busca e ordenação
    };
};